'use strict';
const Telegraf = require('telegraf');
const bot = new Telegraf("688772310:AAH1LGWur4-m-RUDEk9F1Z1qBZ666aLuAJM");
const commandHandler = require('./commandHandler');
const textHandler = require('./textHandler');

bot.use(Telegraf.log());

bot.command('/start@WorkerBee_Bot', ctx => commandHandler.startHandler(ctx));
bot.command('start', ctx => commandHandler.startHandler(ctx));
bot.command('translateto',ctx => commandHandler.translateTo(ctx));
bot.command('/translateto@WorkerBee_Bot', ctx => commandHandler.translateTo(ctx));
bot.command('isocodes',ctx => commandHandler.isoCodes(ctx));
bot.command('/isocodes@WorkerBee_Bot', ctx => commandHandler.isoCodes(ctx));
bot.on('text', ctx => textHandler.textHandler(ctx));


bot.startPolling();