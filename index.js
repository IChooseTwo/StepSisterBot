const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
require('dotenv').config();
const StatusUpdater = require('@tmware/status-rotate')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const prefix = 's!';

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args)
    } else if (command === 'stepbro'){
        client.commands.get('stepbro').execute(message, args)
    } else if (command === 'pussy'){
        client.commands.get('pussy').run(message, args)
    } else if (command === '4kporn'){
        client.commands.get('4kporn').run(message, args)
    } else if (command === 'anal'){
        client.commands.get('anal').run(message, args)
    } else if (command === 'ass'){
        client.commands.get('ass').run(message, args)
    } else if (command === 'boobs'){
        client.commands.get('boobs').run(message, args)
    } else if (command === 'erokemo'){
        client.commands.get('erokemo').run(message, args)
    } else if (command === 'gonewild'){
        client.commands.get('gonewild').run(message, args)
    } else if (command === 'midriff'){
        client.commands.get('midriff').run(message, args)
    } else if (command === 'nekofeet'){
        client.commands.get('nekofeet').run(message, args)
    } else if (command === 'nekopussy'){
        client.commands.get('nekopussy').run(message, args)
    } else if (command === 'nekotits'){
        client.commands.get('nekotits').run(message, args)
    } else if (command === 'porngif'){
        client.commands.get('porngif').run(message, args)
    } else if (command === 'pussy'){
        client.commands.get('pussy').run(message, args)
    } else if (command === 'solo'){
        client.commands.get('solo').run(message, args)
    } else if (command === 'thigh'){
        client.commands.get('thigh').run(message, args)
    } else if (command === 'wallpaper'){
        client.commands.get('wallpaper').run(message, args)
    } else if (command === 'hentai'){
        client.commands.get('hentai').run(message, args)
    } else if (command === 'hentaiass'){
        client.commands.get('hentaiass').run(message, args)
    } else if (command === 'hentaithigh'){
        client.commands.get('hentaithigh').run(message, args)
    } else if (command === 'kitsune'){
        client.commands.get('kitsune').run(message, args)
    } else if (command === 'lewd'){
        client.commands.get('lewd').run(message, args)
    }
})

client.on('message', async message => {
let funnywords = ['fuck you', 'fuck', 'siblings', 'Step siblings', 'PornHub', 'Porn']
const pornmessages = ["What are you doing step bro?", "Mom's here fuck!", "Hurry up I don't wanna be caught!", "YOU ARE SO MUCH BETTER THEN MY BOYFRIEND", "HELP IM STUCK IN THE WASHING MACHINE!"]
const randomMessage = pornmessages[Math.floor(Math.random() * pornmessages.length)];
let foundInText = false;
for (var i in funnywords) {
    if (message.content.toLowerCase().includes(funnywords[i].toLowerCase())) foundInText = true;
} 

if (foundInText) {
    if (message.author.bot) return;
    message.channel.send(randomMessage);
    }
});

client.on("ready", () => {
    console.log("Online Step Bro...");
  });
  
client.login(process.env.token);

const statusMessages = [
    { type: 'PLAYING', name: 'with Step Bro hard dick' },
    { type: 'LISTENING', name: 'Step Bro moans...' },
    { type: 'WATCHING', name: 'Step Bro Jerk off' },
    { type: 'PLAYING', name: 'in {users} step bros rooms...' },
    { type: 'PLAYING', name: 's!help step bro ;)' },
    { type: 'WATCHING', name: 'porn' }
  ]
  
  const Updater = new StatusUpdater(client, statusMessages)

// Listen for an event 'updateStatus', update the status when it occurs
client.on('updateStatus', () => Updater.updateStatus())

// Every 10 minutes, emit such an event
client.setInterval(() => client.emit('updateStatus'), 10 * 1000)
