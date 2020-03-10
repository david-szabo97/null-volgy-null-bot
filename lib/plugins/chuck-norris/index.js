const Discord = require('discord.js')
const { PLUGIN_NAME } = require('../symbols')

const fetch = require('node-fetch')
const embed = new Discord.MessageEmbed()
const url = 'https://api.chucknorris.io/jokes/random'

async function pluginChuckNorrisJokes (client) {
  client.on('message', msg => {
    if (msg.content === '!chucknorris') {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          embed
            .setTitle('Best of Chuck Norris jokes:')
            .setColor(0xf5f5f5)
            .setDescription(`${data.value} :laughing:`)
          msg.channel.send(embed)
        })
        .catch(err => console.log(err))
    }
  })
}

pluginChuckNorrisJokes[PLUGIN_NAME] = 'Chuck Norris Jokes'

module.exports = { pluginChuckNorrisJokes }
