const ytdl = require('ytdl-core');

async function manage(msg, content) {
    if (content[1] === 'join') {
        await join(msg);
    }
}

async function join(msg) {
    if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join();

        const dispatcher = await connection.play(ytdl('https://youtu.be/RMFlnc6uITE', { filter: 'audioonly' }));
        dispatcher.on('finish', () => {
            dispatcher.destroy();
            msg.member.voice.channel.leave();
        })

    } else {
        msg.reply('Bro.. You need to join a voice channel first!');
    }
}

module.exports = {
    manage
}