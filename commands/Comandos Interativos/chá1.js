const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} preparou um chá gelado para refrescar sua memória! 🍵`)
      .setThumbnail('https://c.tenor.com/9Kap-smAR_4AAAAi/rafsdesign-rafs.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'chá1',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*chá1',
    }
  },
}
