import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder, APIInteractionGuildMember, GuildMember } from "discord.js"
import { getThemeColor } from "../functions";
import { SlashCommand } from "../types";
import { client } from '../index';
const helloSet = new Set()



const command : SlashCommand = {
    command: new SlashCommandBuilder()
    .setName("trial")
    .setDescription("Trial for new users")
    ,
    execute:async( interaction :any)=> {
        const ROLE_ID = process.env.ROLE_ID
        const CHANNEL_ID = process.env.CHANNEL_ID
        if(!ROLE_ID) throw new Error("ROLE ID Missing")
        if(!CHANNEL_ID) throw new Error("Channel ID Missing")

        const guild = await client.guilds.fetch(interaction?.guildId)
        const channel :any=  client.channels.cache.get(CHANNEL_ID);

        let member:any = guild.members.cache.get(interaction.member.user.id);
        let role = guild.roles.cache.find(r => r.name === 'fresher') || await guild.roles.fetch(ROLE_ID);

        if(!member.roles.cache.has(ROLE_ID)) {
            channel.send(`You have assigned a role Trial User`)
            await member.roles.add(role)
            setTimeout(async() => {
                await member.roles.remove(role)
                channel.send(`Trial Period Over`)
            }, 30000)
          } else {
            channel.send(`You are already on trial period`)
          }
    },
    cooldown: 10
}

export default command