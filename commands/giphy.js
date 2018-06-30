'use strict';
const fetch = require('node-fetch');

module.exports = (bot) => {
  bot.hear(/gif (.*)/i, (payload, chat, data) => {
  const query = data.match[1];
  chat.say('P-please.. let me pick some perfect Gif for you..');
  fetch(GIPHY_URL + query)
    .then(res => res.json())
    .then(json => {
      chat.say({
        attachment: 'image',
        url: json.data.image_url
      }, {
        typing: true
      });
    });
  });
};
