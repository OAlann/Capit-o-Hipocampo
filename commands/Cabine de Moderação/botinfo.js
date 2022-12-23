const Discord = require('discord.js')
const moment = require('moment')
const os = require("os")

moment.locale('pt-br')

module.exports = {
  run: function(client, message, args) {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }
    const inline = true
    const date = client.user.createdAt
    const userName = client.user.username
    let start = Date.now();
    let end = Date.now();
    const status = {
      online: '`🟢` Online',
      Ausente: '`🟡` idle',
      offline: '`⚫` Offline',
    }

    const days = Math.floor(client.uptime / 86400000)
			const hours = Math.floor(client.uptime / 3600000) % 24
			const minutes = Math.floor(client.uptime / 60000) % 60
			const seconds = Math.floor(client.uptime / 1000) % 60

    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}?size=1024`)
      .setAuthor('⚙️ | Minhas informações')
      .addField('**Nome**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Fui criado em**', moment(date).format('DD/MM/YYYY, à\\s HH:mm:ss', true))
      .addField('Ping atual', `${Math.round(client.ws.ping)} ms`, true)
      .addField("Latência da API", Math.round(client.ws.ping) + "ms", true)
      .addField("Latências de mensagens", end - start + "ms")
      .addFields(
        {
          name: "Tempo de atividade",
          value: `\`${days}\` dias, \`${hours}\` horas, \`${minutes}\` minutos, e \`${seconds}\` segundos`,
        }
      )

    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        status[client.user.presence.status],
        inline,
        true,
      )
    }

    message.channel.send(embed)
  },

  conf: {},

  get help() {
    return {
      name: 'botinfo',
      category: 'Cabine de Moderação',
      description: 'Mostra informações do bot.',
      usage: '*botinfo',
    }
  },
}
