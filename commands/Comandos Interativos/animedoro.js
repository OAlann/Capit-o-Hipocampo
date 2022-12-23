const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`${message.author} está na pausa longa e vai usar os próximos 20 minutos para assistir um episódio de anime. **Tempo contando**! Não esquece de voltar aqui, viu, ${message.author}? Disciplina é a chave do sucesso!`)
      .setThumbnail('https://c.tenor.com/k6AGc_0HEaEAAAAi/boy-dog.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'animedoro',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*animedoro',
    }
  },
}
