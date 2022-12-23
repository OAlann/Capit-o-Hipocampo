const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Barista da cafeteria PomoTrem: Um delicioso mocha de brigadeiro saindo no capricho para ${message.author}!`)
      .setThumbnail('https://c.tenor.com/XidQUt52d6EAAAAi/good-union-jobs-protest.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'mocha',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*mocha',
    }
  },
}
