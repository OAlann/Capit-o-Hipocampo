const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Ei, ${message.author}! Arruma essa postura! Sua coluna vai te agradecer no futuro :)`)
      .setThumbnail('https://c.tenor.com/90k2v_N-aUUAAAAi/cute-simple.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'postura',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*postura',
    }
  },
}
