const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: 'hentaibj',
    description: "this is a ping command",
    execute (message, args){
	if (message.author.bot) return false;
	if (message.channel.nsfw) {
	async function bj() {
        const GIF = await neko.nsfw.bJ();
        const embed = new Discord.MessageEmbed()
            .setColor('#ffa31a')
            .setTitle(`BJ`)
            .setImage(GIF.url)
        message.channel.send(embed);
		}
		bj();
	} else {
		message.channel.send("By Discord bot rules I am forced to make it so you can only use this in a nsfw channel");
	}
    }
}