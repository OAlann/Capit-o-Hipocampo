/**
 * O Comando "avatar" mostrará a imagem de perfil do usuário.
*/

const Discord = require('discord.js')

module.exports = {

  /** Primeiro o metodo run(client, message, args) será executado pelo arquivo message.js
    * Que passará os argumentos atraves do middleware.
  */

  run: function(client, message, args) {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }
    const member = message.mentions.users.first() || message.author

    const embed = new Discord.MessageEmbed()
      .setDescription(`**📸 | Foto de perfil\nPassageiro: ${member}**`)
      .setImage(member.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setColor(process.env.COLOR)
      .setTimestamp()

    message.channel.send(embed)
  },

  conf: {},

  /**
    * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
  */

  get help() {
    return {
      name: 'avatar',
      category: 'Cabine de Moderação',
      description: 'Mostra o avatar do usuário para controle de fotos proibidas pelo discord e de conteúdo adulto.',
      usage: '*avatar',
    }
  },
}
