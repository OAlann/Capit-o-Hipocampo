const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} acordou tarde, mas acordou. Vamos nessa para mais uma tarde produtiva! Cadê os outros *besouros do vespertino*? 🐞`)
      .setThumbnail('https://c.tenor.com/pPOVCdk6jYUAAAAi/ladybug-flap-wings.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'besouro',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*besouro',
    }
  },
}
