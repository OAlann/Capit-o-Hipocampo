const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Olá, leitores! ${message.author} vai abrir o **clube da leitura**. O que vamos ler hoje? Silêncio na biblioteca! 🤫`)
      .setThumbnail('https://c.tenor.com/3034faPtCXUAAAAi/raf-rafs.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'leitores',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*leitores',
    }
  },
}
