
'use strict';
module.exports = (bot) => {
    bot.setPersistentMenu([
        {
            title: 'Hanase Menu',
            type: 'nested',
            call_to_actions: [
                {
                    title: 'Commands List',
                    type: 'postback',
                    payload: 'COMMAND_LIST',
                },
                {
                    title: 'About Me',
                    type: 'postback',
                    payload: 'ABOUT_ME',
                },
                {
                    title: 'Contact Info',
                    type: 'postback',
                    payload: 'CONTACT_INFO',
                }
            ]
        },
        {
            title: 'Homepage',
            type: 'web_url',
            url: 'https://hanase.ori.moe'
        }
    ], process.env.DISABLE_INPUT);

    bot.on('postback:COMMAND_LIST', (payload, chat) => {
        chat.say(`This is Commands List`);
    });
    
    bot.on('postback:ABOUT_ME', (payload, chat) => {
        chat.say(`i am Hanase.. created with <3 by my master..`)
    });

    bot.on('postback:CONTACT_INFO', (payload, chat) => {
        chat.say(`Here's my Contact List ...`);
    });
};