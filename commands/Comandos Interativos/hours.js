
const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está chamando vocês para entrarem em uma sala de foco no Hours! Vamos nessa?!`)
      .setThumbnail('https://c.tenor.com/TblsP308FpgAAAAi/anayaka-defjam.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'hours',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*hours',
    }
  },
}
