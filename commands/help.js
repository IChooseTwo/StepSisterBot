const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'help',
    description: "this is a ping command",
    execute(message, args){
	message.channel.send("Sent you a text step bro :wink:")
    const Help = new Discord.MessageEmbed()
	.setColor('#ffa31a')
	.setTitle('Help')
	.setDescription('Hey Step Bro... ;) here some help\n\ prefix = s!')
	.addFields(
		{ name: '**Commands:**', value: '\n\n**General Use:**\nstepbro\n\
		\n**Real Life:**\
		\n4kporn\
		\nanal\
		\nboobs\
		\ngonewild\
		\npussy\
		\nsolo\
		\nthigh\
		\nporngif\
		\n\
		\n**Hentai:**\
		\nerokemo\
		\nhentai\
		\nhentaiass\
		\nhentaithigh\
		\nkitsune\
		\nlewd\
		\nmidriff\
		\nnekofeet\
		\nnekopussy\
		\nnekotits\
		\nwallpaper\
		\n' },
	)
	.setTimestamp()
	.setFooter('Bot by kaz#8306');

    message.author.send(Help)
    }
}