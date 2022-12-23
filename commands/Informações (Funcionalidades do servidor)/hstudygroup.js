const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setAuthor('Hipocampo diz:')
      .setTitle('**Gostaria de estudar em uma sala privada com seus parceiros de estudos?**')
      .setDescription(`Use o comando **studygroup** em <#889233628603777124> para receber a ficha de formação de grupos. Copie, cole e preencha esse formulário caso você queira solicitar uma sala de estudos privada para seu grupo! Qualquer dúvida no preenchimento, consulte <#829086127125299280>! 📚`)
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'hstudygroup',
      category: 'Comandos interativos',
      description: 'Mostrará um comando interativo.',
      usage: '*hstudygroup',
    }
  },
}
