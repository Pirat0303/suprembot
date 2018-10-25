// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://github.com/Pirat0303/suprembot', {type: 'WATCHING'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://github.com/Pirat0303/suprembot');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
});

client.login(process.env.Mzk1NTMzMjk0MjQ0MjAwNDQ4.DrMNNw.7R0D7Rb_yiZABM1Uu4mDBKJfYvM);
