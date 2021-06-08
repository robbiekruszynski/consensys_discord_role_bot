module.exports = {
    name: 'academy',
    description: "this is a command to link to the ConsenSys Academy",
    execute(message, args){
        //make sure you grab the role ID with a \@roleName
        if(message.member.roles.cache.has('851897733773787167')){
        message.channel.send('https://consensys.net/academy/')
        } else {
            // message.channel.send("you do not have the Academy Member role");
            
            //if we wanted to give the role after they have a fail code below
            message.channel.send("Let me make sure you get the Academy Member role");
            message.member.roles.add('851897733773787167').catch(console.error);
        }

    }
}

//build it out as needed from the team