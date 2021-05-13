const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'wallpaper',
    description: "this is a ping command",
    async run (message, args){
		const image = await nsfw.wallpaper();
		const embed = new Discord.MessageEmbed()
			.setTitle(`Wallpaper`)
			.setColor("#ffa31a")
			.setImage(image);
		message.channel.send(embed);
	}
}