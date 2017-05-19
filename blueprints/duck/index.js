const entityNameLocals = require('../util').entityNameLocals
const separator = require('path').sep

module.exports = {
  locals(options) {
    return entityNameLocals(options)
  },
  description() {
    return 'Generates a reducer/actions/constant Duck Module for redux'
  },
  fileMapTokens() {
    return {
      __duck__: options => `redux/modules${separator}${options.locals.entityPath}`,
      __name__: options => {console.log(options); return options.locals.camelEntityName},
    }
  }
}
