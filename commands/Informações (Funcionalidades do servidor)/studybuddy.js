const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(process.env.COLOR)
    .setAuthor('Hipocampo')
    .setTitle('FORMULÁRIO PARA ACHAR O PARCEIRO DE ESTUDOS PERFEITO!')
    .setDescription('Copie e preencha esse questionário caso esteja procurando por um **study buddy** com os mesmos interesses que você! Acesse <#829086127125299280> para mais informações! 📚')
    .addFields(
        { name: "Sobre mim", value: "» nome: \n» idade: \n» pronome: \n» o que eu quero conquistar: \n» provas que irei fazer: \n» idiomas que estudo: \n» horário e tempo de estudo:", inline: false },
        { name: "👊 sobre meu Study Buddy 👊", value: "» gostaria que ele tivesse a mesma meta que eu? \n» gostaria que ele preenchesse os seguintes requisitos: \n» conversaríamos por mensagem, áudio ou vídeo? \n» se alguém tiver os mesmos interesses que eu, essa pessoa pode me chamar para conversarmos?", inline: false },
        { name: "Gostaria de formar um grupo de estudos?", value: "» se sim, assinale uma opção: \n ( ) dupla \n( ) trio \n( ) quádrupla \n( ) grupo misto", inline: false }
      )
    message.channel.send(embed)
},
 
conf: {},

get help() {
  return {
    name: 'studybuddy',
    category: 'Comandos interativos',
    description: 'Mostrará um comando interativo.',
    usage: '*studybuddy',
  }
},
}
