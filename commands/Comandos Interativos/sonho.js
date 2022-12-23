const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Todo o seu esforço valerá a pena um dia, ${message.author}! Continue firme!`)
      .setThumbnail('https://c.tenor.com/6VXzzYzUsAMAAAAi/cocopry-stich.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'sonho',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*sonho',
    }
  },
}
