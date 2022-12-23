const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Hey ${message.author}, a funcionalidade <#808761894701236254> promove a comunidade nas principais plataformas de divulgação na internet.\nClique no emoji ”💖” em <#856918700980305940> ou digite *addbump em <#808761894701236254> para ser notificado quando uma nova divulgação estiver disponível.'`)
      .setThumbnail('https://c.tenor.com/EU5PsyIFwRUAAAAi/wumpus-discord.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'bump',
      category: 'Comandos interativos',
      description: 'Mostrará informações da funcionalidade `/bump`.',
      usage: '*bump',
    }
  },
}
