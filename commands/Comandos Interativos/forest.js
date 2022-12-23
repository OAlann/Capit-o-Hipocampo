const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Cadê a turma do Forest? ${message.author} está procurando alguém para plantar junto! 🌲`)
      .setThumbnail('https://c.tenor.com/8ivQwUDImPcAAAAi/thisisfinland-finland.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'forest',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*forest',
    }
  },
}
