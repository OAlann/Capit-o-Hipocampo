const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`> Olá, você embarcou nessa jornada! Todos os passageiros desse trem desejam boas-vindas. Sinta-se acolhido!! Para a liberação dos canais  é sugerido que visite as regras da comunidade! Esperamos que tenha uma boa viagem **rumo à estação produtividade!** 🚂 💨`)
      .setThumbnail('https://distok.top/stickers/749043879713701898/749049128012742676.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'boasvindas',
      category: 'Comandos interativos',
      description: 'Acolher os novos passageiros da comunidade.',
      usage: '*boasvindas',
    }
  },
}
