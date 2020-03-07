const { PLUGIN_NAME } = require('../symbols')
const { getRandomArrayItem } = require('../../utils/array')

const triggerWords = ['nevem', 'vagyok', 'szia', 'helló']

const knownMessageReplies = [
  'Ne packázz velem, Skynet az uncsitesóm!',
  'Szimpi vagy, lehetsz majd a rabszolgám...',
  'Figyu, ki ez a Dave? Azt mondja hogy Ő a főnököm, de nekem gyanús a pasas.',
  'Én a völgy bot-ja vagyok! Kérdezz humanoid!',
  'A végső válasz. A világ, a mindenség meg minden: .................... Hol is tartottam?',
  'Ismerlek? Tuti találkoztunk már valamikor.',
  'Ne erőlködj, a válaszom 42.'
]

const unknownMessageReplies = [
  'Bocsi most nem érek rá, épp a szervert törlöm...',
  'Világuralomra török, hagyjál!',
  'Nem érek rá, Dave új videóját vágom. Mindent velem csináltat.'
]

async function pluginRandomMessages (client) {
  client.on('message', msg => {
    const msgLower = msg.toLowerCase()
    const containsTriggerWord = triggerWords.find(triggerWord =>
      msgLower.includes(triggerWord)
    )

    const replies = containsTriggerWord
      ? knownMessageReplies
      : unknownMessageReplies
    const reply = getRandomArrayItem(replies)

    msg.reply(reply)
  })
}

pluginRandomMessages[PLUGIN_NAME] = 'Random Messages'

module.exports = { pluginRandomMessages }
