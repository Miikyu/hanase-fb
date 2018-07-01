'use strict';
const chalk = require('chalk');

module.exports = (bot) => {
  bot.hear(/hey~ (.*)/i, (payload, chat) => {
    var answers = ["It is certain","It is decidedly so","Without a doubt","Yes, definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];
    var result = Math.floor((Math.random() * answers.length) + 0);
    chat.say(answers[result], {typing: true});
    console.log(chalk.yellow('[LOG] 8ball Successfully giving answer to users'));
  });
};
