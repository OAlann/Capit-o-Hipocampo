const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} tem muito trabalho a fazer hoje. Força, ${message.author}! Você consegue!`)
      .setThumbnail('https://c.tenor.com/a4eVqMeDRBoAAAAi/go-virtuals-go-virtuals-philippines.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'trabalho',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*trabalho',
    }
  },
}
