const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Falha no sistema nervoso central! O encéfalo de ${message.author} derreteu de tanto estudar!`)
      .setThumbnail('https://c.tenor.com/6VXzzYzUsAMAAAAi/cocopry-stich.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'snc',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*snc',
    }
  },
}
