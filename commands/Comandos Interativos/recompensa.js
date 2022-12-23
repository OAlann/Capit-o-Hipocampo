const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Parabéns ${message.author}, por completar sua **sessão de atividades**!! Após um período de tempo não devemos deixar de nos recompensar pelos feitos diários e o esforço e produtividade liberados neste processo. Logo, este é o momento de descansar ou fazer algo que goste!!!`)
      .setThumbnail('https://c.tenor.com/vXcm99Xa9kIAAAAi/bear-blue.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'recompensa',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*recompensa',
    }
  },
}
