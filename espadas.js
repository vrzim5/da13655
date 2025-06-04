
const { EmbedBuilder } = require('discord.js');

const cartasUsuariosEspadas = new Map();
const executandoComando = new Map();

const cartasEspadas = [
    { valor: 'A', nome: 'Ás', imagem: 'src/Espadas/A.png'},
    { valor: '2', nome: 'Dois', imagem: 'src/Espadas/2.png'},
    { valor: '3', nome: 'Três', imagem: 'src/Espadas/3.png'},
    { valor: '4', nome: 'Quatro', imagem: 'src/Espadas/4.png'},
    { valor: '5', nome: 'Cinco', imagem: 'src/Espadas/5.png'},
    { valor: '6', nome: 'Seis', imagem: 'src/Espadas/6.png'},
    { valor: '7', nome: 'Sete', imagem: 'src/Espadas/7.png'},
    { valor: '8', nome: 'Oito', imagem: 'src/Espadas/8.png'},
    { valor: '9', nome: 'Nove', imagem: 'src/Espadas/9.png'},
    { valor: '10', nome: 'Dez', imagem: 'src/Espadas/10.png'},
    { valor: 'J', nome: 'Valete', imagem: 'src/Espadas/J.png'},
    { valor: 'Q', nome: 'Dama', imagem: 'src/Espadas/Q.png'},
    { valor: 'K', nome: 'Rei', imagem: 'src/Espadas/K.png'}
];

function inicializarCartasUsuario(userId) {
    if (!cartasUsuariosEspadas.has(userId)) {
        cartasUsuariosEspadas.set(userId, [...cartasEspadas]);
    }
}

function criarEmbed(carta, cartasRestantes) {
    const embed = new EmbedBuilder();

    switch(carta.valor) {
        case 'A':
            embed.setTitle('ASSIMILAÇÃO INSTÁVEL - ÁS DE ESPADAS');
            break;
        case '2':
            embed.setTitle('ASSIMILAÇÃO INSEGURA - 2 DE ESPADAS');
            break;
        case '3':
            embed.setTitle('ASSIMILAÇÃO DESORDENADA - 3 DE ESPADAS');
            break;
        case '4':
            embed.setTitle('ASSIMILAÇÃO INQUIETA - 4 DE ESPADAS');
            break;
        case '5':
            embed.setTitle('ASSIMILAÇÃO DESGASTADA - 5 DE ESPADAS');
            break;
        case '6':
            embed.setTitle('ASSIMILAÇÃO HEDIONDA - 6 DE ESPADAS');
            break;
        case '7':
            embed.setTitle('ASSIMILAÇÃO SENSÍVEL - 7 DE ESPADAS');
            break;
        case '8':
            embed.setTitle('ASSIMILAÇÃO DESFOCADA - 8 DE ESPADAS');
            break;
        case '9':
            embed.setTitle('ASSIMILAÇÃO CALCIFICADA - 9 DE ESPADAS');
            break;
        case '10':
            embed.setTitle('ASSIMILAÇÃO INVOLUNTÁRIA - 10 DE ESPADAS');
            break;
        case 'J':
            embed.setTitle('ASSIMILAÇÃO SUDORÍPARA - VALETE DE ESPADAS');
            break;
        case 'Q':
            embed.setTitle('ASSIMILAÇÃO ATROFIADA - DAMA DE ESPADAS');
            break;
        case 'K':
            embed.setTitle('ASSIMILAÇÃO CORROÍDA - REI DE ESPADAS');
            break;
    }

    embed.setFooter({ text: `Restam ${cartasRestantes} cartas de Espadas` })
        .setImage(`attachment://${carta.imagem.split('/').pop()}`)
        .setColor(0x000000);

switch(carta.valor) {
    case 'A':
        embed.setDescription(`<:1_:1349702857619804171>: -1 em um Instinto que não seja 1.

<:1_:1349702857619804171><:1_:1349702857619804171>: Má formação das pernas causa mobilidade reduzida e remove o primeiro sucesso investido em Fuga.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Hipersensibilidade à luz do Sol.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>:Perda de olfato e paladar.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Baixa tolerância à dor: caso sofra dano à Saúde proveniente de qualquer fonte, sofrerá um a mais e perderá um ponto de Determinação.`);
        break;
    case '2':
        embed.setDescription(`<:1_:1349702857619804171>: -1 em um Instinto que não seja 1.

<:1_:1349702857619804171><:1_:1349702857619804171>: Atrofia o órgão responsável por um dos sentidos, exigindo <:0_:1349702526189961227> ou <:2_:1349702910208114688> extra em ativações ligadas a ele.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Mãos trêmulas exigem um <:0_:1349702526189961227> ou <:2_:1349702910208114688> extra para Conhecimento Artístico, Ofícios ou ataques com armas de pontaria.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Entra em pânico e não consegue nadar em qualquer corpo d’ água.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Desenvolve alguma alergia grave e incapacitante, ao ter contato com o objeto da alergia o Infectado perde a próxima ação.`);
        break;
    case '3':
        embed.setDescription(`<:1_:1349702857619804171>: -1 em um Instinto que não seja 1.

<:1_:1349702857619804171><:1_:1349702857619804171>: Desenvolve um membro extra (perna ou braço) que não funciona, aumentando o número <:0_:1349702526189961227> de necessários para ativações em Conflitos de cunho social em 1 para todo o grupo.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Rim defeituoso adicional é desenvolvido erroneamente pelo corpo, atrapalhando as funções do rim original. Sempre que sofrer escassez de água deverá rolar um dado por ponto de Resolução e se não obtiver nenhum <:0_:1349702526189961227> sofrerá perda de Determinação no início e no fim de cada fase de jogo até que encontre algum remédio para dor ou passe por uma Recuperação.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Entra em pânico quando submerso e não consegue nadar.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Desenvolve alergia grave e incapacitante. Ao ter contato com o objeto da alergia o Infectado perde a próxima ação.`);
        break;
    case '4':
        embed.setDescription(`<:1_:1349702857619804171>: Insônia e pesadelos constantes exigem rolagem de um dado por ponto de Resolução, não obtido nenhum <:0_:1349702526189961227> sofrerá perda de ponto Determinação.

<:1_:1349702857619804171><:1_:1349702857619804171>: Sempre que passar pelo processo de Assimilação o Infectado rolará 1d6 adicional.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Consome 50% a mais de suprimentos por hiperatividade física.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: O Infectado ouve a própria voz representando os desejos do parasita em sua cabeça sempre que ativa rolagem assimilada, perdendo 2 pontos de Determinação além do custo de ativação normal.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Adiciona 2 <:1_:1349702857619804171> em suas rolagens de mutação.`);
        break;
    case '5':
        embed.setDescription(`<:1_:1349702857619804171>: Sempre que dormir em cama inadequada sofrerá um de dano à Saúde e um de dano à Determinação.

<:1_:1349702857619804171><:1_:1349702857619804171>: Sofre efeitos similares à artrite reumatoide, causando frequentes dores nas juntas. Ativações e testes de Práticas Esportivas precisam de um <:0_:1349702526189961227> ou <:2_:1349702910208114688> adicional.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Não consegue utilizar ferramentas, exceto as que tenham a qualidade “acessível”.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Não pode recuperar mais de um ponto de Saúde em uma única Fase de Recuperação.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Perde a capacidade de locomoção até que se submeta a cirurgia ou gaste um ponto de Assimilação para ignorar este efeito por uma hora.`);
        break;
    case '6':
        embed.setDescription(`<:1_:1349702857619804171>: Desenvolve um bico que, embora funcional para extrair insetos do solo, gera uma penalidade em rolagens da aptidão Social que impede o uso <:2_:1349702910208114688> de para reduzir <:0_:1349702526189961227>.

<:1_:1349702857619804171><:1_:1349702857619804171>: Seu metabolismo se transforma e opera de maneira única, exigindo uma <:2_:1349702910208114688> como custo extra de ativação para qualquer tratamento médico feito em você.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Não consegue utilizar ferramentas, exceto as que tenham a qualidade “acessível”.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Emite um odor criado para espantar predadores que ainda não se desenvolveu o bastante para este fim, mas já incomoda pessoas no ambiente. Não pode usar rolagens Assimiladas em Influência.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Sua aparência hedionda faz com que, subconscientemente ou não, qualquer pessoa tenha medo de te ajudar, dobrando os custos de ações adaptativas que visem o seu benefício.`);
        break;
    case '7':
        embed.setDescription(`<:1_:1349702857619804171>: Qualquer dano sofrido aplica a condição Ferido, ainda que não reduza um nível de Saúde.

<:1_:1349702857619804171><:1_:1349702857619804171>: Qualquer tratamento de saúde causa danos a você equivalente ao número de pressões da rolagem de Medicina.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Sente dor crônica que faz com que realizar qualquer atividade física por mais de 30 minutos, por mais simples que seja (até mesmo caminhar), drena um ponto de Determinação.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Recebe um ponto de dano a mais em qualquer dano físico sofrido.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Um destempero em seu sistema nervoso faz com que qualquer toque cause dor, drenando um ponto de Determinação.`);
        break;
    case '8':
        embed.setDescription(`<:1_:1349702857619804171>: Tem visão periférica reduzida, aumentando em <:0_:1349702526189961227> ou <:2_:1349702910208114688> a dificuldade de todos os testes de Percepção.

<:1_:1349702857619804171><:1_:1349702857619804171>: Sofre de penalidade de <:0_:1349702526189961227> em testes de Reação quando surpreendido.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Tem dificuldade em determinar profundidade com precisão, recebendo penalidade de <:0_:1349702526189961227> em testes de ataque à distância.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Quando em ambientes muito escuros ou com luz ofuscante, precisa gastar uma <:2_:1349702910208114688> ou <:0_:1349702526189961227> um extra para agir.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Acrescenta um <:1_:1349702857619804171> à face do primeiro dado de Percepção ou Reação mantido.`);
        break;
    case '9':
        embed.setDescription(`<:1_:1349702857619804171>: Suas ativações de potência custam uma <:2_:1349702910208114688> ou um <:0_:1349702526189961227> a mais.

<:1_:1349702857619804171><:1_:1349702857619804171>: Articulações enrijecidas adicionam <:1_:1349702857619804171> à face de de um dado mantido de Práticas Esportivas.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Sempre que perder um nível de saúde em dano concussivo sofrerá fratura, exigindo 5 sucessos acumulados de Medicina ao longo de uma semana.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Recebe dano dobrado de queda.

<:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171><:1_:1349702857619804171>: Qualquer tentativa de neutralizar a ameaça através de ataques físicos causa 1 ponto de dano a você.`);
        break;
    case '10':
        embed.setDescription(``);
        break;
    case 'J':
        embed.setDescription(``);
        break;
    case 'Q':
        embed.setDescription(``);
        break;
    case 'K':
        embed.setDescription(``);
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

    if (message.content.toLowerCase().startsWith('a.ereset')) {
        cartasUsuariosEspadas.set(userId, [...cartasEspadas]);
        message.reply('Suas cartas de Espadas foram restauradas! Você tem 13 cartas novamente.');
        return true;
    }

    if (!message.content.toLowerCase().startsWith('a.e')) return false;

    executandoComando.set(userId, true);
    
    try {
        inicializarCartasUsuario(userId);

        const cartasDisponiveis = cartasUsuariosEspadas.get(userId);

        if (cartasDisponiveis.length === 0) {
            const embed = new EmbedBuilder()
                .setTitle('ASSIMILAÇÃO DE ESPADAS - Sem Cartas')
                .setDescription('Você não tem mais cartas disponíveis!\nUse a.ereset para restaurar suas cartas.')
                .setImage('attachment://azul.png')
                .setColor(0x000000);

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
        console.error('Erro no comando espadas:', error);
        executandoComando.delete(userId);
    }

    return true;
}

module.exports = { handleCards };
