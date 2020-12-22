const Discord = require('discord.js');
const client = new Discord.Client();


// const botToken = require('./botoken');
// let bot = botToken.bot;

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Digite Guirihelp");
});

var guiritasks = ["\nGuiritaro19", "\nGuirichess", "\nGuiribanho", "\nGuirikid", "\nGuirisexy", "\nGuirigirl", "\nGuiriaçai", "\nGuiripai"];

client.on('message', message => {

  if (message.mentions.has(client.user.id)) {
    if (message.content.includes('santa') || message.content.includes('trabalho') || message.content.includes('trabalhando')) {
      message.channel.send('to ~~jogando Valorant~~ trabalhando duro maano ಠ_ಠ');
      client.user.setActivity("Valorant");
      setTimeout(function () {
        client.user.setActivity("Digite Guirihelp");
      }, 10000);
    }
    else if(message.content.includes('kika')) {
      let mentionMember = message.mentions.members.array();
      mentionMember = mentionMember[1];
      if(mentionMember === "126088455678590976") {
        mentionMember = "343569487921938463";
      }
      else if (!mentionMember) {
        message.channel.send('você não mencionou ninguém pra eu kickar maaano ಠ_ಠ');
        return;
      }
      mentionMember.roles.add("788133989630083124");
      mentionMember.voice.setChannel("788133650351915028");
      message.channel.send('pronto maano ಠ_ಠ');
    }

    else if(message.content.includes('me desculpa') || message.content.includes('me desculpe') || message.content.includes('desculpa') || message.content.includes('desculpe')) {
      message.member.roles.remove("788133989630083124");
      message.member.voice.setChannel("704138130130862082");
    }
    else if(message.content.includes('liberta')) {
      let mentionMember = message.mentions.members.array();
      mentionMember = mentionMember[1];
      if(!mentionMember) {
        message.channel.send('você não mencionou ninguém pra eu libertar maano ಠ_ಠ');
        return;
      }
      mentionMember.roles.remove("788133989630083124");
      mentionMember.voice.setChannel("704138130130862082");
      message.channel.send('pronto maano ಠ_ಠ');
    }
    else {
      message.channel.send('~ n ã ã o  m a n o ~  ಠ_ಠ');
    }
  }

  if (message.content === 'guiribanho' || message.content === 'Guiribanho') {
    message.channel.send('https://cdn.discordapp.com/attachments/704138130130862081/751300367421276231/image0.jpg');
  }

  if (message.content === 'guiripai' || message.content === 'Guiripai') {
    message.channel.send('https://cdn.discordapp.com/attachments/704138130130862081/786675304668200980/image0.jpg');
  }

  if (message.content === 'guiritaro19' || message.content === 'Guiritaro19') {
    message.channel.send('Yea, just a lil dude tryin to make this world funnier with some crazy shit :p \nBtw i think that i prefer be called as "LMY" :3');
  }

  if (message.content === 'guirihelp' || message.content === 'Guirihelp') {
    message.channel.send('Esse é o Guiribot, o bot do Guiri.\nVocê pode brincar comigo usando as palavras:' + guiritasks + '.\nE pra saber o meu endereço é só falar o meu @nome e a palavra casa na mesma frase.');
  }

  if (message.mentions.has(client.user.id) && message.content.includes('banho')) {
    message.channel.send('https://cdn.discordapp.com/attachments/704138130130862081/751300367421276231/image0.jpg');
  }

  if (message.content === 'guirigirl' || message.content === 'Guirigirl') {
    message.channel.send('https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/58381153_112238396647221_4004605400593727488_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=2hIrNu7F8kQAX9FVg8N&_nc_ht=scontent.fsjk2-1.fna&oh=233e6597ed290f872c4796635e8ef5c3&oe=5FD6C43D');
  }

  if (message.content === 'guiriaçai' || message.content === 'Guiriaçai') {
    message.channel.send('https://media.discordapp.net/attachments/704138130130862081/777380736579010560/922152_526940814036057_1364107136_o.png?width=1666&height=1250');
  }

  if (message.content === 'guirisexy' || message.content === 'Guirisexy') {
    message.channel.send('https://media.discordapp.net/attachments/520649897020489728/769807807578898462/unknown.png');
  }

  if (message.content === 'guirikid' || message.content === 'Guirikid') {
    message.channel.send('https://cdn.discordapp.com/attachments/745550754109980713/775632995498590259/unknown.png');
  }

  if (message.mentions.has(client.user.id) && message.content.includes('casa')) {
    message.channel.send('mas cola ai, rua nibe perobelli, 114');
  }

  if (message.content === 'guirichess' || message.content === 'Guirichess') {
    message.channel.send('~ x e q u e - m a t e ~ maano\nhttps://cdn.discordapp.com/attachments/704138130130862081/790007155456475186/unknown.png');
  }

  if (message.content === 'guirifail') {
    client.destroy();
  }
});
