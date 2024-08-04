import { Client, CommandInteraction, PermissionsString } from 'discord.js';

interface CommandData {
    client: Client;
    name: string;
    description: string;
    direct?: boolean;
    permissions?: PermissionsString[];
    execute: (interaction?: CommandInteraction, reason?: string) => void;
}

export class Command implements CommandData {
    constructor(private data: CommandData) {}

    execute(interaction?: CommandInteraction, reason?: string): void {
        this.data.execute(interaction, reason);
    }

    get client(): Client {
        return this.data.client;
    }

    get name(): string {
        return this.data.name;
    }

    get description(): string {
        return this.data.description;
    }

    get direct(): boolean | undefined {
        return this.data.direct;
    }

    get permissions(): PermissionsString[] | undefined {
        return this.data.permissions;
    }
}
