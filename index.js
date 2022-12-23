if (process.version.slice(1).split('.')[0] < 8) {
  throw new Error(
    'Node 8.0 ou superior é necessário. Atualize o Node em seu sistema',
  )
}

require('dotenv').config()

const { Client, Collection } = require('discord.js')
const { loadCommands, loadEvents } = require('./utils')
const Discord = require("discord.js")
const client = new Client()

client.commands = new Collection()
client.startTime = Date.now()

loadCommands(client.commands, './commands')
loadEvents('./events', client)

process.on('multipleResolves', (type, reason, promise) => {
  console.log(`🚫 Erro Detectado:\n\n` + type, promise, reason)
});
process.on('unhandRejection', (reason, promise) => {
  console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
});
process.on('uncaughtException', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});

//Lembretes Interativos
client.on("ready", () => {
 
  let canal = client.channels.cache.get("787465181713268766") // Coloque o ID do canal de texto.
  canal.send(`> **O sistema de lembretes está ativado!**`).catch(e=>{console.log(e)});
 
  setInterval(function() {
 
      canal.send({content: `<@&${'827566304059326506'}> 💦\n> Lembre-se de tomar um copo de água e manter-se hidratade!`}).catch(e=>{console.log(e)});            
           
  }, 7200000) // Coloque o tempo em milisegundos. Exemplo: 10000 = 10 segs;
 
  setInterval(function() {
 
    canal.send({content: `<@&${'827566479909584916'}> 🪑\n> Ei, você! Arruma essa postura! Sua coluna vai te agradecer no futuro!`}).catch(e=>{console.log(e)});            
         
  }, 14400000) // Coloque o tempo em milisegundos. Exemplo: 10000 = 10 segs;
 
  setInterval(function() {
 
    canal.send({content: `<@&${'827566581823438929'}> 🧘\n> Já deu uma alongada hoje? Sessões frequentes de alongamento garantem a saúde das suas costas, braços e pernas. Vamos alongar um pouquinho!`}).catch(e=>{console.log(e)});            
       
  }, 86400000) // Coloque o tempo em milisegundos. Exemplo: 10000 = 10 segs;
 
})

client.login(process.env.AUTH_TOKEN)
