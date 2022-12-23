const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`A sessão no Forest de ${message.author} vai começar em 1 minuto! O trem está partindo rumo à estação *foco total*!`)
      .setThumbnail('https://c.tenor.com/qNPJIECgfrsAAAAi/locomotive-joypixels.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'piuí',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*piuí',
    }
  },
}
