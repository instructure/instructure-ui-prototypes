// This is a simple PostCSS config. PostCSS can be run in conjunction with themeable to help with useful tasks
// like automatically adding vendor prefixes to your css rules so you don't have to do it by hand. We provide a
// PostCSS config in instructure ui (https://instructure.design/#ui-postcss-config) but it may be overkill for
// what you need in your project. If you did want to go with our presets you would add the npm dependency 
// `@instructure/ui-postcss-config` to your project and then replace the code below with
// `module.exports = require('@instructure/ui-postcss-config')()` instead.
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
