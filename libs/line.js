const line = require('@line/bot-sdk')
const { getenv } = require('./helper')

const config = {
  channelAccessToken: getenv('LINEOA_ACCESS_TOKEN'),
  channelSecret: getenv('LINEOA_SECRET'),
}

exports.line = new line.Client(config)
exports.middleware = line.middleware(config)
