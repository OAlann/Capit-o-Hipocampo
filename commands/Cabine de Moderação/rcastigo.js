/**
 * O Comando "unmute" desmutará determinado usuário.
 */

const Discord = require('discord.js')

module.exports = {
  run: function(client, message, args) {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) {
      return message.channel
        .send('> **Você não tem permissão para usar esse comando!**')
        .then((m) => m.delete({ timeout: 4000 }))
    }

    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0])

    if (!member) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, o uso correto do comando é: \`\`*rcastigo @Usuário\`\`.`),
      )
    }

    if (member.roles.cache.has(process.env.CARGO_CASTIGO)) {
      member.roles.remove(process.env.CARGO_CASTIGO)
      return message.reply(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, **${member}** foi desmutado(a)!`),
      )
    } else {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, **${member}** não está mutado(a). 🤔`),
      )
    }
  },

  conf: {},

  get help() {
    return {
      name: 'rcastigo',
      category: 'Cabine de Moderação',
      description: 'O Comando "rcastigo" desmutará determinado usuário.',
      usage: '*rcastigo @usuário',
      admin: true,
    }
  },
}
