const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está chamando todes para estudar com a câmera ligada. Essa é uma ótima maneira de se manter motivade!!`)
      .setThumbnail('https://c.tenor.com/xIffixhbMZAAAAAi/taking-pictures-photography.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'studywithme',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*studywithme',
    }
  },
}
