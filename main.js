const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
require('dotenv').config();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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
       client.commands.get('academy').execute(message,args);
    } else if (command == "buidl"){
        client.commands.get('buidl').execute(message,args);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }

});


client.login(process.env.TOKEN);
