## Main.js file

main.js is going to contain conditions you can build out
Example:

```
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == "bootcamp"){
        client.commands.get('bootcamp').execute(message,args);
    } else if (command == "buidl"){
        client.commands.get('buidl').execute(message,args);
    } else if (command === 'role') {
        client.commands.get('role').execute(message, args, Discord, client);
    }

});
```

You could create a command that then fires off the command you've created.

Example:
!buidl will link to the meetup within the discord

![Screenshot](/imgs/buidl.png)

This command is coming from commands/bootcamp.js

```
module.exports = {
    name: 'buidl',
    description: "this is a command to link to the buidl network",
    execute(message, args){
        message.channel.send('https://www.meetup.com/pro/BUIDL');

    }
}

```

## emojiRole.js file

To create a command that can be

emojiRole.js
