module.exports = (client) => {
  const activities = [
    `Força, tá acabando! `,
    `Você é incrível! 💖`,
    `Cuide-se! `,
    `Somos ${client.users.cache.size} passageiros! 🚀`,
  ]
  let i = 0
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: 'WATCHING',
  }), 10800000)
  client.user
    .setStatus('online')
    .catch(console.log)
  console.log(`Eu estou online agora, meu nome é ${client.user.username}. Há ${client.users.cache.size} usuário(s) online no servidor!`)
}