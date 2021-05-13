const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: 'feetgif',
    description: "this is a ping command",
    execute (message, args){
	if (message.author.bot) return false;
	if (message.channel.nsfw) {
	async function feetGif() {
        const GIF = await neko.nsfw.feetGif();
        const embed = new Discord.MessageEmbed()
            .setColor('#ffa31a')
            .setTitle(`Feet Gif`)
            .setImage(GIF.url)
        message.channel.send(embed);
		}
		feetGif();
	} else {
		message.channel.send("By Discord bot rules I am forced to make it so you can only use this in a nsfw channel");
	}
    }
}