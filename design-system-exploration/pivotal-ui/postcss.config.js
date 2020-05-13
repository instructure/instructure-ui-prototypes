const fse = require('fs-extra')
const path = require('path')

const { CLASS_MAP_PATH } = require('./constants')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-modules')({
      getJSON: function (cssFileName, json) {
        try {
          let classMap = {}

          if (fse.existsSync(CLASS_MAP_PATH)) {
            classMap = fse.readJSONSync(CLASS_MAP_PATH)
          }

          fse.outputFileSync(CLASS_MAP_PATH, JSON.stringify({
            ...classMap,
            ...json
          }))
        } catch (err) {
          console.error(err)
        }
      }
    })
  ]
}