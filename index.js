const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'kaiexdd.play.hosting',
    port: 38938,
    username: 'toilamotconbot',
    version: false
  })

  bot.on('spawn', () => {
    console.log('Bot joined the server!')
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })

  bot.on('end', () => {
    console.log('Bot disconnected')
  })
}

createBot()
