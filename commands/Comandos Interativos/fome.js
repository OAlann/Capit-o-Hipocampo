const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está quase devorando as folhas do caderno! Quando a comida vai ficar pronta? 🤤`)
      .setThumbnail('https://c.tenor.com/lQ0ByOBsGWkAAAAi/hungry-unhappy.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'fome',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*fome',
    }
  },
}
