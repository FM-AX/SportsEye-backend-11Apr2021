const getRegion = async (pool, request) => {
  const body = request.body;
  const query = body.query;

  console.log('query body is', body);

  const text =
    query === "sa2"
      ? `SELECT distinct Sa2_name FROM public.site where Sa2_name IS NOT NULL AND country='AUS'
      ORDER BY Sa2_name` : 
      `SELECT distinct lga_name FROM public.site where lga_name IS NOT NULL AND country='AUS'
      ORDER BY lga_name`;

  console.log(text);

  const rdsClient = await pool.connect();

  const result = await rdsClient
    .query(text)
    .then(res => {
      rdsClient.release();
      console.log(res);
      return res.rows;
    })
    .catch(err => console.error("Error executing query", err.stack));
  console.log(result);

  return result;
};

module.exports = getRegion;
