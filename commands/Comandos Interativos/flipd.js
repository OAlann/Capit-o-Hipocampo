const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está indo estudar no **Flipd**! Entrem nesse grupo de foco!`)
      .setThumbnail('https://c.tenor.com/-J3rO8bFMLsAAAAi/timer-sablier.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'flipd',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*flipd',
    }
  },
}
