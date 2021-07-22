// Created By: Hyperz#0001 & SamTheMan#1686
// Created By: Hyperz#0001 & SamTheMan#1686
// Created By: Hyperz#0001 & SamTheMan#1686

const chalk = require('chalk')
const Discord = require('discord.js'); // Discord.JS V12

class buddy {

    constructor(useDiscord, discordUsername, discordAvatarURL) {
        this.useDiscord = useDiscord,
        this.discordUsername = discordUsername,
        this.discordAvatarURL = discordAvatarURL
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
                logcolor = chalk.magenta(content);
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