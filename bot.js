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
  if (message.content === 'guirichess' || message.content === 'Guirichess') {
    message.channel.send('https://scontent.fcgh39-1.fna.fbcdn.net/v/t31.0-8/28164458_1884408288267490_6427963564011623185_o.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=CEIHeRySprAAX-idk2_&_nc_ht=scontent.fcgh39-1.fna&oh=0190ab9b0e4c1299712e869cf266f609&oe=5FD023BA');
  }
  if (message.content === 'guirifail') {
    client.destroy();
  }
});
