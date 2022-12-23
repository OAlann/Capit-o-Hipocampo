const Discord = require('discord.js')

module.exports = {
  run: async (client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor(`🏓 Pong, hehe!`)
      .addField('Meu tempo de resposta atual', `${Math.round(client.ws.ping)} ms`)
      .addField('Mais informações?', 'Digite *boitinfo para conferir os detalhes de API do bot.')

    message.channel.send(embed)
  },

  conf: {},

  get help() {
    return {
      name: 'ping',
      description: 'Mostra a latência do bot.',
      usage: '*ping',
      category: 'Cabine de Moderação',
    }
  },
}
