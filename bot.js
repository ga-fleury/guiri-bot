const Discord = require('discord.js');
const client = new Discord.Client();

client.login('Nzc1NjAxMjU3NzEyMDU4NDE4.X6os9Q.rTCnKuRZz5Ygtonps2mg_HUYmKI');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.mentions.has(client.user.id)) {
    message.channel.send(' ```~ n ã ã o  m a n o ~  ಠ_ಠ  ``` ');
  }
});