const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Só a cafeína pra deixar ${message.author} acordade hoje. Xô, soninho! ☕️`)
      .setThumbnail('https://c.tenor.com/7udxnJ9azqAAAAAi/cafe-coffee.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'café',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*café',
    }
  },
}
