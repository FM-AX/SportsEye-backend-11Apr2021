const AWS = require("aws-sdk");
const ApiBuilder = require("claudia-api-builder");
const nJwt = require("jsonwebtoken");
const ms = require("ms");
const jwksClient = require("jwks-rsa");

const csvDownload = require('./functions/csv');
const getRegion = require('./functions/region');
const project = require('./functions/project');
const site = require('./functions/site');

const jClient = jwksClient({
  cache: true,
  cacheMaxEntries: 5,
  cacheMaxAge: ms("10h"),
  jwksUri: process.env.JWKS_URI
});

const kid = process.env.KID;

const API = new ApiBuilder();
const table = process.env.DB_TABLE;
const config = {
  accessKeyId: process.env.IAM_ACCESS_KEY,
  secretAccessKey: process.env.IAM_SECRET_KEY,
  region: process.env.DB_AWS_REGION
};

AWS.config.update(config);
const client = new AWS.DynamoDB.DocumentClient();

const verifyJwt = request => {
  const { jwt } = request.queryString;
  return new Promise((resolve, reject) => {
    return jClient.getSigningKey(kid, (err, key) => {
      const signingKey = key.publicKey || key.rsaPublicKey;
      resolve(
        new Promise((resolve, reject) => {
          return nJwt.verify(
            jwt,
            signingKey,
            {
              algorithms: ["RS256"],
              audience: "groups-backend-dev",
              issuer: "https://active-xchange.au.auth0.com/"
            },
            (err, verifiedJwt) => {
              if (!err) {
                console.log("jwtSuccess", verifiedJwt);
                return resolve(request);
              } else {
                console.log("jwtError", err);
                return reject(err);
              }
            }
          );
        })
      );
    });
  });
};

API.get("/groups", request => {
  const { groupId, jwt } = request.queryString;
  if (!groupId || !jwt) {
    throw new API.ApiResponse(
      "Missing required parameter",
      { "Content-Type": "text/plain" },
      400
    );
  }
  return verifyJwt(request).then(request => {
    const params = {
      TableName: table,
      Key: {
        group: groupId
      }
    };
    return new Promise((resolve, reject) => {
      return client.get(params, (err, data) => {
        if (err) {
          console.log("Error", err);
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  });
});

// BEGIN POSTGRESQL DATABASE WORK

const { Pool } = require("pg");

var pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2100
});

API.post("/sites", async request => {
  let query = "";
  let params = [];

  const body = request.body;
  const { tableInfo, header, site_id } = body;

  if (header === "add") {
    const prefix = `INSERT INTO site (site_id,`;

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return "$" + (index + 1);
    });

    query =
      prefix +
      keys +
      ")" +
      " VALUES((SELECT MAX(site_id)+1 FROM site)," +
      dollar +
      ") RETURNING *";

    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
  } else if (header === "update") {
    const prefix = "UPDATE site SET ";

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return item + " = ($" + (index + 2) + ") ";
    });

    const suffix = "WHERE site_id = ($1) RETURNING *";

    query = prefix + dollar + suffix;
    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
    params = body.site_id.concat(params);
  }

  console.log("query is", query);
  console.log("params is", params);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(query, params)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.get("/sites", async () => {
  const text = `SELECT site_id, longitude, latitude, site_name FROM site ORDER BY site_id`;

  console.log("QUERYING PG TABLE FOR ALL SITE DATA COORDS ONLY");

  const rdsClient = await pool.connect();

  let data = [];

  const result = await rdsClient
    .query(text)
    .then(res => {
      data.push(res.rows);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));

  console.log(data);

  let count = [];
  const countQuery = "SELECT COUNT(*) from pg_stat_activity";

  const countResult = await rdsClient
    .query(countQuery)
    .then(res => {
      count.push(res.rows);

      rdsClient.release();

      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));

  console.log("QUICK PG TABLE COUNT begins");
  console.log(`QUICK PG TABLE COUNT: ${countResult} active connections`);

  return data;
});

API.post("/sites/search", async request => {
  const body = request.body;
  const values = body.tableInfo;
  const query = body.header || "site_id";
  const text = `SELECT * FROM site WHERE ${query} =($1)`;

  const rdsClient = await pool.connect();

  console.log(text);

  let data = [];

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      data.push(res.rows);

      rdsClient.release();

      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));

  console.log("result is", data);

  return data;
});

API.delete("/sites", async request => {
  const text = `DELETE FROM site WHERE site_id=($1) RETURNING *`;

  const body = request.body;
  const values = body.tableInfo;

  console.log("TO DELETE ID=", values);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.post("/facilities", async request => {
  let query = "";
  let params = [];

  const body = request.body;
  const { tableInfo, header, facility_id } = body;

  console.log("body consists of", tableInfo, header, facility_id);

  if (header === "add") {
    const prefix = "INSERT INTO facility (facility_id,";

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return "$" + (index + 1);
    });

    query =
      prefix +
      keys +
      ")" +
      " VALUES((SELECT MAX(facility_id)+1 FROM facility)," +
      dollar +
      ") RETURNING *";
    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
  } else if (header === "update") {
    const prefix = "UPDATE facility SET ";

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return item + " = ($" + (index + 2) + ") ";
    });

    const suffix = "WHERE facility_id = ($1) RETURNING *";

    query = prefix + dollar + suffix;
    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
    params = facility_id.concat(params);
  }

  console.log("query is", query);
  console.log("params is", params);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(query, params)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.post("/facilities/search", async request => {
  const body = request.body;
  const values = body.tableInfo;
  const query = body.header || "site_id";
  // to limit large queries to only return critical site data (eg id)
  const limiter = query !== "site_id" ? "site_id " : "*";
  const text = `SELECT ${limiter} FROM facility WHERE ${query} =($1) ORDER BY facility_id`;

  const rdsClient = await pool.connect();

  console.log(text);

  let data = [];

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      data.push(res.rows);

      rdsClient.release();

      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));

  console.log("result is", data);

  return data;
});

API.delete("/facilities", async request => {
  const text = `DELETE FROM facility WHERE facility_id=($1) RETURNING *`;

  const body = request.body;
  const values = body.tableInfo;

  console.log("TO DELETE ID=", values);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.post("/logs", async request => {
  const body = request.body;
  const values = body.tableInfo;
  const queryForSiteId = body.header;

  console.log(values);

  const text = queryForSiteId
    ? `SELECT * FROM auditactivitylog WHERE site_id=($1) ORDER BY id DESC LIMIT 1`
    : `INSERT INTO auditactivitylog(id, site_id, text, username, timestamp)
    VALUES((SELECT MAX(id)+1 FROM auditactivitylog), $1, $2, $3, CURRENT_TIMESTAMP(2))
    RETURNING *
  `;

  console.log(text);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

// IF WE NEED RECENT ACTIVITY LOG
// API.get("/logs", async request => {
//   const text = `SELECT * FROM auditactivitylog ORDER BY id DESC LIMIT 5`;

//   const rdsClient = await pool.connect();

//   let data = [];

//   const result = await rdsClient
//     .query(text)
//     .then(res => {
//       data.push(res.rows);

//       rdsClient.release();

//       return res.rows;
//     })
//     .catch(err => console.error("Error executing query", err.stack));

//   return data;
// });

/////// PROJECTS

API.post("/projects", async request => {
  let query = "";
  let params = [];

  const body = request.body;
  const { tableInfo, header, project_id } = body;

  console.log("body consists of", tableInfo, header, project_id);

  if (header === "add") {
    const prefix = "INSERT INTO project (project_id,";

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return "$" + (index + 1);
    });

    query =
      prefix +
      keys +
      ")" +
      " VALUES((SELECT MAX(project_id)+1 FROM project)," +
      dollar +
      ") RETURNING *";
    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
  } else if (header === "update") {
    const prefix = "UPDATE project SET ";

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return item + " = ($" + (index + 2) + ") ";
    });

    const suffix = "WHERE project_id = ($1) RETURNING *";

    query = prefix + dollar + suffix;
    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
    params = project_id.concat(params);
  }

  console.log("query is", query);
  console.log("params is", params);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(query, params)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.post("/projects/search", async request => {
  const body = request.body;
  const values = body.tableInfo;
  const query = body.header || "WHERE site_id = ($1)";
  // to limit large queries to only return critical site data (eg id)
  const limiter = body.limiter || "*";

  // case 1: SELECT      *     FROM project "WHERE site_id = ($1)" ORDER BY project_id
  // case 2: SELECT ${limiter} FROM project       ${query}         ORDER BY project_id
  const text = `SELECT ${limiter} FROM project ${query} ORDER BY project_name`;

  const rdsClient = await pool.connect();

  console.log(text);

  let data = [];

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      data.push(res.rows);

      rdsClient.release();

      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));

  console.log("result is", data);

  return data;
});

API.delete("/projects", async request => {
  const text = `DELETE FROM project WHERE project_id=($1) RETURNING *`;

  const body = request.body;
  const values = body.tableInfo;

  console.log("TO DELETE ID=", values);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.post("/projectcomments", async request => {
  let query = "";
  let params = [];

  const body = request.body;
  const { tableInfo, header, project_id } = body;

  console.log("body consists of", tableInfo, header);

  if (header === "add") {
    const prefix = "INSERT INTO projectcomment (";

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return "$" + (index + 1);
    });

    query =
      prefix +
      keys +
      ",timestamp)" +
      " VALUES(" +
      dollar +
      ", CURRENT_TIMESTAMP(2)) RETURNING *";
    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
  } else if (header === "update") {
    const prefix = "UPDATE projectcomment SET ";

    const keys = Object.keys(tableInfo);
    const dollar = keys.map(function(item, index) {
      return item + " = ($" + (index + 2) + ") ";
    });

    const suffix = "WHERE id = ($1) RETURNING *";

    query = prefix + dollar + suffix;
    params = Object.keys(tableInfo).map(function(k) {
      if(tableInfo[k] === '') {
        return null;
      }
      return tableInfo[k];
    });
    params = project_id.concat(params);
  }

  console.log("query is", query);
  console.log("params is", params);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(query, params)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.post("/projectcomments/search", async request => {
  const body = request.body;
  const values = body.tableInfo;
  const query = body.header || "project_id";

  const text = `SELECT * FROM projectcomment WHERE ${query} =($1) ORDER BY id DESC`;

  const rdsClient = await pool.connect();

  console.log(text);

  let data = [];

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      data.push(res.rows);

      rdsClient.release();

      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));

  console.log("result is", data);

  return data;
});

API.delete("/projectcomments", async request => {
  const text = `DELETE FROM projectcomment WHERE id=($1) RETURNING *`;

  const body = request.body;
  const values = body.tableInfo;

  console.log("TO DELETE ID=", values);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

API.post("/projectlogs", async request => {
  const body = request.body;
  const values = body.tableInfo;
  const query = body.header;
  const identifier = body.identifier;

  console.log(values);

  const text =
    query === "search"
      ? `SELECT * FROM projectactivitylog WHERE ${identifier}=($1) ORDER BY id DESC LIMIT 1`
      : `INSERT INTO projectactivitylog(id, ${identifier}, text, username, timestamp)
    VALUES((SELECT MAX(id)+1 FROM projectactivitylog), $1, $2, $3, CURRENT_TIMESTAMP(2))
    RETURNING *
  `;

  console.log(text);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
});

// SITE EXPORTS
API.post("/sites/map", (request)=> site.getMapPoints(pool, request))

// PROJECT EXPORTS
API.post("/projectorgs", (request)=> project.getProjectOrgs(pool, request));

API.post("/projects/table", (request)=> project.getProjectTable(pool, request));

// DATA EXPORTS
API.post("/sites/export", (request)=> csvDownload(pool, request));

API.post("/sites/regions", (request)=> getRegion(pool, request));

module.exports = API;
