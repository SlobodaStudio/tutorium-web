const entityNameLocals = require('../util').entityNameLocals
const separator = require('path').sep

module.exports = {
  locals(options) {
    return entityNameLocals(options)
  },
  fileMapTokens() {
    return {
      __dumb__: options => `${options.settings.getSetting('dumbPath')}${separator}${options.locals.entityPath}`,
      __name__: options => options.locals.pascalEntityName,
    }
  },
  beforeInstall() {},
  afterInstall() {},
}
