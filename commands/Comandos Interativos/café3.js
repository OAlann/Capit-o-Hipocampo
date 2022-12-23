const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} vai refrescar seu dia com aquela receitinha de café gelado que achou no TikTok! 🍵`)
      .setThumbnail('https://c.tenor.com/7udxnJ9azqAAAAAi/cafe-coffee.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'café3',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*café3',
    }
  },
}
