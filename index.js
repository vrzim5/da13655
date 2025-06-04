
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { handleDiceRoll } = require('./Dados.js');
const { handleCards: handleCopas } = require('./copas.js');
const { handleCards: handleOuros } = require('./ouros.js');
const { handleCards: handleEspadas } = require('./espadas.js');
const { handleCards: handleBaralho } = require('./baralho.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`🎲 Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    // Handle dice rolls
    const isDiceCommand = handleDiceRoll(message);
    if (isDiceCommand) return;

    // Handle card commands
    const isCopaCommand = handleCopas(message);
    if (isCopaCommand) return;

    const isOuroCommand = handleOuros(message);
    if (isOuroCommand) return;

    const isEspadaCommand = handleEspadas(message);
    if (isEspadaCommand) return;

    const isBaralhoCommand = handleBaralho(message);
    if (isBaralhoCommand) return;
});

client.login(process.env.DISCORD_TOKEN);
