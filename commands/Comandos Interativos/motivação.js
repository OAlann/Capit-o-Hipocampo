const Discord = require('discord.js')
const axios = require('axios').default

const description = [
  'Cada um terá a vista da montanha que subir!',
  'Só porque você levou mais tempo do que os outros não significa que você falhou!',
  'Um mestre já errou um número de vezes maior do que o iniciante jamais tentou!',
  'Estude com dedicação e nada no mundo afastará você do seu sonho!',
  'Se não te assusta, provavelmente você não está sonhando grande o suficiente!',
  'Estude e trabalhe, fazendo de conta que esta vida é um dia de capina com sol quente, que às vezes custa muito a passar, mas que sempre passa. E você ainda pode ter um muito pedaço bom de alegria (...) Cada um tem a sua hora e a sua vez: você há de ter a sua!',
  'O sucesso é ir de fracasso em fracasso, acumulando pequenos esforços repetidos dia a dia, sem perder o entusiasmo.',
  'Seja mais forte do que a sua melhor desculpa.',
  'Tenha orgulho de tudo o que você conquistou até aqui!',
  'As conquistas dependem 50% de inspiração, criatividade e sonhos, e 50% de disciplina, trabalho árduo e determinação. São duas pernas que devem caminhar juntas.',
  'Nenhum obstáculo é tão grande se a sua vontade de vencer for maior!',
  'Se você tentou e falhou, parabéns! Muitos desistem antes mesmo de tentar. Continue firme!',
  'Não desista dos seus sonhos, só você é capaz de realizá-los.',
  'Quem sobe as escadas, deve começar por baixo.',
  'Se você só é bom em uma coisa, torne-se o melhor nela.',
  'Faça o teu melhor, na condição que você tem, enquanto você não tem condições melhores, para fazer melhor ainda!',
  'O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz.',
  'O seu melhor não é o mesmo todos os dias. Você merece o crédito apenas por tentar fazer o seu melhor!',
  'As raízes do estudo são amargas, mas seus frutos são doces.',
  'Nós somos o que fazemos repetidamente. Portanto, a excelência não é um feito, e sim, um hábito!',
  'Nunca é tarde para correr atrás de seus sonhos!',
]

function randomTitle() {
  if (description.length === 0) { return undefined }
  const index = Math.floor(Math.random() * description.length)
  return description[index]
}

module.exports = {

  run: async (client, message, args) => {
    try {
      const embed = new Discord.MessageEmbed()
        .setTitle(`💌  Capitão Hipocampo tem um recado para você!`)
        .setDescription(randomTitle())
        .setColor(process.env.COLOR)
        .setThumbnail('https://c.tenor.com/n0lw6WudWL0AAAAj/amazed-wow.gif')
        .setFooter('Você está indo muito bem! Continue firme! ♡')
      message.channel.send(embed)
    } catch (error) {
      message.reply('erro')
    }
  },

  conf: {},

  get help() {
    return {
      name: 'motivação',
      description: 'O Comando "motivação" envia frases motivacionais.',
      usage: '*motivação',
      category: 'Comandos interativos',
    }
  },
}