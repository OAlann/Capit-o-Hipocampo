const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está indo para a **sala de cinema** 🎬 assistir algo. Qual sua sugestão para a programação de hoje? As noites de cinema vão começar!`)
      .setThumbnail('https://c.tenor.com/qOoI8JqhVr8AAAAi/movie-countdown-venom.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'cinema',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*cinema',
    }
  },
}
