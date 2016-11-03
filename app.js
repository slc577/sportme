'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAWquF1fimYBACtCNBNd0PQr0NWk3i304hca9TZBzQ6T5A6sTKkKuBytZBHwZAxQFN87dZB5y5UyZB1sd7gv0puhlZBfW0ZAFSdi3qwJOVhzZCp7ck1Co0FvzXEbM9xNuKPZB6ACn5ByjajCNWm8ygYEa77v9PIWm7wZCds6kCzqomowZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)