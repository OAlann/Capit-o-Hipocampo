const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} prometeu estudar bastante hoje. Caso cumpra com a promessa, a aprovação tá garantida!`)
      .setThumbnail('https://c.tenor.com/QYuC0gKmyg0AAAAi/pink-promise-i-swear.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'euprometo',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*euprometo',
    }
  },
}
