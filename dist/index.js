
'use strict'

if (process.env.NODE_ENV === 'production') {
  // module.exports = require('./v2-sdk.cjs.production.min.js')
  module.exports = require('./v2-sdk.cjs.development.js')
} else {
  module.exports = require('./v2-sdk.cjs.development.js')
}
