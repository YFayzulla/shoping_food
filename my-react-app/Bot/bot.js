const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const TOKEN = "7274371840:AAH3yRKv9o6Cv6mU53JTlysOU9X8iD73Tx0";
const bot = new Telegraf(TOKEN);
// const web_link = 'https://resilient-eclair-e4d7d7.netlify.app/';

bot.start((ctx) => {
    ctx.reply('Welcome :)', Markup.keyboard([
        [Markup.button.webApp('open the menu', web_link)]
    ]).oneTime().resize());
});

bot.launch();
