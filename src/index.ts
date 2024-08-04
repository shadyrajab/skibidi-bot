import { Client } from 'discord.js'
require('dotenv').config()


const client = new Client({
    intents: [
        'Guilds',  'GuildVoiceStates', 'GuildMembers', 'GuildMessages'
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.username}!`)
})

client.login(process.env.TOKEN)
