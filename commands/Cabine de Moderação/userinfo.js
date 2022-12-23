/**
 * O Comando "userinfo" mostrará informações do membro
*/

const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')

module.exports = {
  run: function(client, message, args) {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }
    const inline = true

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const roles = member.roles.cache
      .sort((a, b) => b.position - a.position)
      .map(role => role.toString())
      .slice(0, -1)
    const target = message.mentions.users.first() || message.author
    const bot = member.user.bot ? '`⚙️` Sim' : ' `🚂` Não'
    const activity = member.user.presence.activities.find(a => a.type === 'PLAYING') || null

    const embed = new Discord.MessageEmbed()
      .setThumbnail(target.displayAvatarURL)
      .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
      .setColor(process.env.COLOR)
      .setAuthor('🔍 | Informações do usuário/bot')
      .addField('**Tag**', member.user.tag, inline)
      .addField('**ID**', member.user.id)
      .addField('**Apelido**', member.nickname || 'Nenhum')
      .addField('**Bot**', bot, inline, true)
      .addField('**Jogando**', activity !== null ? activity : 'Sem atividade no momento', inline)
      .addField('**Entrada no discord**', moment(member.user.createdAt).format('DD/MM/YYYY, à\\s HH:mm:ss'))
      .addField('**Entrada no servidor**', moment(member.joinedAt).format('DD/MM/YYYY, à\\s HH:mm:ss'))
      .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png')
      .setTimestamp()

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
      name: 'userinfo',
      category: 'Cabine de Moderação',
      description: 'Mostra informações sobre o usuário.',
      usage: '*userinfo',
    }
  },
}
