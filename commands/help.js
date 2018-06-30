
'use strict';
module.exports = (bot) => {
    bot.hear('help', (payload, chat) => {
        const text = payload.message.text;
        const buttons = [
            {
                type: 'postback',
                title: 'Anime & Manga',
                payload: 'HELP_ANIMAN'
            },
            {
                type: 'postback',
                title: 'Fun & General',
                payload: 'HELP_FUNGEN'
            },
            {
                type: 'postback',
                title: 'Conversation',
                payload: 'HELP_CONVO'
            }
        ];

        chat.sendButtonTemplate(`Take a Look..`, buttons);
    });

    bot.on('postback:HELP_ANIMAN', (payload, chat) => {
        chat.say(`
            \n
            anime [name] - Anime Lookup
            manga [name] - Manga Lookup
        `, {typing: true});
    });
    
    bot.on('postback:HELP_FUNGEN', (payload, chat) => {
        chat.say(`
            \n
            gif [keywords] - Random Gifs using your Keywords
            hey~ [words] - Hanase will give you Opinions and Answer.
        `, {typing: true});
    });
    
    bot.on('postback:HELP_CONVO', (payload, chat) => {
        chat.say(`
            \n
            - For now, unavailable -
        `, {typing: true});
    });
};
