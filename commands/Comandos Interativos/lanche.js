const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} vai fazer uma pausa pro lanchinho. Consigo ouvir seu estômago roncando daqui!'`)
      .setThumbnail('https://c.tenor.com/OtltxmQRCh4AAAAi/burger-burger-time.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'lanche',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*lanche',
    }
  },
}
