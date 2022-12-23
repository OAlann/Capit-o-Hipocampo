const Discord = require('discord.js')

module.exports = {
  name: "kick",

  run: async(client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }

        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "sem motivo";

//----------------------------------------|
const embed = new Discord.MessageEmbed()
        .setTitle(`**✉️ Comunicado | Você foi expulso (a)!**`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`**Servidor:** ${message.guild.name}
**Motivo:** ${reason}`)
        .addField('Convite', `https://discord.gg/9abVJKbXug`)
        .setColor(process.env.COLOR)
        .setTimestamp()
        .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png');
//envia um comunicado para quem foi expulso



        if (!args[0]) return message.channel.send(`🔴 | ${message.author} Não foi possível expulsar um (a) passageiro (a)! \nMencione utilizando o **"@"** ou o **ID do mesmo** para expulsar!`);

        if(!usu) return message.channel.send(`🔴 | ${message.author} Você não mencionou e nem utilizou um ID válido!`);

        if(!usu.kickable) return message.channel.send(`🚫 | ${message.author} Ops! Eu não tenho permissão para expulsar este passageiro (a)!`);

        const dev = new Discord.MessageEmbed()
        .setTitle(`**📌 | Expulsão!**`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`**Passageiro (a) que será expulso (a):** \n${usu.user}`)
        .addField('ID:', `${usu.user.id}`)
        .addField('Motivo:', `${reason}`)
        .addField('Solicitado por:', `${message.author}`)
        .setColor(process.env.COLOR)
        .setTimestamp()
        .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png')

        await usu.send(embed);
        await usu.kick({
            reason: reason
        });
        
        
        message.channel.send(dev);
    },

  conf: {},

  get help() {
    return {
      name: 'kick',
      category: 'Cabine de Moderação',
      description: 'Expulsará determinado usuário do servidor.',
      usage: '*kick @usuário [motivo].',
      admin: true,
    }
  },
}
