const AWS = require("aws-sdk");
const stringify = require("csv-stringify/lib/sync");
const csvConstants = require("./constants/csvConstants");
const arrays = require('./utilities/arrays');

const pgQueryStringLga = lgaName => {
  let queryString = `lga_name = '${lgaName[0].value}'`
  lgaName.map((item, index)=>{
    if(index > 0){
      queryString = queryString + `OR lga_name = '${item.value}'`
    }
  })

  return `
    SELECT 
      t1.site_name,
      t1.site_address,
      t1.longitude,
      t1.latitude,
      t1.sa2_name,
      t1.lga_name,
      t1.site_build_year,
      t1.site_owner,
      t1.site_owner_type,
      t1.site_quality,
      t2.facility_alt_name,
      t2.facility_status,
      t2.facility_type,
      t2.facility_subtype,
      t2.facility_size_value1,
      t2.facility_size_value2,
      t2.facility_size_value3,
      t2.facility_type_ol1,
      t2.facility_subtype_ol1,
      t2.facility_size_value1_ol1,
      t2.facility_size_value2_ol1,
      t2.facility_size_value3_ol1,
      t2.facility_type_ol2,
      t2.facility_subtype_ol2,
      t2.facility_size_value1_ol2,
      t2.facility_size_value2_ol2,
      t2.facility_size_value3_ol2
    FROM site as t1
    FULL OUTER JOIN facility as t2
      ON t1.site_id = t2.site_id
    WHERE ${queryString} AND country = 'AUS'   
  `;
};

const pgQueryStringSa2 = sa2Name => {
  let queryString = `sa2_name = '${sa2Name[0].value}'`
  sa2Name.map((item, index)=>{
    if(index > 0){
      queryString = queryString + `OR sa2_name = '${item.value}'`
    }
  })

  return `
    SELECT 
      t1.site_name,
      t1.site_address,
      t1.longitude,
      t1.latitude,
      t1.sa2_name,
      t1.lga_name,
      t1.site_build_year,
      t1.site_owner,
      t1.site_owner_type,
      t1.site_quality,
      t2.facility_alt_name,
      t2.facility_status,
      t2.facility_type,
      t2.facility_subtype,
      t2.facility_size_value1,
      t2.facility_size_value2,
      t2.facility_size_value3,
      t2.facility_type_ol1,
      t2.facility_subtype_ol1,
      t2.facility_size_value1_ol1,
      t2.facility_size_value2_ol1,
      t2.facility_size_value3_ol1,
      t2.facility_type_ol2,
      t2.facility_subtype_ol2,
      t2.facility_size_value1_ol2,
      t2.facility_size_value2_ol2,
      t2.facility_size_value3_ol2
    FROM site as t1
    FULL OUTER JOIN facility as t2
      ON t1.site_id = t2.site_id
    WHERE ${queryString} AND country = 'AUS'   
  `;
};

const csvDownload = async (pool, request) => {
  const body = request.body;

  console.log("query body is ", body);
  const regionNames = body.regionNames;
  const regionType = body.regionType;
  const tableInfo = body.tableInfo;

  const text = regionType === 'lga' ? pgQueryStringLga(regionNames) : pgQueryStringSa2(regionNames);

  console.log(text);

  const rdsClient = await pool.connect();

  const result = await rdsClient.query(text);

  const jsonData = JSON.parse(JSON.stringify(result.rows));

  // // process jsonData with the key:value tables
  let adjustedData = jsonData;

  jsonData.map((row, index) => {
    csvConstants.csvExportDetails.map(column => {
      const key = column.name;

      if (row[key] !== null && !!column.options) {
        const foundArray = arrays.ArrayFindElement(column.options, "value", row[key]);

        if (!!foundArray && !!foundArray.label) {
          adjustedData[index][key] = foundArray.label;
        }

        if (!!column.facilitySubtype && !!foundArray && !!foundArray.unit) {
          if (column.facilitySubtype === 1) {
            if (!!adjustedData[index].facility_size_value1) {
              adjustedData[index].facility_size_value1 =
                adjustedData[index].facility_size_value1 +
                " " +
                foundArray.unit;
            }

            if (
              !!foundArray.unit2 &&
              !!adjustedData[index].facility_size_value2
            ) {
              adjustedData[index].facility_size_value2 =
                adjustedData[index].facility_size_value2 +
                " " +
                foundArray.unit2;

              if (
                !!foundArray.unit3 &&
                !!adjustedData[index].facility_size_value3
              ) {
                adjustedData[index].facility_size_value3 =
                  adjustedData[index].facility_size_value3 +
                  " " +
                  foundArray.unit3;
              }
            }
          }

          if (column.facilitySubtype === 2) {
            if (!!adjustedData[index].facility_size_value1_ol1) {
              adjustedData[index].facility_size_value1_ol1 =
                adjustedData[index].facility_size_value1_ol1 +
                " " +
                foundArray.unit;
            }

            if (
              !!foundArray.unit2 &&
              !!adjustedData[index].facility_size_value2_ol1
            ) {
              adjustedData[index].facility_size_value2_ol1 =
                adjustedData[index].facility_size_value2_ol1 +
                " " +
                foundArray.unit2;

              if (
                !!foundArray.unit3 &&
                !!adjustedData[index].facility_size_value3_ol1
              ) {
                adjustedData[index].facility_size_value3_ol1 =
                  adjustedData[index].facility_size_value3_ol1 +
                  " " +
                  foundArray.unit3;
              }
            }
          }

          if (column.facilitySubtype === 3) {
            if (!!adjustedData[index].facility_size_value1_ol2) {
              adjustedData[index].facility_size_value1_ol2 =
                adjustedData[index].facility_size_value1_ol2 +
                " " +
                foundArray.unit;
            }

            if (
              !!foundArray.unit2 &&
              !!adjustedData[index].facility_size_value2_ol2
            ) {
              adjustedData[index].facility_size_value2_ol2 =
                adjustedData[index].facility_size_value2_ol2 +
                " " +
                foundArray.unit2;

              if (
                !!foundArray.unit3 &&
                !!adjustedData[index].facility_size_value3_ol2
              ) {
                adjustedData[index].facility_size_value3_ol2 =
                  adjustedData[index].facility_size_value3_ol2 +
                  " " +
                  foundArray.unit3;
              }
            }
          }
        }
      }
    });
  });

  adjustedData.unshift(csvConstants.csvExportHeaders);

  console.log("jsonData", adjustedData);

  const s3 = new AWS.S3();

  const currentdate = new Date();
  const datetime =
    currentdate.getDate() +
    "" +
    (currentdate.getMonth() + 1) +
    "" +
    currentdate.getFullYear() +
    "_" +
    currentdate.getHours() +
    "" +
    currentdate.getMinutes();

  const filename = "sportseye_data_" + datetime + "_" + tableInfo + `.csv`;

  await s3
    .putObject({
      Bucket: "sportseye-csv-downloads",
      Key: filename,
      Body: stringify(adjustedData)
    })
    .promise();

  const fullPath = await s3
    .getSignedUrl("getObject", {
      Bucket: "sportseye-csv-downloads",
      Key: filename,
      Expires: 60
    })

  // const fullPath = `https://sportseye-csv-downloads.s3-ap-southeast-2.amazonaws.com/${filename}`;

  return fullPath;
};

module.exports = csvDownload;
