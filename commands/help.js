
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
            anime [name] - Anime Lookup\n
            manga [name] - Manga Lookup\n
            animerandom - I'll give you Random Anime recommendation!\n
            mangarandom - Random recommendation tho!, but it's manga\n
        `, {typing: true});
    });
};