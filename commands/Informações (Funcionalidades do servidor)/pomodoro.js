const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`Olá, poliglota. Hello, multilingual. こんにちは、ポイグロット。Bonjour, polyglotte. 你好，聚光环. Hola, políglota. {ctx.author.name} está indo estudar #idiomas na **sala poliglota** 🗣!`)
      .setThumbnail('https://c.tenor.com/7du_iiC-ztwAAAAi/russia-russian-alphabet.gif')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'pomodoro',
      category: 'Informações',
      description: 'Mostrará um breve resumo de como utilizar o pomodoro (tempo de estudo).',
      usage: '*pomodoro',
    }
  },
}
