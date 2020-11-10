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
    if (message.content === 'banho') {
      message.channel.send('https://cdn.discordapp.com/attachments/704138130130862081/751300367421276231/image0.jpg');
    }
    message.channel.send('~ n ã ã o  m a n o ~  ಠ_ಠ');
  }
});