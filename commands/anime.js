
'use strict';
const hakit = require('../api/hakit');

module.exports = (bot) => {
  bot.hear(/anifo (.*)/i, (payload, chat, data) => {
    query = data.match[1];
    chat.say(`Okay!, l-let me searching for ${query}`);
    hakit.animeFindTitleEN(query, 0)
      .then(result => {
        chat.say('Check Log!');
        console.log(result[0]);
      });
  });
};
