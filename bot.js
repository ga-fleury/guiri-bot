const Discord = require('discord.js');
const client = new Discord.Client();

// const botToken = require('./botoken');
// let bot = botToken.bot;

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.mentions.has(client.user.id)) {
    message.channel.send(' ```~ n ã ã o  m a n o ~  ಠ_ಠ  😩  ``` ');
  }
});