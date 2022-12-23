const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Um expresso quentinho saindo no capricho pra deixar ${message.author} mais focado(a/e)! ☕️`)
      .setThumbnail('https://c.tenor.com/7udxnJ9azqAAAAAi/cafe-coffee.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'café2',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*café2',
    }
  },
}
