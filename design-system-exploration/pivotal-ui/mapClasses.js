const HTMLParser = require('node-html-parser')
const fse = require('fs-extra')
const { CLASS_MAP_PATH } = require('./constants')

module.exports = async (content, loaderContext) => {
  let result
  let map = {}

  try {
    map = await fse.readJson(CLASS_MAP_PATH)
    // Parse the html content
    const root = HTMLParser.parse(content)

    // Replace classes if any are defined in the postcss modules map
    replaceClass(root, map)

    // Cast the result back to string
    result = root.toString()
  } catch (error) {
    await loaderContext.emitError(`${error}\n\nEnsure postcss modules generates the class map prior to processing html.`)
    return content
  }

  return result
}

const replaceClass = (node, map) => {
  if (node && node.getAttribute && node.getAttribute('class')) {
    const classNames = node.getAttribute('class')
    node.setAttribute(
      'class',
      classNames.split(/(\s+)/).filter(e => e.trim().length > 0).map(name => map[name] || name).join(' ')
    )
  }

  if (node.childNodes && node.childNodes.length > 0) {
    node.childNodes.forEach((child) => {
      replaceClass(child, map)
    })
  }
}