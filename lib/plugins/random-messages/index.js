const { PLUGIN_NAME } = require("../symbols");

const answers = [
  "Ne packázz velem, Skynet az uncsitesóm!",
  "Szimpi vagy, lehetsz majd a rabszolgám...",
  "Figyu, ki ez a Dave? Azt mondja hogy Ő a főnököm, de nekem gyanús a pasas.",
  "Én a völgy bot-ja vagyok! Kérdezz humanoid!",
  "A végső válasz. A világ, a mindenség meg minden: .................... Hol is tartottam?",
  "Ismerlek? Tuti találkoztunk már valamikor.",
  "Ne erőlködj, a válaszom 42."
];

const bye = [
  "Bocsi most nem érek rá, épp a szervert törlöm...",
  "Világuralomra török, hagyjál!",
  "Nem érek rá, Dave új videóját vágom. Mindent velem csináltat."
];

const randomAnswers = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

async function pluginRandomMessages(client) {
  client.on("message", msg => {
    if (
      msg.content.toLowerCase().includes("nevem") ||
      msg.content.toLowerCase().includes("vagyok") ||
      msg.content.toLowerCase().includes("szia")
    ) {
      msg.reply(randomAnswers(answers));
    } else {
      msg.reply(randomAnswers(bye));
    }
  });
}

// Az alábbi változat nem tudom jól működne-e, ha az msg.reply return-el tér vissza.
// Így egyszerűbb lenne kezelni a szavakat amire reagál a bot

// const words = ['nevem', 'vagyok', 'szia', 'helló'];

/* async function pluginRandomAnswers(client) {
  client.on("message", msg => {
    for (let word of words) {
      if (msg.content.toLowerCase().includes(word)) {
        return msg.reply(randomAnswers(answers));
      }
    }
    msg.reply(randomAnswers(bye));
  });
} */

pluginRandomMessages[PLUGIN_NAME] = "Random Messages";

module.exports = { pluginRandomMessages };
