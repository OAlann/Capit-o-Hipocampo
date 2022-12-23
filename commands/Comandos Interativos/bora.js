const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está indo para a sala de estudos. Bora estudar?!`)
      .setThumbnail('https://c.tenor.com/YjeiHEh4E60AAAAi/rafsdesign-rafs.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'bora',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*bora',
    }
  },
}
