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

## Figlify Console Tool

An easier way to use the Figlify module.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | STRING  | The word(s) you want figlified
| #2   | STRING  | The font to use for figlification.
| #3   | STRING  | The CHALK NPM color you wish to use.

---

## Colorizor Console Tool

A cleaner and better way to log your errors in console.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | STRING  | The content you want colorized.
| #2   | STRING  | This is the color/bgColor the content should be logged in.


---

## Message Discord User Fetch

Fetch a Discord user from a message or it's content.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | CLIENT  | Provide your client here (bot, app, client).
| #2   | MESSAGE  | The message variable you can pull mentions from.
| #3   | STRING  | A backup ID or args statement when no mentions are provided.

---

## Discord User Fetch

Fetch a Discord user by ID (basic).

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | CLIENT  | Provide your client here (bot, app, client).
| #2   | STRING  | The userID you are trying to fetch info for.

---

## Discord Channel Fetch

Fetch a Discord channel by ID (basic).

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | CLIENT  | Provide your client here (bot, app, client).
| #2   | STRING  | The channelID you are trying to fetch info for.

---

## Discord Guild Fetch

Fetch a Discord guild by ID (basic).

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | CLIENT  | Provide your client here (bot, app, client).
| #2   | STRING  | The guildID you are trying to fetch info for.

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
    buddy.colorize(`I am now running...`, `blue`)

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
