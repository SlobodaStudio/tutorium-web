/* eslint-disable import/no-extraneous-dependencies */

const normalizeCasing = require('redux-cli/lib/util/text-helper').normalizeCasing
const separator = require('path').sep

function entityPathInfo(entityName) {
  const path = entityName.split(separator)
  const baseName = path.pop()

  return {
    path: path.join(separator),
    baseName,
  }
}

module.exports = {
  entityNameLocals(blueprintOptions) {
    const epInfo = entityPathInfo(blueprintOptions.entity.name)

    const entityNames = ['pascal', 'camel', 'snake', 'dashes'].reduce(
      (locals, variant) => {
        locals[`${variant}EntityName`] = normalizeCasing(epInfo.baseName, variant)
        return locals
      },
      {}
    )

    return Object.assign(entityNames, { entityPath: epInfo.path })
  },
}
