const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} vai entrar ao vivo na sala de estudos. Vamos acompanhar? Gravando! 🎬`)
      .setThumbnail('https://c.tenor.com/3I5SoxI-DiYAAAAi/live.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'live',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*live',
    }
  },
}
