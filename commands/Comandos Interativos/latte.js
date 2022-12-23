const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Barista da cafeteria PomoTrem: Um latte machiatto de caramelo saindo no capricho para ${message.author}!`)
      .setThumbnail('https://c.tenor.com/b6PLDyupHEUAAAAi/espresso-cappuccino.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'latte',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*latte',
    }
  },
}
