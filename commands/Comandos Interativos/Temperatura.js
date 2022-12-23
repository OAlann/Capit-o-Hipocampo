const Discord = require('discord.js')
const weather = require('weather-js')

module.exports = {

  run: function(client, message, args) {
    if (!args[0]) {
      return message.channel.send(new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription('Especifique uma localidade.'))
    }

    weather.find({ search: args.join(' '), degreeType: 'C' }, function(error, result) {
      if (error) {
        return message.channel.send(new Discord.MessageEmbed()
          .setColor(process.env.COLOR)
          .setDescription('Não foi possível encontrar esse lugar! '))
      }

      if (result === undefined || result.length === 0) {
        return message.channel.send(new Discord.MessageEmbed()
          .setColor(process.env.COLOR)
          .setDescription('Local inválido!'))
      }

      const current = result[0].current
      const location = result[0].location

      const tempoinfo = new Discord.MessageEmbed()
        .setAuthor(`Previsão do tempo para ${current.observationpoint} ☁️`)
        .addField('⌚ Fuso horário', `> UTC${location.timezone}`, true)
        .addField('📍 Tipo de grau', '> Celsius', true)
        .addField('🌡️ Temperatura', `> ${current.temperature}°`, true)
        .addField('🌪 Vento', `> ${current.winddisplay}`, true)
        .addField('☁️ Sensação', `> ${current.feelslike}°`, true)
        .addField('💧 Humidade', `> ${current.humidity}%`, true)
        .setThumbnail('https://media1.tenor.com/images/9ed2f07c9484de11eea6fafafe7d6c0a/tenor.gif?itemid=27260899')
        .setColor(process.env.COLOR)
        .setFooter('PomoTrem')

      message.channel.send(tempoinfo)
    })
  },

  conf: {},

  get help() {
    return {
      name: 'temp',
      category: 'Comandos Interativos',
      description: 'Mostra a temperatura de determinada região.',
      usage: '*temp',
    }
  },
}