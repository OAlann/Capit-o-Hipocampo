const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está se sentindo desmotivade hoje 🥺 Alguém pra conversar?`)
      .setThumbnail('https://c.tenor.com/2ZjBeWx8etcAAAAi/mochi-cute.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'sad',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*sad',
    }
  },
}
