const Discord = require('discord.js');

async function manage(msg, content) {
    if (content.length == 1)
        return;

    switch (content[1]) {
        case 'help':
            help(msg);
            break;
    
        case 'attitude':
            attitude(msg);
            break;

        case 'gabin':
            gabin(msg);
            break;

        case 'epenis':
            epenis(msg);
            break;
        
        default:
            break;
    }
}

function help(msg) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('Help')
    .setColor('#ff0000')
	.setAuthor('Le Bromanceur ❤️', 'https://media.discordapp.net/attachments/653697192363819049/697822632963473408/unknown.png', 'https://github.com/Jostyck9/discord-bromanceur-bot')
	.setThumbnail('https://media.discordapp.net/attachments/653697192363819049/697822632963473408/unknown.png')
	.addFields(
		{ name: '> **bro attitude**', value: "let's see how bro you are" },
		{ name: '> **bro epenis**', value: 'surprise :smirk:'},
        { name: '> **bro gabin**', value: 'show the world your e-penis'},
        { name: '> **brovoice join**', value: 'ready to hear the greatest thing on earth ?'},
	)
    msg.channel.send(exampleEmbed);
}

function attitude(msg) {
    const brotitude = Math.floor(Math.random() * 101);
        var toReply = "";

        if (brotitude <= 10) {
            toReply = "You're not concerned you son of a ***ch with your " + brotitude + "% of brotitude";
        } else if (brotitude <= 40) {
            toReply = brotitude + "% ? Not bad .. but not extraordinary for a brotitude";
        } else if (brotitude <= 80) {
            toReply = brotitude + "%...Yeah I'm looking at you :smirk:";
        } else if (brotitude <= 99) {
            toReply = "Yeah, let's go clap our ass with your " + brotitude + "% of brotitude\nhttps://tenor.com/view/the-kloons-butt-smack-bros-bromance-sports-gif-8049917"
        } else {
            toReply = "YOU'RE THE BRO GOD\nhttps://tenor.com/view/manderville-godbert-gif-14333099"
        }
        msg.reply(toReply);
}

function gabin(msg) {
    msg.reply("https://media.discordapp.net/attachments/552121226626334720/647509469030383633/IMG_20180426_001300_Bokeh.png");
}

function epenis(msg) {
    const Size = Math.floor(Math.random() * 101);
    let reply = "8=";

    for (let step = 0; step < Size; step++) {
        reply = reply + "=";
    }
    reply = reply + "3";
    msg.reply(reply);
}

module.exports = {
    manage
}