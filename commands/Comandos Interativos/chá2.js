const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Você prefere chá de ervas ou de frutas, ${message.author}`)
      .setThumbnail('https://c.tenor.com/9Kap-smAR_4AAAAi/rafsdesign-rafs.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'chá2',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*chá2',
    }
  },
}
