const Discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: 'hentaiavatar',
    description: "this is a ping command",
    execute (message, args){
	if (message.author.bot) return false;
	if (message.channel.nsfw) {
	async function avatar() {
        const GIF = await neko.nsfw.avatar();
        const embed = new Discord.MessageEmbed()
            .setColor('#ffa31a')
            .setTitle(`Avatar`)
            .setImage(GIF.url)
        message.channel.send(embed);
		}
		avatar();
	} else {
		message.channel.send("By Discord bot rules I am forced to make it so you can only use this in a nsfw channel");
	}
    }
}