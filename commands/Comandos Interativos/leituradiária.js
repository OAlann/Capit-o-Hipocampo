const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Olá leitores! ${message.author} embarcará em uma jornada diária de leitura. Vamos juntos?`)
      .setThumbnail('https://c.tenor.com/3034faPtCXUAAAAi/raf-rafs.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'leituradiária',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*leituradiária',
    }
  },
}
