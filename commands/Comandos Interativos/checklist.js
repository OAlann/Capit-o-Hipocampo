const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} concluiu todas as pendências para hoje. Parabéns por se manter produtive!`)
      .setThumbnail('https://c.tenor.com/J2RiuyvQgdEAAAAi/to-do-list-checklist.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'checklist',
      category: 'Comandos interativos',
      description: 'Concluiu sua lista de tarefas diária? Parabéns por se manter produtive.',
      usage: '*checklist',
    }
  },
}
