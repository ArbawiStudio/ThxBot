const { Client, Partials, IntentsBitField } = require('discord.js')

const client = new Client({
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User
    ],

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

require('fs').readdir()