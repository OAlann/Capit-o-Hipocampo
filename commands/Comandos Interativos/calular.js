const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está sentindo muita saudade do seu celular, mas vai continuar firme mantendo o foco!`)
      .setThumbnail('https://c.tenor.com/mX-fTbBl_WwAAAAi/annoyed-handphone.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'celular',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*celular',
    }
  },
}
