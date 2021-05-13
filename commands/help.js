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
		{ name: '**Commands:**', value: '\u200B\n**General Use:**\nstepbro\ \nwallpaper\ \nhentaigasm\ \nrandomfact\ \nmemes\ \n\
		\n**Real Life:**\
		\n4kporn\
		\nanal\
		\nboobs\
		\ngonewild\
		\npussy\
		\nsolo\
		\nthigh\
		\nporngif\
		\nstepsis\
		\n\
		\n**Hentai:**\
		\nerokemo\
		\nhentai\
		\nhentaiass\
		\nhentaithigh\
		\nkitsune\
		\nhentailewd\
		\nmidriff\
		\nnekofeet\
		\nnekopussy\
		\nnekotits\
		\nfutanari\
		\nhentailesbian\
		\nkuni\
		\nhentaicumsluts\
		\nhentaiboobs\
		\nhentaiclassic\
		\nhentaibj\
		\nhentaipussy\
		\nrandomhentaigif\
		\nhentaianal\
		\nhentaiavatar\
		\nnekogif\
		\nyuri\
		\ntrap\
		\nhentaitits\
		\nhentaisologif\
		\nhentaisolo\
		\nhentaipussyart\
		\nkemonomimi\
		\nketa\
		\nholo\
		\nholoero\
		\nfeetgif\
		\nerofeet\
		\nhentaifeet\
		\nero\
		\nerokitsune\
		\nerokemonomimi\
		\neroneko\
		\neroyuri\
		\ncumarts\
		\nhentaiblowjob\
		\nhentaispank\
		\n\
		\n**57 total commands!**\
		\n' },
	)
	.setTimestamp()
	.setFooter('Bot by kaz#8306');

    message.author.send(Help)
    }
}