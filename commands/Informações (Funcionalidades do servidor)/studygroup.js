const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(process.env.COLOR)
    .setTitle('FORMULÁRIO PARA SOLICITAR UMA SALA DE ESTUDOS PRIVADA!')
    .setDescription('**» Representante do grupo:** \n**» Demais membros do grupo:** \n**» Horários de estudos:** \n**» Assinale a opção de grupo:** \n ( ) Dupla \n ( ) Trio \n ( ) Quarteto \n ( ) Quinteto')
    .setFooter('Copie e preencha esse formulário para solicitar uma sala de estudos privada com seus parceiros de estudo! Qualquer dúvida no preenchimento, consulte <#829086127125299280>! 📚',)
    message.channel.send(embed)
},
 
conf: {},

get help() {
  return {
    name: 'studygroup',
    category: 'Comandos interativos',
    description: 'Mostrará um comando interativo.',
    usage: '*studygroup',
  }
},
}
