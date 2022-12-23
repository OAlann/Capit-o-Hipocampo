const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .addField('Orientações Pomodoro', '🌸 | <#832979918206795786>')
      .addField('Uso do temporizador', '*Visualize a junte-se aos grupos de estudos:*\n`@pomodoro join:` Junte-se a um grupo de estudos.\n`@pomodoro leave:` Sair do seu grupo atual.\n`@pomodoro groups` Liste os grupos de estudo do servidor.\n`@pomodoro status:` Mostra o status de um grupo.')
      .addField('Controle do temporizador', '*Configure e controle os temporizadores de grupo.*\n`@pomodoro start:` Iniciar seu timer do grupo.\n`@pomodoro restart:` Reiniciar seu timer de grupo ao primeiro estágio.\n`@pomodoro stop:` Parar o timer do grupo.\n`@pomodoro skip:` Pular o estágio atual.')
      .setThumbnail('https://i.ibb.co/R7kQqb2/ampulheta.png')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'pomodoro180',
      category: 'Informações',
      description: 'Mostrará um breve resumo de como utilizar o método pomodoro (tempo de estudo).',
      usage: '*pomodoro180',
    }
  },
}
