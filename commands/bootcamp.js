module.exports = {
    name: 'bootcamp',
    description: "this is a command to link to the ConsenSys Academy Bootcamp",
    execute(message, args){
        //make sure you grab the role ID with a \@roleName
        if(message.member.roles.cache.has('880087020440018994')){
        message.channel.send('https://consensys.net/academy/')
        } else {
            // message.channel.send("you do not have the Academy Member role");
            
            //if we wanted to give the role after they have a fail code below
            message.channel.send("Let me make sure you get the Blockchain Developer Bootcamp 2021 role");
            message.member.roles.add('880087020440018994').catch(console.error);
        }

    }
}
