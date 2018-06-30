'use strict';
const eightball = require('8ball')()

module.exports = (bot) => {
  bot.hear(/hey~ (.*)/i, (payload, chat) => {
    chat.say(eightball, {typing: true});
  });
};
