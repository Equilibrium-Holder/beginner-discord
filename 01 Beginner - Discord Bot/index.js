/**
 * @author Equilibrium
 * Code for: <youtubeID>
 */

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Hello I am Bot.');
});

client.on('message', (message) => {

    if (message.content === 'ping') {
        message.channel.send('pong');
    }

});

client.login('NjQzMjI5NDY0MzM5MTUyOTE5.XcieCg.ern8mP9LbjPI-CCB8fxtG66lEcE');