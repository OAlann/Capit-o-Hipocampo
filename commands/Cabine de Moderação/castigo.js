/**
* O Comando "mute" mutará determinado usuário.
*/

const Discord = require('discord.js')

module.exports = {
  run: async (client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!member) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, o uso correto do comando é: \`\`*castigo @Usuário\`\`.`))
    }

    const mutedRole = message.guild.roles.cache.get(process.env.CARGO_CASTIGO)

    if (member.hasPermission('ADMINISTRATOR')) {
      return message.channel.send(`${message.author}, você não tem poder contra esse usuário!`)
    }
    
    if (!mutedRole) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, esse cargo não foi encontrado no servidor! Verifique também seu arquivo de configuração.`))
    }
    if (member.roles.cache.has(process.env.CARGO_CASTIGO)) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, **${member}** está no modo suspenso (castigo)! 🔐`))
    }
    await member.roles.add(mutedRole)
    return message.channel.send(new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setDescription(`${message.author}, **${member}** foi removido (a) do modo suspenso (castigo)! 🔓`))
  },
  conf: {},

  get help() {
    return {
      name: 'castigo',
      category: 'Cabine de Moderação',
      description: 'Mutará determinado usuário.',
      usage: '*castigo @usuário',
      admin: true,
    }
  },
}
