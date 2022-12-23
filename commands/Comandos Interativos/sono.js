const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está babando em cima do caderno! Acorda!`)
      .setThumbnail('https://c.tenor.com/huxlTYXN6TYAAAAi/work-late.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'sono',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*sono',
    }
  },
}
