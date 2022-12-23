const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} embarcará em uma **sessão literária**!! Todos os leitores deste trem desejam que tenha uma ótima leitura diária. 📖`)
      .setThumbnail('https://c.tenor.com/xVrdcuoqoRAAAAAi/mochi-peach.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'leitura',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*leitura',
    }
  },
}
