const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} concluiu todas as pendências para hoje. Parabéns por se manter produtive!`)
      .setThumbnail('https://c.tenor.com/BVRTPXvxKGQAAAAi/moon-gatti.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'boanoite',
      category: 'Comandos interativos',
      description: 'Comando para indicar que já finalizou as tarefas do dia, irraaa! Hora do descanso! 😴.',
      usage: '*boanoite',
    }
  },
}
