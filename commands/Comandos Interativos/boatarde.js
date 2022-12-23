const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Boa tarde, ${message.author}! Vamos para mais uma sessão de foco?`)
      .setThumbnail('https://c.tenor.com/pPOVCdk6jYUAAAAi/ladybug-flap-wings.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'boatarde',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*boatarde',
    }
  },
}
