const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.once('ready', () => {
    console.log('this bot is online');
})

const prefix = '!';

client.once('ready', () => {
    console.log('bot is online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping"){
        message.channel.send ('pong!');
    } else if (command == "academy"){
        message.channel.send('https://consensys.net/academy/');
    } else if (command == "buidl"){
        message.channel.send('https://www.meetup.com/pro/BUIDL');
    };
    //build this out for all products if needed? 
    //check with team 
});













//this has to be last line 
client.login(process.env.TOKEN);

