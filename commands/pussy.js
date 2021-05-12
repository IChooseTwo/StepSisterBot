const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'pussy',
    description: "this is a ping command",
    async run (message, args){
	if (message.author.bot) return false;
	if (message.channel.nsfw) {
		const image = await nsfw.pussy();
		const embed = new Discord.MessageEmbed()
			.setTitle(`Pussy Image`)
			.setColor("GREEN")
			.setImage(image);
		message.channel.send(embed);
	} else {
		message.channel.send("By Discord bot rules I am forced to make it so you can only use this in a nsfw channel");
	}
    }
}