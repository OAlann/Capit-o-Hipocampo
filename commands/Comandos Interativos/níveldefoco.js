const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} não vê a hora de passar de #nível-de-foco! 😬`)
      .setThumbnail('https://c.tenor.com/kE2G0EC_4f0AAAAi/stitch-happy-new-year.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'níveldefoco',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*níveldefoco',
    }
  },
}
