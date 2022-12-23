const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Hoje ${message.author} não está estudando de boa vontade, mas vai conseguir! Xô, preguiça!`)
      .setThumbnail('https://c.tenor.com/Mmk_4l8ug70AAAAi/sloth-animal.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'preguiça',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*preguiça',
    }
  },
}
