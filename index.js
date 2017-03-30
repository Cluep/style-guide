var path = require('path'),
    pkg = require('./package.json')

exports = module.exports = function(opts) {
  var implicit = (opts && opts.implicit == false) ? false : true

  return function(style){
    style.include(__dirname) // include style-guide

    if (implicit) {
      style.import('style-guide')
    }
  }
}

exports.libname = pkg.name
exports.path = __dirname
exports.version = pkg.version
