const Discord = require('discord.js')
const fetch = require('node-fetch')
const { PLUGIN_NAME } = require('../symbols')

const API_URL = 'https://api.chucknorris.io/jokes/random'

async function pluginChuckNorrisJokes (client) {
  client.on('message', msg => {
    if (msg.content !== '!chucknorris') {
      return
    }
    const chuckNorrisJokes = async API_URL => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        const embed = new Discord.MessageEmbed()
          .setTitle('Best of Chuck Norris jokes:')
          .setColor(0xf5f5f5)
          .setDescription(`${data.value} :laughing:`)
        msg.channel.send(embed)
      } catch (err) {
        console.log(err)
      }
    }
    chuckNorrisJokes(API_URL)
  })
}

pluginChuckNorrisJokes[PLUGIN_NAME] = 'Chuck Norris Jokes'

module.exports = { pluginChuckNorrisJokes }
