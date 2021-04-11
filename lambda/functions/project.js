const projectConstants = require("./constants/projectConstants");
const arrays = require("./utilities/arrays");

const getProjectOrgs = async (pool, request) => {
  const body = request.body;
  const values = body.tableInfo;
  const query = body.query || "";

  const specificQuery = body.specificQuery;

  const text = specificQuery
    ? specificQuery
    : `SELECT * FROM projectorg ${query}`;

  console.log(text, "values=", values);

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
};

const queryString = `
  SELECT 
  t1.site_name,
  t2.project_name,
  t2.author,
  CONCAT(
    t2.organisation1,' ',
    t2.organisation2,' ',
    t2.organisation3,' ',
    t2.organisation4,' ',
    t2.organisation5,' ',
    t2.organisation6,' ',
    t2.organisation7,' ',
    t2.organisation8,' ',
    t2.organisation9,' ',
    t2.organisation10
  ),
  t2.project_type_new_build,
  t2.project_date_start,
  t2.project_date_end,
  t2.project_details,
  t2.project_justification, 
  t2.project_cost_est,
  t2.project_funding,
  t2.project_stage,
  t2.project_priority,
  t2.project_id
  FROM site as t1
  INNER JOIN project as t2
  ON t1.site_id = t2.site_id
  WHERE private<>'2'
`;

const privacyQueryString = `
  SELECT
    project_id,
    private,
    author,
    organisation1,
    organisation2,
    organisation3,
    organisation4,
    organisation5,
    organisation6,
    organisation7,
    organisation8,
    organisation9,
    organisation10
    FROM project WHERE private <>'2'
`;

const orgQueryString = user => {
  return `
  SELECT
	account,
	organisation_group
FROM
	projectorg
WHERE
	organisation_group = (
		SELECT
			organisation_group
		FROM
			projectorg
		where
			account = '${user}'
	);
`;
};

const getProjectTable = async (pool, request) => {
  const body = request.body;

  console.log("query body is ", body);
  // const regionNames = body.regionNames;
  // const regionType = body.regionType;
  // const tableInfo = body.tableInfo;

  const text = queryString;

  console.log(text);

  const rdsClient = await pool.connect();

  const result = await rdsClient.query(text);
  const privacyResult = await rdsClient.query(privacyQueryString);
  const organisationResult = await rdsClient.query(orgQueryString(body.tableInfo));

  const jsonData = JSON.parse(JSON.stringify(result.rows));
  const privacyData = JSON.parse(JSON.stringify(privacyResult.rows));
  const myOrganisationMembers = JSON.parse(
    JSON.stringify(organisationResult.rows)
  );

  // // process jsonData with the key:value tables
  let adjustedData = jsonData;

  jsonData.map((row, index) => {
    projectConstants.projectTableDetails.map(column => {
      const key = column.pgname;

      if (row[key] !== null && !!column.options) {
        const foundArray = arrays.ArrayFindElement(
          column.options,
          "value",
          row[key]
        );

        if (!!foundArray && !!foundArray.label) {
          adjustedData[index][key] = foundArray.label;
        }
      }
    });
  });

  console.log(projectConstants.projectTableHeaders);

  adjustedData.unshift(projectConstants.projectTableHeaders);

  console.log("jsonData", adjustedData);

  return { adjustedData, privacyData, myOrganisationMembers };
};

exports.getProjectOrgs = getProjectOrgs;
exports.getProjectTable = getProjectTable;
