const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Um chimarrão bem quente saindo no capricho para ${message.author}!`)
      .setThumbnail('https://c.tenor.com/-7aiUck6YlIAAAAi/pava-mate.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'chimarrão',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*chimarrão',
    }
  },
}
