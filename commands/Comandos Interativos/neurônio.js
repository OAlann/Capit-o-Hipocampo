const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} queimou todos os neurônios usando o modo foco total. Vamos dar uma pausa?`)
      .setThumbnail('https://c.tenor.com/W1OOuzrNrAgAAAAi/explos%C3%A3o.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'neurônio',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*neurônio',
    }
  },
}
