const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} é um(a) pilar e está disposto à conversar com você! 🥰`)
      .setThumbnail('https://c.tenor.com/ux7RPst0v1MAAAAi/quby-pentol.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'hashira',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*hashira',
    }
  },
}