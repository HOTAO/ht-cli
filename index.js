#! /usr/bin/env node
const commander = require('commander')
const download = require('download-git-repo')
const cmd = require('node-cmd')
const ora = require('ora')
const spinner = ora('Loading unicorns').start()
spinner.color = 'yellow'
spinner.text = 'loading'
commander
  .command('init <extensionId>')
  .description('init extension project')
  .action(extensionId => {
    const path = process.cwd()
    download('HOTAO/vueTemplate', `${path}/${extensionId}`, function(err) {
      // console.log(err ? err : 'Success')
      spinner.stop()
    })
    // console.log(`init Extension Project "${extensionId}"`)
    // todo something you need
  })

commander
  .version('1.0.0')
  .option('-a, --aaa', 'aaaaa')
  .option('-b, --bbb', 'bbbbb')
  .option('-c, --ccc [name]', 'ccccc')
  .parse(process.argv)

if (commander.aaa) {
  console.log('aaa')
}

if (commander.bbb) {
  console.log('bbb')
}

if (commander.ccc) {
  console.log('ccc', commander.ccc)
}
