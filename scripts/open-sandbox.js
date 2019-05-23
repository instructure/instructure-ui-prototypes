#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const open = require('open')

const { error, info } = require('@instructure/command-utils')

const sandboxHost = require('@codesandbox/common/lib/utils/host').default
const { sandboxUrl } = require('@codesandbox/common/lib/utils/url-generator')

const prototypePath = process.argv[2]

if (!prototypePath) {
  error(`You need to specify a path to a prototype in order to open in codesandbox. Ex. \`yarn open:sandbox ./path/to/prototype\``)
  process.exit(1)
}

if (!fs.existsSync(prototypePath)) {
  error(`Prototype at \`${prototypePath}\` does not exist`)
  process.exit(1)
}

const host = sandboxHost()

const url = sandboxUrl({
  git: {
    username: 'instructure',
    repo: 'instructure-ui-prototypes',
    branch: 'master',
    path: path.normalize(prototypePath)
  }
})

const fullUrl = `${host}${url}`

info(`Opening sandbox at the following url:\n${fullUrl}`)

open(fullUrl, { app: ['google chrome'] })
