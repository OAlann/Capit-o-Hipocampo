const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .addField('Orientações Pomodoro', '⏳ | <#867471424381517865>')
      .addField('Uso do temporizador', '*Visualize a junte-se aos grupos de estudos.*\n`@pomodoro join:` Junte-se a um grupo de estudos.\n`@pomodoro leave:` Sair do seu grupo atual.\n`@pomodoro groups:` Liste os grupos de estudo do servidor.\n`@pomodoro status:` Mostra o status de um grupo.')
      .addField('Controle do temporizador', '*Configure e controle os temporizadores de grupo.*\n`@pomodoro stop:` Para seu timer de grupo.\n`@pomodoro skip:` Pule o estágio atual.\n`@pomodoro setup:` Pare e altere seu padrão de timer de grupo.\n`@pomodoro reset:` redefina o padrão do temporizador para o padrão.\n`@pomodoro start:` Inicie seu timer de grupo.')
      .setImage('https://i.ibb.co/zfb74dQ/blobo-pomodoro4h.png')
      .addField('Blocos do temporizador', 'Simulado')
      .setImage('https://i.ibb.co/qgWtfgp/bloco-pomodoro5h30.png')
      .setThumbnail('https://i.ibb.co/R7kQqb2/ampulheta.png')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'simulado5h30',
      category: 'Informações',
      description: 'Mostrará um breve resumo de como utilizar o método pomodoro (tempo de estudo).',
      usage: '*simulado5h30',
    }
  },
}
