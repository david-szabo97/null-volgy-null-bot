const { pluginPingPong } = require('./ping-pong')
const { pluginWelcomeMessage } = require('./welcome-message')
const { pluginRandomMessage } = require('./random-messages')
const { PLUGIN_NAME } = require('./symbols')

const plugins = [
  pluginPingPong,
  pluginWelcomeMessage,
  pluginRandomMessage
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
