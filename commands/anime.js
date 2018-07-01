'use strict';
const fetch = require('node-fetch');

module.exports = (bot) => {
  bot.hear(/animu (.*)/i, (payload, chat, data) => {
   const query = data.match[1];
   	chat.say('L-let me pull some information about this anime...');
		fetch('https://kitsu.io/api/edge/anime?filter[text]=' + query)
		  .then(res => res.json())
		  .then(json => {
		    chat.say(`Name: ${json.data.attributes}`);
      });
  });
};
