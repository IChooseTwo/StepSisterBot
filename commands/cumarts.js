const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: 'cumarts',
    description: "this is a ping command",
    execute (message, args){
	if (message.author.bot) return false;
	if (message.channel.nsfw) {
	async function cumArts() {
        const GIF = await neko.nsfw.cumArts();
        const embed = new Discord.MessageEmbed()
            .setColor('#ffa31a')
            .setTitle(`Cum Arts`)
            .setImage(GIF.url)
        message.channel.send(embed);
		}
		cumArts();
	} else {
		message.channel.send("By Discord bot rules I am forced to make it so you can only use this in a nsfw channel");
	}
    }
}