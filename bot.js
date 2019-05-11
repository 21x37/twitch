const tmi = require('tmi.js');

class twitchBot {
    constructor(creds) {
        this.opts = {
            identity: {
                username: creds.username,
                password: creds.token
            },
            channels: creds.channels
        };
        this.client = new tmi.client(this.opts);

    }
    _message(target, message, self, callback) {
        if (self) return;

        callback(target, message, self, this.client);
    };
    _connected(addr, port) {
        console.log(`Connected to ${addr}, ${port}`)
    };
    start(callback) {
        if (callback) this.callback = callback;
        console.log('start', this.callback);

        this.client.connect();

        this.client.on('message', (channel, userstate, message, self) => {
            this._message(channel, message, self, callback)
        });
        this.client.on('connected', this._connected);
    };
};

module.exports = twitchBot;
