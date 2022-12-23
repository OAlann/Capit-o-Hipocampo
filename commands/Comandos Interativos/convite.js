const Discord = require('discord.js')
 
module.exports = {
 
  run: function(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Hipocampo')
      .setDescription(`**Gostaria de chamar algum amigo para o servidor? Basta compartilhar o link:** https://discord.gg/9abVJKbXug'`)
      .setImage('https://cdn.discordapp.com/attachments/888055580390998047/888056246433906698/79-BF3680-5-B1-C-4-CA5-BA6-A-B598895-B674-A.png')
      .setColor(process.env.COLOR)
    message.channel.send(embed)
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'convite',
      category: 'Comandos interativos',
      description: 'Gostaria de chamar algum amigo para o servidor? Basta utilizar este comando para obter o link de convite.',
      usage: '*convite',
    }
  },
}
