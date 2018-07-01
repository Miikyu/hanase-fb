'use strict';
const fetch = require('node-fetch');
const kitsu = require('node-kitsu');

module.exports = (bot) => {
  bot.hear(/animu (.*)/i, (payload, chat, data) => {
   const querys = data.match[1];
   	chat.say('L-let me pull some information about this anime...');
		kitsu.searchAnime(querys, 0).then(results => {
			chat.say('Check Log');
    	console.log(results[data.id]);
	});
  });
};
