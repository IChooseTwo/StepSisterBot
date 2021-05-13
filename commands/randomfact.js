const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: 'randomfact',
    description: "WHAT ARE YOU DOING STEP BRO?",
    execute(message, args){
      async function fact() {
        const factTEXT = await neko.sfw.fact();
        message.channel.send(factTEXT.fact)
      }
      fact();
      }
    }