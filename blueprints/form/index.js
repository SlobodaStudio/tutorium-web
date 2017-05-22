const entityNameLocals = require('../util').entityNameLocals
const separator = require('path').sep

module.exports = {
  locals(options) {
    return entityNameLocals(options)
  },
  description() {
    return 'Generates a connected form component using redux-form'
  },
  fileMapTokens() {
    return {
      __form__: options => `forms${separator}${options.locals.entityPath}`,
      __name__: options => options.locals.pascalEntityName,
    }
  },
}
