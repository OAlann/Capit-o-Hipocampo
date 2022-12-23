const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} deixou a sala de estudos. Hora de descansar!`)
      .setThumbnail('https://c.tenor.com/ZniUaAgcG3wAAAAi/egg-ghost.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'fui',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*fui',
    }
  },
}
