const entityNameLocals = require('../util').entityNameLocals
const separator = require('path').sep

module.exports = {
  locals(options) {
    return entityNameLocals(options)
  },
  description() {
    return 'Generates a smart (aka container) component'
  },
  fileMapTokens() {
    return {
      __smart__: options => `${options.settings.getSetting('smartPath')}${separator}${options.locals.entityPath}`,
      __name__: options => options.locals.pascalEntityName,
    }
  },
}
