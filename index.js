const Discord = require('discord.js');
const token = process.env.TOKEN || "";
const client = new Discord.Client();

const Brovoice = require('./src/brovoice')

function filterContent(content) {
    var words = content.toLowerCase().split(" ");
    var filtered = words.filter(function (el) {
        return el != "" && el != null;
    });
    return filtered;
}

function help(msg) {
    msg.reply("\nThe bromanceur bot\n\
    ```brotitude```let's see how bro you are\n\
    ```brovoice join```ready to hear the greatest thing on earth ?\n\
    ```bro gabin```surprise :smirk:\n\
    ```e-penis```show the world your e-penis")
}

function epenis(msg) {
    const Size = Math.floor(Math.random() * 101)
    let reply = "8="

    for (let step = 0; step < Size; step++) {
        reply = reply + "="
    }
    reply = reply + "3"
    msg.reply(reply)
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const content = filterContent(msg.content);
    if (content.length == 0)
        return;

    if (content[0] == 'brovoice') {
        Brovoice.manage(msg, content);
    } else if (content[0] == 'bro' && content[1] == 'help') {
        help(msg)
    } else if (content[0] == 'brotitude') {
        const brotitude = Math.floor(Math.random() * 101);
        var toReply = ""

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
    } else if (content[0] == 'bro' && content[1] == "gabin") {
        msg.reply("https://media.discordapp.net/attachments/552121226626334720/647509469030383633/IMG_20180426_001300_Bokeh.png");
    } else if (content[0] == 'e-penis') {
        epenis(msg)
    }
});

client.login(token);
