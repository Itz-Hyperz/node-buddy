# node-buddy
A node module that is designed to make your life easier when dealing with errors, logging, and more!

---

## Support

* [Discord](https://hyperz.dev/discord)

* [Website](https://support.hyperz.dev/)

---

## Installation

`npm i node-buddy@latest --save`

---

## Class Builder

A way that you can log errors to a Discord channel via a Webhook.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | BOOLEAN  | useDiscord true or false.
| #2   | STRING  | If using Discord, set the webhook username here.
| #3   | STRING  | If using Discord, set the webhook avatarURL here.

---

## Console Errors

A cleaner and better way to log your errors in console.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | STRING  | This is the error that is collected.
| #2   | STRING  | This is the color the error should be logged in.

---

## Webhook Errors

A way that you can log errors to a Discord channel via a Webhook.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | STRING  | This is the error that is collected.
| #2   | STRING  | This is the ID of the webhook to send to.
| #3   | STRING  | This is the TOKEN of the webhook to send to.

---

## Code Example

```js
const nodebuddy = require('node-buddy')
const buddy = new nodebuddy(true, 'NodeBuddy', 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async () => {
    let channel = await client.channels.cache.get('848346040511758356')

    if(channel == undefined) {
        buddy.consoleError(`channel variable has returned undefined.`, `red`);
    } else {
        channel.send().catch(e => {
            buddy.webhookError(e, `webhookId`, `webhookToken`);
        });
    }
});

client.login('YOUR_BOT_TOKEN')
```

---

## What are the dependencies?

[DiscordJS](https://www.npmjs.com/package/discord.js)

[Chalk](https://www.npmjs.com/package/chalk)

---