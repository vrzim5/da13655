
const { EmbedBuilder } = require('discord.js');

const cartasUsuariosOuros = new Map();
const executandoComando = new Map();

const cartasOuros = [
    { valor: 'A', nome: 'Ás', imagem: 'src/Ouros/A.png'},
    { valor: '2', nome: 'Dois', imagem: 'src/Ouros/2.png'},
    { valor: '3', nome: 'Três', imagem: 'src/Ouros/3.png'},
    { valor: '4', nome: 'Quatro', imagem: 'src/Ouros/4.png'},
    { valor: '5', nome: 'Cinco', imagem: 'src/Ouros/5.png'},
    { valor: '6', nome: 'Seis', imagem: 'src/Ouros/6.png'},
    { valor: '7', nome: 'Sete', imagem: 'src/Ouros/7.png'},
    { valor: '8', nome: 'Oito', imagem: 'src/Ouros/8.png'},
    { valor: '9', nome: 'Nove', imagem: 'src/Ouros/9.png'},
    { valor: '10', nome: 'Dez', imagem: 'src/Ouros/10.png'},
    { valor: 'J', nome: 'Valete', imagem: 'src/Ouros/J.png'},
    { valor: 'Q', nome: 'Dama', imagem: 'src/Ouros/Q.png'},
    { valor: 'K', nome: 'Rei', imagem: 'src/Ouros/k.png'}
];

function inicializarCartasUsuario(userId) {
    if (!cartasUsuariosOuros.has(userId)) {
        cartasUsuariosOuros.set(userId, [...cartasOuros]);
    }
}

function criarEmbed(carta, cartasRestantes) {
    const embed = new EmbedBuilder();

    switch(carta.valor) {
        case 'A':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - O INÍCIO');
            break;
        case '2':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - DUALIDADE');
            break;
        case '3':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - CRESCIMENTO');
            break;
        case '4':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - FUNDAÇÃO');
            break;
        case '5':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - MUDANÇA');
            break;
        case '6':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - HARMONIA');
            break;
        case '7':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - MISTÉRIO');
            break;
        case '8':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - PODER');
            break;
        case '9':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - NOVE');
            break;
        case '10':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - PLENITUDE');
            break;
        case 'J':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - O VALETE');
            break;
        case 'Q':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - A DAMA');
            break;
        case 'K':
            embed.setTitle('ASSIMILAÇÃO DE OUROS - O REI');
            break;
    }

    embed.setFooter({ text: `Restam ${cartasRestantes} cartas de Ouros` })
        .setImage(`attachment://${carta.imagem.split('/').pop()}`)
        .setColor(0xFFD700);

    switch(carta.valor) {
        case 'A':
            embed.addFields({ name: 'Poder Especial', value: '⚡ Início da Jornada' });
            break;
        case '2':
            embed.addFields({ name: 'Poder Especial', value: '🔄 Dualidade' });
            break;
        case '3':
            embed.addFields({ name: 'Poder Especial', value: '🌱 Crescimento' });
            break;
        case '4':
            embed.addFields({ name: 'Poder Especial', value: '🏰 Fundação' });
            break;
        case '5':
            embed.addFields({ name: 'Poder Especial', value: '🔄 Mudança' });
            break;
        case '6':
            embed.addFields({ name: 'Poder Especial', value: '☯️ Harmonia' });
            break;
        case '7':
            embed.addFields({ name: 'Poder Especial', value: '🔮 Mistério' });
            break;
        case '8':
            embed.addFields({ name: 'Poder Especial', value: '⚔️ Poder' });
            break;
        case '9':
            embed.addFields({ name: 'Poder Especial', value: '🎯 Precisão' });
            break;
        case '10':
            embed.addFields({ name: 'Poder Especial', value: '🌟 Plenitude' });
            break;
        case 'J':
            embed.addFields({ name: 'Poder Especial', value: '⚡ Energia Jovem' });
            break;
        case 'Q':
            embed.addFields({ name: 'Poder Especial', value: '👑 Sabedoria' });
            break;
        case 'K':
            embed.addFields({ name: 'Poder Especial', value: '👑 Supremacia' });
            break;
    }

    return embed;
}

function handleCards(message) {
    const userId = message.author.id;

    // Previne execução simultânea do mesmo usuário
    if (executandoComando.get(userId)) {
        return true;
    }

    if (message.content.toLowerCase().startsWith('a.oreset')) {
        cartasUsuariosOuros.set(userId, [...cartasOuros]);
        message.reply('Suas cartas de Ouros foram restauradas! Você tem 13 cartas novamente.');
        return true;
    }

    if (!message.content.toLowerCase().startsWith('a.o')) return false;

    executandoComando.set(userId, true);
    
    try {
        inicializarCartasUsuario(userId);

        const cartasDisponiveis = cartasUsuariosOuros.get(userId);

        if (cartasDisponiveis.length === 0) {
            const embed = new EmbedBuilder()
                .setTitle('ASSIMILAÇÃO DE OUROS - Sem Cartas')
                .setDescription('Você não tem mais cartas disponíveis!\nUse a.oreset para restaurar suas cartas.')
                .setImage('attachment://azul.png')
                .setColor(0xFFD700);

            message.channel.send({ 
                embeds: [embed],
                files: ['src/Versos/azul.png']
            }).finally(() => {
                executandoComando.delete(userId);
            });
            return true;
        }

        const indexAleatorio = Math.floor(Math.random() * cartasDisponiveis.length);
        const cartaSorteada = cartasDisponiveis[indexAleatorio];

        cartasDisponiveis.splice(indexAleatorio, 1);

        const embed = criarEmbed(cartaSorteada, cartasDisponiveis.length);

        message.channel.send({ 
            embeds: [embed],
            files: [cartaSorteada.imagem]
        }).finally(() => {
            executandoComando.delete(userId);
        });

    } catch (error) {
        console.error('Erro no comando ouros:', error);
        executandoComando.delete(userId);
    }

    return true;
}

module.exports = { handleCards };
