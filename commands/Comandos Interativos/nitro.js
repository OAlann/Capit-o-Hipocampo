const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} ligou o nitro no **modo foco total**. É hora de estudar! 👊`)
      .setThumbnail('https://c.tenor.com/akBy6qWGjs4AAAAi/peach-cat-mochi-peach-cat.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'nitro',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*nitro',
    }
  },
}
