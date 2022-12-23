const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} já se organizou e listou as tarefas que tem para fazer hoje. Rumo à estação **produtividade**!`)
      .setThumbnail('https://c.tenor.com/pHdrrx1ZBTEAAAAi/study.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'tarefas',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*tarefas',
    }
  },
}
