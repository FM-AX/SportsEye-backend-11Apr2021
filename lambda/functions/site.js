const getMapPoints = async (pool, request) => {
  const body = request.body;
  const values = body.tableInfo;
  const query = body.query;

  const text = query
    ? query
    : `SELECT site_id, longitude, latitude, site_name
        FROM site
        WHERE longitude BETWEEN ($1) AND ($2)
        AND latitude BETWEEN ($3) AND ($4)
    `;

  console.log("receivedQuery is", text, "values=", values);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text, values)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log("outGoing result is", result);

  return result;
};

exports.getMapPoints = getMapPoints;
