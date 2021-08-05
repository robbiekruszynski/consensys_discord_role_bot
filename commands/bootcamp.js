module.exports = {
    name: 'bootcamp',
    description: "this is a command to link to the ConsenSys Academy Bootcamp",
    execute(message, args){
        //make sure you grab the role ID with a \@roleName
        if(message.member.roles.cache.has('872918471879573565')){
        message.channel.send('https://consensys.net/academy/')
        } else {
            // message.channel.send("you do not have the Academy Member role");
            
            //if we wanted to give the role after they have a fail code below
            message.channel.send("Let me make sure you get the Bootcamp Member role");
            message.member.roles.add('872918471879573565').catch(console.error);
        }

    }
}
