const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} tomou um copo de água! 💦`)
      .setThumbnail('https://c.tenor.com/GJCKVgNlXmIAAAAj/tkthao219-bubududu.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'glub',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*glub',
    }
  },
}
