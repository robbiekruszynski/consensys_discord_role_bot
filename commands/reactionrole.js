module.exports = {
    name: 'role',
    description: "Build out for adding roles based on emoji selection",
    async execute(message, args, Discord, client) {
        //right click and copy channel ID 
        const channel = '851913774343520266'
        const academy = message.guild.roles.cache.find(role => role.name === "Academy Member");
        const metaMask = message.guild.roles.cache.find(role => role.name === "MetaMask Member");
        const bootcamp = message.guild.roles.cache.find(role => role.name === "Blockchain Developer Bootcamp 2021");

        const bootcampEmoji = '💡';
        const academyEmoji = '🧑🏽‍🎓';
        const metaMaskEmoji = '🦊';
       
        //const infuraEmoji = '';
        //const 
        //add custom emoji based on products 

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle("Choose what you'd like to have eyes on")
            .setDescription('Choosing a product team emoji will give you the abilitiy to view their channels along with interact with other memebers who have the same role!\n\n'
            + `${bootcampEmoji} for the Blockchain Developer Bootcamp 2021\n`
            + `${academyEmoji} for the ConsenSys Academy channels\n`
            + `${metaMaskEmoji} for MetaMask channels`);
                

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(bootcampEmoji);
        messageEmbed.react(academyEmoji);
        messageEmbed.react(metaMaskEmoji);
        


    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === bootcampEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(bootcamp);
            }
            if (reaction.emoji.name === metaMaskEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(metaMask);
            }
           
            if (reaction.emoji.name === academyEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(academy);
            }
        } else {
            return;
        }

    });

    client.on('messageReactionRemove', async (reaction, user) => {

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;


        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === bootcampEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(bootcamp);
            }
            if (reaction.emoji.name === metaMaskEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(metaMask);
            }
          
            if (reaction.emoji.name === academyEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(academy);
            }
        } else {
            return;
        }
    });
    } 
}
