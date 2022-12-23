const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`A técnica da respiração foco total utiliza a respiração para adquirir o máximo possível de oxigênio na corrente sanguínea assim aumentando a concentração e o foco do usuário. Lembre-se de respirar sempre, assim como ${message.author}!`)
      .setThumbnail('https://c.tenor.com/KbV40JBqKp4AAAAi/tea-sleepy.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'respiração',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*respiração',
    }
  },
}
