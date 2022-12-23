const Discord = require('discord.js')
 
module.exports = {
 
    run: async (client, message, args) => {
    
        const Responses = ["Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim"], Random = Responses[Math.floor(Math.random () * Responses.length)];
        const Question = args.join(" ");
    
        if (!Question) return message.channel.send("> **Por favor, digite sua pergunta!**");
    
        const Embed = new Discord.MessageEmbed()
        .setTitle('Previsão aceita!')
        .addField('Sua pergunta', Question)
        .addField('Resposta', Random)
        .setColor(process.env.COLOR)
        .setFooter(`Previsão solicitada por: ${message.author.username}`)
    
        return message.channel.send(Embed);
  },
 
  conf: {},
 
  get help() {
    return {
      name: 'prever',
      category: 'Comandos interativos',
      description: 'Mostrará uma previsão baseada na sua pergunta.',
      usage: '*prever',
    }
  },
}