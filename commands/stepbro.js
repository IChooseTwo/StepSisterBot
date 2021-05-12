module.exports = {
    name: 'stepbro',
    description: "WHAT ARE YOU DOING STEP BRO?",
    execute(message, args){
        message.channel.send({
            files: [
              "./mp3/stepbro.mp3",
            ]
          });
    }
}