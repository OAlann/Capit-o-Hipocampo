const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Bom dia, ${message.author}! Bom dia, *operárias do amanhecer*! Vamos para mais um dia de foco matutino? Bzzz 🐝`)
      .setThumbnail('https://c.tenor.com/OwccA6ifrloAAAAi/toan-the-beest.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'bzzz',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*bzzz',
    }
  },
}
