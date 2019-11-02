const copydir = require('copy-dir')
const rimraf = require('rimraf')

const source = 'src'
const dest = 'dist'

console.log(`Cleaning ${dest}...`)
rimraf.sync(dest)
console.log(`Clean complete.`)

console.log('')

console.log(`Copying to ${dest}...`)
copydir.sync(source, dest)
console.log(`Copy complete.`)
