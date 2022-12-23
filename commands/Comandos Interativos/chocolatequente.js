const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} tomou uma xícara de chocolate quente pra aquecer o coração!`)
      .setThumbnail('https://c.tenor.com/-7aiUck6YlIAAAAi/pava-mate.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'chocolatequente',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*chocolatequente',
    }
  },
}
