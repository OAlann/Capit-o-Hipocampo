const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} não mora na Inglaterra mas ama um cházinho com bolachas! *É hora do chá*! 🍵`)
      .setThumbnail('https://c.tenor.com/9Kap-smAR_4AAAAi/rafsdesign-rafs.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'chá3',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*chá3',
    }
  },
}
