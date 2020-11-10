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
    message.channel.send('~ n ã ã o  m a n o ~  ಠ_ಠ');
  }
  if (message.content === 'guiribanho' || message.content === 'Guiribanho') {
    message.channel.send('https://cdn.discordapp.com/attachments/704138130130862081/751300367421276231/image0.jpg');
  }
  if (message.content === 'guiritaro19' || message.content === 'Guiritaro19') {
    message.channel.send('Yea, just a lil dude tryin to make this world funnier with some crazy shit :p Btw i think that i prefer be called as "LMY" :3');
  }
  if (message.mentions.has(client.user.id) && message.content.includes('banho')) {
    message.channel.send('https://cdn.discordapp.com/attachments/704138130130862081/751300367421276231/image0.jpg');
  }
  
  if (message.content === 'guirikid' || message.content === 'Guirikid') {
    message.channel.send('https://cdn.discordapp.com/attachments/745550754109980713/775632995498590259/unknown.png');
  }
  if (message.content === 'guirifail') {
    client.destroy();
  }
});
