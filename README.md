# @21x37/twitch-bot
![npm](https://img.shields.io/npm/v/@21x37/twitch-bot.svg?style=popout)
![license](https://img.shields.io/github/license/21x37/twitch.svg)

Easily setup a twich chat bot! 💬

# Install
```
npm install @21x37/twitch-bot
```

# Usage

```js
const twitchBot = require('@21x37/twitch-bot')

const creds = {
    // The bots username.
    username: process.env.TWITCH_USERNAME,
    // Twitch token from https://twitchapps.com/tmi/ or generate your own with your own backend.
    token: process.env.TWITCH_TOKEN,
    // Channels the bot will be in.
    channels: [ 'summit1g', 'shroud', 'tyler1', 'sodapoppin' ]
};
```

# Example

```js
const twitchBot = require('./bot');

const creds = {
    username: process.env.TWITCH_USERNAME,
    token: process.env.TWITCH_TOKEN,
    channels: [ 'summit1g', 'shroud', 'tyler1', 'sodapoppin' ]
};


const bot = new twitchBot(creds);

bot.start((channel, message, self, client) => {
    // If its the bots message do nothing.
    if (self) return;

    if (message === 'woof') {
        // Channel where the message occurred and message to say.
        client.say(channel, 'bark')
    } 
});		
```

🤖💬
