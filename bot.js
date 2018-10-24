const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzk1NTMzMjk0MjQ0MjAwNDQ4.DrHviw.aoB9k5nrlDT82pbysxf_aqVnmFc);//where BOT_TOKEN is the token of our bot 
