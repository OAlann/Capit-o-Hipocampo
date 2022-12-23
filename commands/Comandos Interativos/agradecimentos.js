const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Os passageiros desse trem são gratos por nos guiarem nessa jornada! **Continuem firme:** <@&${'842097729139638272'}>, <@&${'781316741145952307'}>, <@&${'900841913857486919'}> e <@&${'900840326959333396'}>! ❤️`)
      .setThumbnail('https://c.tenor.com/kE2G0EC_4f0AAAAi/stitch-happy-new-year.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'obrigada',
      category: 'Comandos interativos',
      description: 'Mostrará uma mensagem agradecendo a Cabine de moderação.',
      usage: '*obrigada',
    }
  },
}
