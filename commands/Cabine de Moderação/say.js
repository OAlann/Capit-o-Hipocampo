module.exports = {
  run: (client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }

    let argsresult
    const mChannel = message.mentions.channels.first()

    message.delete()
    if (mChannel) {
      argsresult = args.slice(1).join(' ')
      mChannel.send(argsresult)
    } else {
      argsresult = args.join(' ')
      message.channel.send(argsresult)
    }
  },

  conf: {},

  get help() {
    return {
      name: 'say',
      category: 'Cabine de Moderação',
      description: 'Faz o bot enviar tal mensagem (beta)',
      usage: '*say',
      admin: true,
    }
  },
}
