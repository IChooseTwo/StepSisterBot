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
    } else if (command === 'hentailewd'){
        client.commands.get('hentailewd').run(message, args)
    } else if (command === 'futanari'){
        client.commands.get('futanari').execute(message, args)
    } else if (command === 'hentailesbian'){
        client.commands.get('hentailesbian').execute(message, args)
    } else if (command === 'hentaikuni'){
        client.commands.get('hentaikuni').execute(message, args)
    } else if (command === 'hentaicumsluts'){
        client.commands.get('hentaicumsluts').execute(message, args)
    } else if (command === 'hentaiboobs'){
        client.commands.get('hentaiboobs').execute(message, args)
    } else if (command === 'hentaiclassic'){
        client.commands.get('hentaiclassic').execute(message, args)
    } else if (command === 'hentaibj'){
        client.commands.get('hentaibj').execute(message, args)
    } else if (command === 'hentaipussy'){
        client.commands.get('hentaipussy').execute(message, args)
    } else if (command === 'randomhentaigif'){
        client.commands.get('randomhentaigif').execute(message, args)
    } else if (command === 'hentaianal'){
        client.commands.get('hentaianal').execute(message, args)
    } else if (command === 'hentaiavatar'){
        client.commands.get('hentaiavatar').execute(message, args)
    } else if (command === 'nekogif'){
        client.commands.get('nekogif').execute(message, args)
    } else if (command === 'yuri'){
        client.commands.get('yuri').execute(message, args)
    } else if (command === 'trap'){
        client.commands.get('trap').execute(message, args)
    } else if (command === 'hentaitits'){
        client.commands.get('hentaitits').execute(message, args)
    } else if (command === 'hentaisologif'){
        client.commands.get('hentaisologif').execute(message, args)
    } else if (command === 'hentaisolo'){
        client.commands.get('hentaisolo').execute(message, args)
    } else if (command === 'hentaipussyart'){
        client.commands.get('hentaipussyart').execute(message, args)
    } else if (command === 'kemonomimi'){
        client.commands.get('kemonomimi').execute(message, args)
    } else if (command === 'keta'){
        client.commands.get('keta').execute(message, args)
    } else if (command === 'hentaifemdom'){
        client.commands.get('hentaifemdom').execute(message, args)
    } else if (command === 'holo'){
        client.commands.get('holo').execute(message, args)
    } else if (command === 'holo'){
        client.commands.get('holo').execute(message, args)
    } else if (command === 'holoero'){
        client.commands.get('holoero').execute(message, args)
    } else if (command === 'feetgif'){
        client.commands.get('feetgif').execute(message, args)
    } else if (command === 'erofeet'){
        client.commands.get('erofeet').execute(message, args)
    } else if (command === 'hentaifeet'){
        client.commands.get('hentaifeet').execute(message, args)
    } else if (command === 'ero'){
        client.commands.get('ero').execute(message, args)
    } else if (command === 'erokitsune'){
        client.commands.get('erokitsune').execute(message, args)
    } else if (command === 'erokemonomimi'){
        client.commands.get('erokemonomimi').execute(message, args)
    } else if (command === 'eroneko'){
        client.commands.get('eroneko').execute(message, args)
    } else if (command === 'eroyuri'){
        client.commands.get('eroyuri').execute(message, args)
    } else if (command === 'cumarts'){
        client.commands.get('cumarts').execute(message, args)
    } else if (command === 'hentaiblowjob'){
        client.commands.get('hentaiblowjob').execute(message, args)
    } else if (command === 'hentaispank'){
        client.commands.get('hentaispank').execute(message, args)
    } else if (command === 'hentaigasm'){
        client.commands.get('hentaigasm').execute(message, args)
    } else if (command === 'randomfact'){
        client.commands.get('randomfact').execute(message, args)
    } else if (command === 'memes'){
        client.commands.get('memes').run(message, args)
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
    console.log("Online Step Bro...\
    \nhttps://discord.com/api/oauth2/authorize?client_id=841144912173989929&permissions=8&scope=bot");
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
