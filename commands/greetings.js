
'use strict';
module.exports = (bot) => {
    bot.hear(['hello', 'hi', 'halo' , 'oy', 'hai', /hey( there)?/i], (payload, chat) => {
        chat.getUserProfile().then((user) => {
            chat.say('Hello ' + user.first_name + '-san.., nice to meet you..').then(() => {
                chat.say('You can use "help" to get m-my commands list.., or use Hanase Menu', { typing: true });
            });
        });
    });
};