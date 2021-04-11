const AWS = require('aws-sdk')
const groupData = require('../data/group-data/index')
const path = require('path')

require('dotenv').config({
  path: path.join(process.cwd(), process.env.DOTENV_CONFIG)
})

const getConfig = () => {
  return {
    table: process.env.TABLE_NAME,
    config: {
      accessKeyId: process.env.IAM_ACCESS_KEY,
      secretAccessKey: process.env.IAM_SECRET_KEY,
      region: process.env.AWS_REGION
    }
  }
}

const setConfig = (config) => {
  AWS.config.update(config)
}

const getDocumentClient = () => {
  return new AWS.DynamoDB.DocumentClient()
}

const removeEmptyStringElements = (obj) => {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      removeEmptyStringElements(obj[prop]);
    } else if(obj[prop] === '') {
      delete obj[prop];
    }
  }
  return obj;
}

const addItem = ({client, table, group, itemData}) => {
  const params = {
    TableName: table,
    Item: {
      group,
      ...removeEmptyStringElements(itemData)
    }
  }
  client.put(params, (err, data) => {
    if (err) console.error(err)
    else console.log(data)
  })
}

getItem = ({client, table, group}) => {
  const params = {
    TableName: table,
    Key: {
      group
    }
  }
  client.get(params, (err, data) => {
    if (err) console.error(err)
    else console.log(data)
  })
}

const main = () => {
  const cfg = getConfig()
  setConfig(cfg.config)
  const client = getDocumentClient()
  const table = cfg.table
  Object.keys(groupData).forEach(group => {
    addItem({client, table, group, itemData: groupData[group]})
    // getItem({client, table, group})
  })
}

main()
