const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`A barista da cafeteria PomoTrem está passando um café quentinho para ${message.author}! Vai uma xícara aí? ☕️`)
      .setThumbnail('https://c.tenor.com/7udxnJ9azqAAAAAi/cafe-coffee.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'café4',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*café4',
    }
  },
}
