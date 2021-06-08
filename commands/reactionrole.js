module.exports = {
    name: 'reactionrole',
    description: "Build out for adding roles based on emoji selection",
    async execute(message, args, Discord, client) {
        //right click and copy channel ID 
        const channel = '851913774343520266'
        const academy = message.guild.roles.cache.find(role => role.name === "Academy Member");
        const metaMask = message.guild.roles.cache.find(role => role.name === "MetaMask Member");

        const academyEmoji = '🧑🏽‍🎓';
        const metaMaskEmoji = '🦊';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle("Choose what you'd like to have eyes on")
            .setDescription('Choosing a product team emoji will give you the abilitiy to view their channels along with interact with other memebers who have the same role!\n\n'
                + `${academyEmoji} for the ConsenSys Academy channels\n`
                + `${metaMaskEmoji} for MetaMask channels`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(academyEmoji);
        messageEmbed.react(metaMaskEmoji);
    }
       
}