import { Client, CommandInteraction, EmbedBuilder } from "discord.js";
import { Command } from "../interfaces/command";

export default class Avatar extends Command {
    constructor(client: Client) {
        super(new Command({
            client, 

            name: 'avatar',
            description: 'Get the avatar of a user',

            execute: async (interaction: CommandInteraction) => {
                const user = interaction.user;
                const embed = new EmbedBuilder()
                    .addFields([
                        {
                            name: 'Avatar',
                            value: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
                            inline: true
                        }
                    ])
                
                return await interaction.reply({ embeds: [embed] });
            }

        }))
    }
}