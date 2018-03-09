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
  .option('-e, --email', '1019872217@qq.com')
  .option('-p, --position', '前端攻城狮')
  .parse(process.argv)

if (commander.email) {
  console.log('1019872217@qq.com')
}
if (commander.position) {
  console.log('前端攻城狮--HT')
}
