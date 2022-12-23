const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Depois de longas sessões de foco é importante tirar uns bons minutos para fazer o que gosta, como assistir um capítulo de desenho ou da novela das seis. Alterne blocos de 2 ou 3 sessões maiores com pausas longas para descanso. Para sessões curtas, alterne blocos de 4 ou 5 sessões com uma pausa longa. Você vai se sentir muito menos cansado(a/e)!`)
      .setThumbnail('https://images-ext-1.discordapp.net/external/uLPnzV6wSolM0lvTVqiXQJkB1Fe_hS0ixHeFL2hNrLA/https/c.tenor.com/gmbUMoEyifoAAAAi/zzz-sleep.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'pausalonga',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*pausalonga',
    }
  },
}
