const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Não esquenta a cabeça, ${message.author}. Esquenta uma água e vai fazer café!`)
      .setThumbnail('https://c.tenor.com/xYbHwAcsiPkAAAAi/kettle-tea.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'esquenta',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*esquenta',
    }
  },
}
