import { Client, Interaction } from "discord.js";
import { Command } from "../interfaces/command";

export default (client: Client, commands: Array<Command>) => {
    client.on('interactionCreate', async (interaction: Interaction) => { 
        if (!interaction.isCommand()) return;

        const { commandName } = interaction;
        const user = interaction.user;
        const reason = `🔧 /${commandName}: Requested by: ${user.tag} | ${user.id}`;
        const command = commands.find(command => command.name === commandName);
        try {
            command?.execute(interaction, reason);
        } catch (err) {
            console.error(err);
        }
    });
}