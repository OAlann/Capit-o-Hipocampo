const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Bom dia, ${message.author}! Crie um futuro que te faça pular da cama todos os dias!`)
      .setThumbnail('https://c.tenor.com/YjeiHEh4E60AAAAi/rafsdesign-rafs.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'bomdia',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*bomdia',
    }
  },
}
