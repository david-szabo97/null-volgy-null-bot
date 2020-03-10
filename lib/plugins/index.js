const { pluginPingPong } = require('./ping-pong')
const { pluginWelcomeMessage } = require('./welcome-message')
const { pluginRandomMessages } = require('./random-messages')
const { pluginChuckNorrisJokes } = require('./chuck-norris-jokes')
const { PLUGIN_NAME } = require('./symbols')

const plugins = [
  pluginPingPong,
  pluginWelcomeMessage,
  pluginRandomMessages,
  pluginChuckNorrisJokes
]

async function startPlugins (client) {
  for (const plugin of plugins) {
    console.log(`Adding plugin: ${plugin[PLUGIN_NAME]}`)
    await plugin(client)
  }
}

module.exports = {
  plugins,
  startPlugins,
  PLUGIN_NAME
}
