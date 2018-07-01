'use strict';
const kitsu = require('node-kitsu');

module.exports = (bot) => {
  bot.hear(/animu (.*)/i, (payload, chat, data) => {
    const queryChat = data.match[1];
    chat.say('Okay!, Please w-wait..');
    kitsu.searchAnime('New Game!', 0).then(results => {
      chat.say(results[0], {typing: true});
    });
  });
};
