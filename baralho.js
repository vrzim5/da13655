
const { EmbedBuilder } = require('discord.js');

const cartasUsuarios = new Map();
const executandoComando = new Map();

const cartas = [
    // Paus (P)
    { valor: 'A', naipe: 'Paus', nome: 'Ás de Paus', imagem: 'src/Cartas/AP.png'},
    { valor: '2', naipe: 'Paus', nome: '2 de Paus', imagem: 'src/Cartas/2p.png'},
    { valor: '3', naipe: 'Paus', nome: '3 de Paus', imagem: 'src/Cartas/3p.png'},
    { valor: '4', naipe: 'Paus', nome: '4 de Paus', imagem: 'src/Cartas/4p.png'},
    { valor: '5', naipe: 'Paus', nome: '5 de Paus', imagem: 'src/Cartas/5p.png'},
    { valor: '6', naipe: 'Paus', nome: '6 de Paus', imagem: 'src/Cartas/6p.png'},
    { valor: '7', naipe: 'Paus', nome: '7 de Paus', imagem: 'src/Cartas/7p.png'},
    { valor: '8', naipe: 'Paus', nome: '8 de Paus', imagem: 'src/Cartas/8p.png'},
    { valor: '9', naipe: 'Paus', nome: '9 de Paus', imagem: 'src/Cartas/9p.png'},
    { valor: '10', naipe: 'Paus', nome: '10 de Paus', imagem: 'src/Cartas/10p.png'},
    { valor: 'J', naipe: 'Paus', nome: 'Valete de Paus', imagem: 'src/Cartas/JP.png'},
    { valor: 'Q', naipe: 'Paus', nome: 'Dama de Paus', imagem: 'src/Cartas/QP.png'},
    { valor: 'K', naipe: 'Paus', nome: 'Rei de Paus', imagem: 'src/Cartas/KP.png'},
    
    // Ouros (O)
    { valor: 'A', naipe: 'Ouros', nome: 'Ás de Ouros', imagem: 'src/Cartas/AO.png'},
    { valor: '2', naipe: 'Ouros', nome: '2 de Ouros', imagem: 'src/Cartas/2o.png'},
    { valor: '3', naipe: 'Ouros', nome: '3 de Ouros', imagem: 'src/Cartas/3o.png'},
    { valor: '4', naipe: 'Ouros', nome: '4 de Ouros', imagem: 'src/Cartas/4o.png'},
    { valor: '5', naipe: 'Ouros', nome: '5 de Ouros', imagem: 'src/Cartas/5o.png'},
    { valor: '6', naipe: 'Ouros', nome: '6 de Ouros', imagem: 'src/Cartas/6o.png'},
    { valor: '7', naipe: 'Ouros', nome: '7 de Ouros', imagem: 'src/Cartas/7o.png'},
    { valor: '8', naipe: 'Ouros', nome: '8 de Ouros', imagem: 'src/Cartas/8o.png'},
    { valor: '9', naipe: 'Ouros', nome: '9 de Ouros', imagem: 'src/Cartas/9o.png'},
    { valor: '10', naipe: 'Ouros', nome: '10 de Ouros', imagem: 'src/Cartas/10o.png'},
    { valor: 'J', naipe: 'Ouros', nome: 'Valete de Ouros', imagem: 'src/Cartas/JO.png'},
    { valor: 'Q', naipe: 'Ouros', nome: 'Dama de Ouros', imagem: 'src/Cartas/QO.png'},
    { valor: 'K', naipe: 'Ouros', nome: 'Rei de Ouros', imagem: 'src/Cartas/KO.png'},
    
    // Espadas (E)
    { valor: 'A', naipe: 'Espadas', nome: 'Ás de Espadas', imagem: 'src/Cartas/AE.png'},
    { valor: '2', naipe: 'Espadas', nome: '2 de Espadas', imagem: 'src/Cartas/2e.png'},
    { valor: '3', naipe: 'Espadas', nome: '3 de Espadas', imagem: 'src/Cartas/3e.png'},
    { valor: '4', naipe: 'Espadas', nome: '4 de Espadas', imagem: 'src/Cartas/4e.png'},
    { valor: '5', naipe: 'Espadas', nome: '5 de Espadas', imagem: 'src/Cartas/5e.png'},
    { valor: '6', naipe: 'Espadas', nome: '6 de Espadas', imagem: 'src/Cartas/6e.png'},
    { valor: '7', naipe: 'Espadas', nome: '7 de Espadas', imagem: 'src/Cartas/7e.png'},
    { valor: '8', naipe: 'Espadas', nome: '8 de Espadas', imagem: 'src/Cartas/8e.png'},
    { valor: '9', naipe: 'Espadas', nome: '9 de Espadas', imagem: 'src/Cartas/9e.png'},
    { valor: '10', naipe: 'Espadas', nome: '10 de Espadas', imagem: 'src/Cartas/10e.png'},
    { valor: 'J', naipe: 'Espadas', nome: 'Valete de Espadas', imagem: 'src/Cartas/JE.png'},
    { valor: 'Q', naipe: 'Espadas', nome: 'Dama de Espadas', imagem: 'src/Cartas/QE.png'},
    { valor: 'K', naipe: 'Espadas', nome: 'Rei de Espadas', imagem: 'src/Cartas/KE.png'},
    
    // Copas (C)
    { valor: 'A', naipe: 'Copas', nome: 'Ás de Copas', imagem: 'src/Cartas/AC.png'},
    { valor: '2', naipe: 'Copas', nome: '2 de Copas', imagem: 'src/Cartas/2c.png'},
    { valor: '3', naipe: 'Copas', nome: '3 de Copas', imagem: 'src/Cartas/3c.png'},
    { valor: '4', naipe: 'Copas', nome: '4 de Copas', imagem: 'src/Cartas/4c.png'},
    { valor: '5', naipe: 'Copas', nome: '5 de Copas', imagem: 'src/Cartas/5c.png'},
    { valor: '6', naipe: 'Copas', nome: '6 de Copas', imagem: 'src/Cartas/6c.png'},
    { valor: '7', naipe: 'Copas', nome: '7 de Copas', imagem: 'src/Cartas/7c.png'},
    { valor: '8', naipe: 'Copas', nome: '8 de Copas', imagem: 'src/Cartas/8c.png'},
    { valor: '9', naipe: 'Copas', nome: '9 de Copas', imagem: 'src/Cartas/9c.png'},
    { valor: '10', naipe: 'Copas', nome: '10 de Copas', imagem: 'src/Cartas/10c.png'},
    { valor: 'J', naipe: 'Copas', nome: 'Valete de Copas', imagem: 'src/Cartas/JC.png'},
    { valor: 'Q', naipe: 'Copas', nome: 'Dama de Copas', imagem: 'src/Cartas/QC.png'},
    { valor: 'K', naipe: 'Copas', nome: 'Rei de Copas', imagem: 'src/Cartas/KC.png'}
];

function inicializarCartasUsuario(userId) {
    if (!cartasUsuarios.has(userId)) {
        cartasUsuarios.set(userId, [...cartas]);
    }
}

function criarEmbed(carta, cartasRestantes) {
    const embed = new EmbedBuilder()
        .setTitle(carta.nome.toUpperCase())
        .setFooter({ text: `Restam ${cartasRestantes} cartas no baralho` })
        .setImage(`attachment://${carta.imagem.split('/').pop()}`)
        .setColor(0xffffff);

    return embed;
}

function handleCards(message) {
    const userId = message.author.id;

    // Previne execução simultânea do mesmo usuário
    if (executandoComando.get(userId)) {
        return true;
    }

    if (message.content.toLowerCase().startsWith('a.breset')) {
        cartasUsuarios.set(userId, [...cartas]);
        message.reply('Seu baralho foi restaurado! Você tem 52 cartas novamente.');
        return true;
    }

    if (!message.content.toLowerCase().startsWith('a.b')) return false;

    executandoComando.set(userId, true);
    
    try {
        inicializarCartasUsuario(userId);

        const cartasDisponiveis = cartasUsuarios.get(userId);

        if (cartasDisponiveis.length === 0) {
            const embed = new EmbedBuilder()
                .setTitle('BARALHO - Sem Cartas')
                .setDescription('Você não tem mais cartas disponíveis!\nUse a.breset para restaurar seu baralho.')
                .setImage('attachment://vermelho.png')
                .setColor(0x0099FF);

            message.channel.send({ 
                embeds: [embed],
                files: ['src/Versos/vermelho.png']
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
        console.error('Erro no comando baralho:', error);
        executandoComando.delete(userId);
    }

    return true;
}

module.exports = { handleCards };
