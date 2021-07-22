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
            case 'white':
                logcolor = chalk.white(error);
                break;
            default:
                logcolor = chalk.red(error);
        }
        console.log(`\n --- NodeBuddy Error --- \n\n${logcolor}\n`);
    }

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
