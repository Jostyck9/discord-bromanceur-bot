const Discord = require('discord.js');
const token = process.env.TOKEN || "";
const client = new Discord.Client();

const Bro = require('./bro')
const Brovoice = require('./brovoice')

function filterContent(content) {
    var words = content.toLowerCase().split(" ");
    var filtered = words.filter(function (el) {
        return el != "" && el != null;
    });
    return filtered;
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
    } else if (content[0] == 'bro') {
        Bro.manage(msg, content);
    }
});

client.login(token);
