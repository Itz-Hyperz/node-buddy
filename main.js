// Created By: Hyperz#0001 & SamTheMan#1686
// Created By: Hyperz#0001 & SamTheMan#1686
// Created By: Hyperz#0001 & SamTheMan#1686

const chalk = require('chalk')
const Discord = require('discord.js'); // Discord.JS V12
const figlet = require('figlet')

class buddy {

    constructor(useDiscord, discordUsername, discordAvatarURL) {
        this.useDiscord = useDiscord,
        this.discordUsername = discordUsername,
        this.discordAvatarURL = discordAvatarURL
    }

    async figlify(data, font, color) {
        figlet(data, { font: font }, function(err, content) {
            if (err) {
                console.log(chalk.red('\nFiglify, something went wrong!\n\n'));
                console.log(err + '\n');
                return;
            }
            let logging;
            switch (color) {
                case 'blue':
                    logging = chalk.blue(content);
                    break;
                case 'green':
                    logging = chalk.green(content);
                    break;
                case 'yellow':
                    logging = chalk.yellow(content);
                    break;
                case 'yello':
                    logging = chalk.yellow(content);
                    break;
                case 'red':
                    logging = chalk.red(content);
                    break;
                case 'black':
                    logging = chalk.black(content);
                    break;
                case 'white':
                    logging = chalk.white(content);
                    break;
                case 'magenta':
                    logging = chalk.magenta(content);
                    break;
                case 'bgRed':
                    logging = chalk.black.bgRed(content);
                    break;
                case 'bgGreen':
                    logging = chalk.black.bgGreen(content);
                    break;
                case 'bgYellow':
                    logging = chalk.black.bgYellow(content);
                    break;
                case 'bgYello':
                    logging = chalk.black.bgYellow(content);
                    break;
                case 'bgBlue':
                    logging = chalk.black.bgBlue(content);
                    break;
                case 'bgMagenta':
                    logging = chalk.black.bgMagenta(content);
                    break;
                case 'bgCyan':
                    logging = chalk.black.bgCyan(content);
                    break;
                case 'bgWhite':
                    logging = chalk.black.bgWhite(content);
                    break;
                default:
                    logging = chalk.blue(content);
            }
        });
        console.log(logging)
    }

    // Colorizor Console Tool
    async colorize(content, color) {
        let colored;
        switch (color) {
            case 'blue':
                colored = chalk.blue(content);
                break;
            case 'green':
                colored = chalk.green(content);
                break;
            case 'yellow':
                colored = chalk.yellow(content);
                break;
            case 'yello':
                colored = chalk.yellow(content);
                break;
            case 'red':
                colored = chalk.red(content);
                break;
            case 'black':
                colored = chalk.black(content);
                break;
            case 'white':
                colored = chalk.white(content);
                break;
            case 'magenta':
                colored = chalk.magenta(content);
                break;
            case 'bgRed':
                colored = chalk.black.bgRed(content);
                break;
            case 'bgGreen':
                colored = chalk.black.bgGreen(content);
                break;
            case 'bgYellow':
                colored = chalk.black.bgYellow(content);
                break;
            case 'bgYello':
                colored = chalk.black.bgYellow(content);
                break;
            case 'bgBlue':
                colored = chalk.black.bgBlue(content);
                break;
            case 'bgMagenta':
                colored = chalk.black.bgMagenta(content);
                break;
            case 'bgCyan':
                colored = chalk.black.bgCyan(content);
                break;
            case 'bgWhite':
                colored = chalk.black.bgWhite(content);
                break;
            default:
                colored = chalk.blue(content);
        }
        console.log(`${colored}`);
    }

    // Fetch a member through a message
    async messageGetDiscordUser(client, message, userid) {

        if(!this.useDiscord) return;
        let member;
        if(message.mentions.users.first()) {
            member = await message.mentions.users.first()
        } else {
            member = await client.users.fetch(userid)
        }

        if(member == undefined) return console.log(chalk.red(`Member search failed for messageGetDiscordUser function, invalid data entry.`));

        return member;

    }

    // Fetch a member in general
    async getDiscordUser(client, userid) {

        if(!this.useDiscord) return;
        let member;
        if(!client) return console.log(chalk.red(`No client was specified`));
        if(!userid) return console.log(chalk.red(`No userID was specified`));

        try {
            member = await client.users.fetch(userid)
        } catch(e) {
            console.log(e)
        }

        if(member == undefined) return console.log(chalk.red(`Member search failed for getDiscordUser function, invalid data entry.`));

        return member;
        
    }

    // Fetch a Discord channnel
    async getDiscordChannel(client, channelid) {

        if(!this.useDiscord) return;
        let channel;
        if(!client) return console.log(chalk.red(`No client was specified`));
        if(!channelid) return console.log(chalk.red(`No channelID was specified`));

        try {
            channel = await client.channels.fetch(channelid)
        } catch(e) {
            console.log(e)
        }

        if(channelid == undefined) return console.log(chalk.red(`Channel search failed for getDiscordChannel function, invalid data entry.`));

        return channel;
        
    }

    // Fetch a Discord guild
    async getDiscordGuild(client, guildid) {
        
        if(!this.useDiscord) return;
        let guild;
        if(!client) return console.log(chalk.red(`No client was specified`));
        if(!guildid) return console.log(chalk.red(`No guildID was specified`));

        try {
            guild = await client.guilds.fetch(guildid)
        } catch(e) {
            console.log(e)
        }

        if(guild == undefined) return console.log(chalk.red(`Guild search failed for getDiscordGuild function, invalid data entry.`));

        return guild;
        
    }

    // Console Error Handler
    async consoleError(error, color) {
        let logcolor;
        switch (color) {
            case 'blue':
                logcolor = chalk.blue(error);
                break;
            case 'green':
                logcolor = chalk.green(error);
                break;
            case 'yellow':
                logcolor = chalk.yellow(error);
                break;
            case 'yello':
                logcolor = chalk.yellow(error);
                break;
            case 'red':
                logcolor = chalk.red(error);
                break;
            case 'black':
                logcolor = chalk.black(error);
                break;
            case 'magenta':
                logcolor = chalk.magenta(error);
                break;
            default:
                logcolor = chalk.red(error);
        }
        console.log(`\n${chalk.black.bgGreen.bold(` --- NodeBuddy Error --- `)}\n\n${logcolor}\n`);
    }

    // Webhook Error
    async webhookError(error, webhookId, webhookToken) {
        if(this.useDiscord) {
            if(!this.discordUsername) return console.log(chalk.yellow(`Not all Discord information is provided in your constructor.`));
            if(!this.discordAvatarURL) return console.log(chalk.yellow(`Not all Discord information is provided in your constructor.`));

            const webhookClient = new Discord.WebhookClient(webhookId, webhookToken);

            const embed = new Discord.MessageEmbed()
            .setColor(`#e32d2d`)
            .setTitle(`Webhook Error Log`)
            .setDescription(`**Error:**\`\`\`js\n${error}\`\`\`\n**Error Stack:**\`\`\`js\n${error.stack}\`\`\``)
            .setFooter(`node-buddy | Webhook Error Logger`)

            webhookClient.send({
                username: this.discordUsername,
                avatarURL: this.discordAvatarURL,
                embeds: [embed]
            }).catch(e => {
                console.log(chalk.red(`\nWebhook Error: I was unable to send the embeded error message to the webhook || ID: ${webhookId} || TOKEN: ${webhookToken}\n\n${e}\n`));
            });
        } else {
            console.log(chalk.yellow('\nuseDiscord is disabled or not defined in your constructor.\n'));
        }
    }

}

module.exports = buddy;

// Created By: Hyperz#0001 & SamTheMan#1686
// Created By: Hyperz#0001 & SamTheMan#1686
// Created By: Hyperz#0001 & SamTheMan#1686
