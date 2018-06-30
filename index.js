'use strict';

require('dotenv').config()
const BootBot = require('bootbot');
const chalk = require('chalk');
const fs = require('fs');

console.log(chalk.bgGreen(`\nHanase v${process.env.VERSION} - BootBot Framework\n`));

const bot = new BootBot ({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.setGetStartedButton((payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say('Hello ' + user.first_name + '-san.., nice to meet you..').then(() => {
            chat.say('You can use "help" to get m-my commands list.., or use Hanase Menu', { typing: true });
        });
    });
});

// Load Commands
var commandPath = require('path').join(__dirname, 'commands');
fs.readdirSync(commandPath).forEach(function(file) {
    const commands = require('./commands/' + file);
    bot.module(commands);
})
// Modules & Helpers
var modulesPath = require('path').join(__dirname, 'modules');
fs.readdirSync(modulesPath).forEach(function(file) {
    const modules = require('./modules/' + file);
    bot.module(modules);
})

bot.start();