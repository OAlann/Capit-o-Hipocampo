const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} deu uma pausa para se alongar! Que tal fazer o mesmo?`)
      .setThumbnail('https://i.ibb.co/HCbjM4R/colearn-colearnclassroom.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'alonga',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*alonga',
    }
  },
}
