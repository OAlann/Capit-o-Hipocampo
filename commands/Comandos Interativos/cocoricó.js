const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} já está acordade para começar mais um dia produtivo! Cadê os outros *galos da madrugada*? Cocoricó! 🐔`)
      .setThumbnail('https://c.tenor.com/qOoI8JqhVr8AAAAi/movie-countdown-venom.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'cocoricó',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*cocoricó',
    }
  },
}
