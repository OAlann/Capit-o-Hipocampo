/**
  * O evento guildMemberAdd é emitido após um membro entrar.
*/

module.exports = async (client, member) => {
  const Discord = require('discord.js')

  const welcome = new Discord.MessageEmbed()
    .setColor(process.env.COLOR)
    .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
    .setTitle('Mais um passageiro rumo à estação da produtividade | 🚂 💨 💨')
    .setDescription(`> Olá ${member}, seja muito bem-vinde ao servidor da comunidade de estudos PomoTrem! Todos os passageiros deste trem desejam que se sinta acolhido e agradecemos por embarcar nesta jornada conosco!`)
    .addField('Acesso ao servidor', `> Todas as informações que você precisa estão disponíveis na categoria **🚂 COMECE POR AQUI**!. É novo no discord? Leia primeiro o **canal** <#870439178905722931>.\n> Em seguida, para ganhar acesso ao servidor, você deve completar **seu processo de verificação** em <#857051487023923210>, por favor, não deixe de conferi-las. Depois disso, vá até <#856918700980305940> e personalize seu perfil de acordo com seus interesses.`)
    .addField('Problemas na verificação?', `> Se estiver com problemas para completar seu processo de verificação, vá até o canal <#832069917968564244> e **clique no botão laranja**! Entraremos em contato assim que possível!`)
    .setFooter('Equipe PomoTrem  ♡  Seja bem-vinde!')
    .setThumbnail('https://c.tenor.com/4P02Cdfd26MAAAAj/baby-yoda-so-cute.gif')

  const join = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor(process.env.COLOR)
    .setAuthor('🔔 | Um novo membro entrou no servidor!')
    .addField('> Nome', `${member}`)
    .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
    .addField('> **ID**', client.user.id)
    .addField('> **Entrou no Discord em**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.user.createdAt), true)
    .setFooter('Cabine de Moderação | PomoTrem', 'https://i.ibb.co/M8488yJ/escudo-2.png')
    .setTimestamp()

  member.guild.channels.cache.get(process.env.BOASVINDAS).send(welcome)
  member.guild.channels.cache.get(process.env.ENTRADA).send(join)
}

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate(template, date) {
  const specs = 'DD:MM:YYYY:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function(t, item, i) {
    return t.split(specs[i]).join(item)
  }, template)
}
