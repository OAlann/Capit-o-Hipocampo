const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`É importante fazer pausas entre longas sessões de foco. ${message.author} vai descansar um pouco, quem acompanha?`)
      .setThumbnail('https://c.tenor.com/5_k5ORFB6EYAAAAi/mental-health-wellbeing.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'descanso',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*descanso',
    }
  },
}
