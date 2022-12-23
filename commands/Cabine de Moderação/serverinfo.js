/**
 * O Comando "serverinfo" mostrará informações do servidor
*/

const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function(client, message, args) {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }
    const members = message.guild.members.cache
    const channels = message.guild.channels.cache
    const date = message.guild.createdAt
    const joined = message.member.joinedAt
    const region = {
      brazil: ':flag_br: Brasil',
    }

    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor('🔍 | Informações do servidor')
      .setThumbnail(`${message.guild.iconURL({ dynamic: true })}?size=1024`)
      .addField('**Nome**', message.guild.name, true)
      .addField('**ID (server)**', message.guild.id, true)
      .addField('**Dono (a)**', message.guild.owner.user.username, true)
      .addField('**Membro (s)**', message.guild.memberCount, true)
      .addField('**Bot (s)**', members.filter(member => member.user.bot).size, true)
      .addField('**Impulsos**', message.guild.premiumSubscriptionCount || '0', true)
      .addField('**Canais de texto**', channels.filter(channel => channel.type === 'text').size, true)
      .addField('**Canais de voz**', channels.filter(channel => channel.type === 'voice').size, true)
      .addField('**Criado em**', moment(date).format('DD/MM/YYYY, à\\s HH:mm:ss'), true)
      .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png')

    // Aqui sera enviado o embed no canal que o usuário executo o comando
    message.channel.send(embed)
  },
  /**
    * Aqui podemos colocar mais algumas configurações do comando.
  */
  conf: {},

  /**
    * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
  */
  get help() {
    return {
      name: 'serverinfo',
      category: 'Cabine de Moderação',
      description: 'Informação sobre o servidor',
      usage: '*serverinfo',
    }
  },
}
