'use strict';
const translate = require('google-translate-api');
const Extra = require('telegraf/extra');
const functions = require('./functions');

function textHandler (ctx) {
    let reply_to_message = ctx.message['reply_to_message'];
    let incomingMessage = ctx.message['text'];
    if (reply_to_message !== undefined) {
        console.log('Reply is not undefined');
        let entities = reply_to_message['entities'];
        if (entities !== undefined ) {
            console.log('Entities is not undefined');
            if (entities[1] !== undefined && entities[1].url !== undefined) {
                if (entities[1].url === "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes") {
                    let extractLangCode = incomingMessage.split(' ');
                    if (functions.langCodeValidator(extractLangCode[0]) === true) {
                        let slicedIncomingMessage = extractLangCode.slice(1);
                        translate(slicedIncomingMessage.join(' '), {to: extractLangCode[0].toString()}).then(res => {
                            let translatedText = "<stron" +"g>" + res.text +  "</strong" + ">" ;
                            let correctedText = "<stron" +"g>" + res.from.text.value +  "</strong" + ">";
                            let functionS = functions.languageCodeTranslator(extractLangCode[0]);
                            let Language = "<"+ "cod" +"e" + ">" + functionS + "<" + "/code" +">";
                            if (res.from.text.didYouMean === true) {
                                console.log('It Hits Here v6');
                                ctx.reply('<code>This message is translated to </code>'
                                    + Language + '\n\n ' + translatedText
                                    +  '\n\n<code>The parts that auto corrected gets shown with these signs [example] :</code> \n\n'
                                    + correctedText,Extra.HTML());
                            }
                            else {
                                console.log('It Hits Here v7');
                                ctx.reply('<code>This message is translated to </code>'
                                    + Language + '\n\n'
                                    + translatedText,Extra.HTML());
                            }
                        }).catch(err => {
                            console.error(err);
                        });
                    }
                    else {
                        if (incomingMessage.length > 10) {
                            translate(incomingMessage, {to: 'en'}).then(res => {
                                let translatedText = "<stron" + "g>" + res.text + "</strong" + ">";
                                let correctedText = "<stron" + "g>" + res.from.text.value + "</strong" + ">";
                                let LanguageCode = res.from.language.iso;
                                let functionS = functions.languageCodeTranslator(LanguageCode);
                                let Language = "<" + "cod" + "e" + ">" + functionS + "<" + "/code" + ">";
                                if (LanguageCode !== 'en') {
                                    if (res.from.text.didYouMean === true) {
                                        ctx.reply('<code>This message is translated from </code>'
                                            + Language + '\n\n ' + translatedText
                                            + '\n\n<code>The parts that auto corrected gets shown with these signs [example] :</code> \n\n'
                                            + correctedText, Extra.HTML());
                                    } else {
                                        ctx.reply('<code>This message is translated from </code>'
                                            + Language + '\n\n'
                                            + translatedText, Extra.HTML());
                                    }
                                }
                            }).catch(err => {
                                console.error(err);
                            });
                        }
                    }
                }
                else {
                    if (incomingMessage.length > 10) {
                        translate(incomingMessage, {to: 'en'}).then(res => {
                            let translatedText = "<stron" + "g>" + res.text + "</strong" + ">";
                            let correctedText = "<stron" + "g>" + res.from.text.value + "</strong" + ">";
                            let LanguageCode = res.from.language.iso;
                            let functionS = functions.languageCodeTranslator(LanguageCode);
                            let Language = "<" + "cod" + "e" + ">" + functionS + "<" + "/code" + ">";
                            if (LanguageCode !== 'en') {
                                if (res.from.text.didYouMean === true) {
                                    ctx.reply('<code>This message is translated from </code>'
                                        + Language + '\n\n ' + translatedText
                                        + '\n\n<code>The parts that auto corrected gets shown with these signs [example] :</code> \n\n'
                                        + correctedText, Extra.HTML());
                                } else {
                                    ctx.reply('<code>This message is translated from </code>'
                                        + Language + '\n\n'
                                        + translatedText, Extra.HTML());
                                }
                            }
                        }).catch(err => {
                            console.error(err);
                        });
                    }
                }

            }
            else {
                if (incomingMessage.length > 10) {
                    translate(incomingMessage, {to: 'en'}).then(res => {
                        let translatedText = "<stron" +"g>" + res.text +  "</strong" + ">" ;
                        let correctedText = "<stron" +"g>" + res.from.text.value +  "</strong" + ">";
                        let LanguageCode = res.from.language.iso;
                        let functionS = functions.languageCodeTranslator(LanguageCode);
                        let Language = "<"+ "cod" +"e" + ">" + functionS + "<" + "/code" +">";
                        if (LanguageCode !== 'en') {
                            if (res.from.text.didYouMean === true) {
                                ctx.reply('<code>This message is translated from </code>'
                                    + Language + '\n\n ' + translatedText
                                    +  '\n\n<code>The parts that auto corrected gets shown with these signs [example] :</code> \n\n'
                                    + correctedText,Extra.HTML());
                            }
                            else {
                                ctx.reply('<code>This message is translated from </code>'
                                    + Language + '\n\n'
                                    + translatedText,Extra.HTML());
                            }
                        }
                    }).catch(err => {
                        console.error(err);
                    });
                }
            }
        }
        else {
            if (incomingMessage.length > 10) {
                translate(incomingMessage, {to: 'en'}).then(res => {
                    let translatedText = "<stron" +"g>" + res.text +  "</strong" + ">" ;
                    let correctedText = "<stron" +"g>" + res.from.text.value +  "</strong" + ">";
                    let LanguageCode = res.from.language.iso;
                    let functionS = functions.languageCodeTranslator(LanguageCode);
                    let Language = "<"+ "cod" +"e" + ">" + functionS + "<" + "/code" +">";
                    if (LanguageCode !== 'en') {
                        if (res.from.text.didYouMean === true) {
                            ctx.reply('<code>This message is translated from </code>'
                                + Language + '\n\n ' + translatedText
                                +  '\n\n<code>The parts that auto corrected gets shown with these signs [example] :</code> \n\n'
                                + correctedText,Extra.HTML());
                        }
                        else {
                            ctx.reply('<code>This message is translated from </code>'
                                + Language + '\n\n'
                                + translatedText,Extra.HTML());
                        }
                    }
                }).catch(err => {
                    console.error(err);
                });
            }
        }
    }
    else {
        if (incomingMessage.length > 10) {
            translate(incomingMessage, {to: 'en'}).then(res => {
                let translatedText = "<stron" +"g>" + res.text +  "</strong" + ">" ;
                let correctedText = "<stron" +"g>" + res.from.text.value +  "</strong" + ">";
                let LanguageCode = res.from.language.iso;
                let functionS = functions.languageCodeTranslator(LanguageCode);
                let Language = "<"+ "cod" +"e" + ">" + functionS + "<" + "/code" +">";
                if (LanguageCode !== 'en') {
                    if (res.from.text.didYouMean === true) {
                        ctx.reply('<code>This message is translated from </code>'
                            + Language + '\n\n ' + translatedText
                            +  '\n\n<code>The parts that auto corrected gets shown with these signs [example] :</code> \n\n'
                            + correctedText,Extra.HTML());
                    }
                    else {
                        ctx.reply('<code>This message is translated from </code>'
                            + Language + '\n\n'
                            + translatedText,Extra.HTML());
                    }
                }
            }).catch(err => {
                console.error(err);
            });
        }
    }
}


module.exports = {
    textHandler : textHandler,
};