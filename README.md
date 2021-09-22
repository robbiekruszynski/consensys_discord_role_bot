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

if you want a command to be limited to a channel in terms of it's execution you would add that discord channels information

right click on the channel and copy the channel ID

![Screenshot](/imgs/id.png)

Below we can see the channel, and the variable for bootcamp2021 that grants a role based on the eomji selection. This can be build out

```
  const channel = '879788594984779786'


        const bootcamp2021 = message.guild.roles.cache.find(role => role.name === "Blockchain Developer Bootcamp 2021");

        const bootcampEmoji = '💡';


        ....


         if (reaction.emoji.name === bootcampEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(bootcamp2021);

```
