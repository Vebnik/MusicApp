// Import
const path = require('path')


// Logic
const nodePath = (paths) => path.resolve(path.join(...paths))


module.exports = { nodePath }