const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
var bot = new Discord.Client();
var prefix = ("/");

const HelpEmbed = new MessageEmbed()
	.setColor('#0000FF')
	.setTitle('commande help')
	.setURL('')
	.setAuthor('')
	.setDescription('Voici la liste de toutes les commandes disponible')
	.setThumbnail('')
	.addFields(
        { name: '/ping', value: 'Voir si je suis actif ou non', inline: true },
		{ name: '/help', value: 'Affiche la ce message de la commande help', inline: true },
	)
	.setImage('')
	.setTimestamp()
    .setFooter('Créateur: AlexDarx');

	const PingEmbed = new MessageEmbed()
	.setColor('#0000FF')
	.setTitle('')
	.setURL('')
	.setAuthor('')
	.setDescription('')
	.setThumbnail('')
	.addFields(
        { name: 'ping?', value: 'Je suis bien actif mec tu peut utiliser mes différentes commandes', inline: true }
	)
	.setImage('')
	.setTimestamp()
	.setFooter('Créateur: AlexDarx');
	
bot.on('message', message => { 
    if (message.content === prefix + "ping")
    message.channel.send(PingEmbed)
    if (message.content === prefix + "help")
    message.channel.send(HelpEmbed)
});

bot.login("")
