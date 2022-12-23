const Discord = require('discord.js')

module.exports = {
  name: "ban",

  run: async(client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> **Você não tem permissão para usar esse comando! 🔐**').then(m => m.delete({ timeout: 4000 })) }

        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "sem motivo";


//----------------------------------------|
const embed = new Discord.MessageEmbed()
        .setTitle(`✉️ Comunicado | Você está banido!`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`**Servidor:** ${message.guild.name}
**Motivo:** ${reason}`)
        .setColor(process.env.COLOR)
        .setTimestamp()
        .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png');
//envia um comunicado para quem foi expulso



        if (!args[0]) return message.channel.send(`🔴 | ${message.author} Não foi possível banir um (a) usuário (a)! \nMencione utilizando o **"@"** ou o **ID do mesmo** para banir!`);

        if(!usu) return message.channel.send(`🔴 | ${message.author} Você não mencionou e nem utilizou um ID válido!`);

        if(!usu.bannable) return message.channel.send(`🚫 | ${message.author} Ops! Eu não tenho permissão para banir este membro!`);

        const dev = new Discord.MessageEmbed()
        .setTitle(`**📌 | Banimento!**`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`**Passageiro banido:** ${usu.user}`)
        .addField('ID:', `${usu.user.id}`)
        .addField('Motivo:', `${reason}`)
        .addField('Solicitado por:', `${message.author}`)
        .setColor(process.env.COLOR)
        .setTimestamp()
        .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png')

        await usu.send(embed).catch(console.error);
        await usu.ban({
            reason: reason
        });
        
        
        message.channel.send(dev).catch(console.error);
    },

  conf: {},

  get help() {
    return {
      name: 'ban',
      category: 'Cabine de Moderação',
      description: 'Banirá determinado usuário do servidor.',
      usage: '*ban @usuário [motivo].',
      admin: true,
    }
  },
}
