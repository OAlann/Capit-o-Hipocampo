const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está preparando um capuccino bem gostoso, quer um pouco? ☕️`)
      .setThumbnail('https://c.tenor.com/7udxnJ9azqAAAAAi/cafe-coffee.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'capuccino',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*capuccino',
    }
  },
}
