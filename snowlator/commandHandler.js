'use strict';

const functions = require('./functions');
const Extra = require('telegraf/extra');

function startHandler (ctx) {
    if (ctx.message.chat.type === 'private'){
        ctx.reply('Welcome to WorkerBee translation bot. On default, when you send a text message to this bot directly, it will try to auto-detect it\'s language and translate to English if it\'s not already in English.\n\n' +
            'But you also can use /translateto command to translate from any language you would like to the desired language you want.');
    }
    else if (ctx.message.chat.type === 'supergroup'){
        ctx.deleteMessage().then();
    }
}



function translateTo(ctx) {
    if (ctx.message.chat.type === 'private'){
        return ctx.reply('Please reply to this message, with the ISO_639-1 language code of ' +
            'the text you want to translate and then the text you want to translate like given in this example: \n\n<strong>nl ich bin bot </strong>  \n\n' +
            'This will translate the german text to Dutch because \"nl\" is the ISO-639-1 code of English. To learn other languages of ISO-639-1 you can use this link; <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO-639-1 List</a>' +
            ' or you can use /isocodes command' +
            '\n\n <i>Important Note: If you don\'t send your message as a reply to this message it will automatically translate the message to English. So you need to reply to this message if you want this to work! </i>', Extra.HTML())
    }
    else if (ctx.message.chat.type === 'supergroup'){
        ctx.deleteMessage().then();
    }
}

function isoCodes (ctx) {
    if (ctx.message.chat.type === 'private'){
        let IcoCodesArray = [];
        for (let x in functions.languages) {
            IcoCodesArray.push(x + " - " + functions.languages[x])
        }
        console.log(IcoCodesArray);
        ctx.reply(IcoCodesArray.slice(1).join(' \n'));
    }
    else if (ctx.message.chat.type === 'supergroup'){
        ctx.deleteMessage().then();
    }
}

module.exports = {
    startHandler : startHandler,
    translateTo : translateTo,
    isoCodes : isoCodes
};