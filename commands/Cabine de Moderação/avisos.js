/**
 * O Comando "warn" alertará determinado usuário.
*/

const Discord = require('discord.js')
const fs = require('fs')
const warns = JSON.parse(fs.readFileSync('./warnings.json', 'utf-8'))

module.exports = {
  run: async (client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando!**').then(m => m.delete({ timeout: 4000 })) }

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const reason = args.slice(1).join(' ')

    if (!member) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, o uso correto do comando é: \`\`*aviso @usuario [motivo]\`\`.`))
    }

    if (!reason) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`${message.author}, coloque o motivo. 📃`))
    }

    if (member.hasPermission('ADMINISTRATOR')) {
      return message.channel.send(`${message.author}, você não tem poder contra esse usuário!`)
    }

    if (!warns[member.id]) {
      warns[member.id] = {
        warns: 0,
      }
    }

    warns[member.id].warns++

    fs.writeFileSync('./warnings.json', JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    })

    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('❗️ | Aviso', message.author.displayAvatarURL())
      .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
      .setDescription(`Membro: ${member}`)
      .addField('Aviso por:', `${message.author}`)
      .addField('Motivo:', `${reason}`)
      .addField('Quantidade de warns', warns[member.id].warns)
      .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png')
      .setTimestamp()

    message.channel.send(embed)
  },
  conf: {},

  get help() {
    return {
      name: 'aviso',
      category: 'Cabine de Moderação',
      description: 'Mutará alertará usuário.',
      usage: '*aviso @usuário motivo',
      admin: true,
    }
  },
}
