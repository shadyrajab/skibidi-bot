import { Client } from 'discord.js'
import loadInteractionCommands  from './handler/commandHandler';
import interactionCreate from './events/interactionCreate';
require('dotenv').config()

const client = new Client({
    intents: [
        'Guilds',  'GuildVoiceStates', 'GuildMembers', 'GuildMessages'
    ]
})

const commands = loadInteractionCommands(client);
interactionCreate(client, commands)

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.username}!`)
})

client.login(process.env.TOKEN)
