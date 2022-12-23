const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Será que todo mundo aqui está focade mesmo? Estou só de olho em vocês se autosabotando. Larga esse celular, ${message.author} 👀`)
      .setThumbnail('https://c.tenor.com/XDvKdTXUiQsAAAAi/brown-and-cony-bear.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'deolho',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*deolho',
    }
  },
}
