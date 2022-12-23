const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} gosta de aproveitar o silêncio da madrugada para ficar focade. Um bom trabalho para todas as corujas da noite! 🦉`)
      .setThumbnail('https://c.tenor.com/ZRrzJWl1fQEAAAAi/owl-joypixels.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'coruja',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*coruja',
    }
  },
}
