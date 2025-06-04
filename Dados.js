const { EmbedBuilder } = require('discord.js');

function handleDiceRoll(message) {
    if (message.author.bot) return;

    const regex = /(\d{1,2})da(6|10|12)/gi;
    const matches = message.content.match(regex);

    if (matches) {
        const resultados = [];
        const todosEmojis = [];

        matches.forEach(match => {
            const [quantidadeStr, tipoDadoStr] = match.split('da');
            const quantidade = parseInt(quantidadeStr);
            const tipoDado = parseInt(tipoDadoStr);

            if (quantidade < 1 || quantidade > 20) {
                return message.reply("❌ Número de dados deve ser entre 1 e 20.");
            }

            const resultadoRolagem = [];

            for (let i = 0; i < quantidade; i++) {
                const numero = Math.floor(Math.random() * tipoDado) + 1;
                let emoji;

                if (tipoDado === 6) {
                    if (numero === 1 || numero === 2) {
                        emoji = '<:Nada:1347980504829268160>';
                    } else if (numero === 3) {
                        emoji = '<:Pressao:1347980440685772993>';
                    } else if (numero === 4 || numero === 5) {
                        emoji = '<:PA:1348323869332865185>';
                    } else if (numero === 6) {
                        emoji = '<:PA:1348323869332865185>';
                    }
                } else if (tipoDado === 10) {
                    if (numero === 1 || numero === 2) {
                        emoji = '<:10:1348679036355739731>';
                    } else if (numero === 3) {
                        emoji = '<:10P:1348679150730477629>';
                    } else if (numero === 4 || numero === 5) {
                        emoji = '<:10PA:1348681723562692702>';
                    } else if (numero === 6) {
                        emoji = '<:10S:1348679211262672906>';
                    } else if (numero === 7) {
                        emoji = '<:10SS:1348681821734310003>';
                    } else if (numero === 8) {
                        emoji = '<:10SA:1348681881604063324>';
                    } else if (numero === 9) {
                        emoji = '<:10SAP:1348682073816170639>';
                    } else if (numero === 10) {
                        emoji = '<:10SSP:1348682114484277319>';
                    }
                } else if (tipoDado === 12) {
                    if (numero === 1 || numero === 2) {
                        emoji = '<:12:1348698334126276661>';
                    } else if (numero === 3) {
                        emoji = '<:12P:1348698367428919327>';
                    } else if (numero === 4 || numero === 5) {
                        emoji = '<:12PA:1348698430360391751>';
                    } else if (numero === 6) {
                        emoji = '<:12S:1348698391151902832>';
                    } else if (numero === 7) {
                        emoji = '<:12SS:1348698457178771618>';
                    } else if (numero === 8) {
                        emoji = '<:12SA:1348698503148474438>';
                    } else if (numero === 9) {
                        emoji = '<:12SAP:1348698541115052073>';
                    } else if (numero === 10) {
                        emoji = '<:12SSP:1348698568994852975>';
                    } else if (numero === 11) {
                        emoji = '<:12SAAP:1348698592201932900>';
                    } else if (numero === 12) {
                        emoji = '<:12PP:1348698612720205906>';
                    }
                }

                resultadoRolagem.push(emoji || `?(${numero})`);
                todosEmojis.push(emoji || '');
            }

            resultados.push(`${resultadoRolagem.join(' ')}`);
        });

        message.reply(resultados.join('\n')).then(() => {
            countAndSendResults(message, todosEmojis);
        });

        return true;
    }
    return false;
}

function countAndSendResults(message, todosEmojis) {
    let totalS = 0;
    let totalA = 0;
    let totalP = 0;

    todosEmojis.forEach(emoji => {
        if (emoji.includes('SSP')) {
            totalS += 2;
            totalP += 1;
        } else if (emoji.includes('SAP')) {
            totalS += 1;
            totalA += 1;
            totalP += 1;
        } else if (emoji.includes('SAAP')) {
            totalS += 1;
            totalA += 2;
            totalP += 1;
        } else if (emoji.includes('SS')) {
            totalS += 2;
        } else if (emoji.includes('S')) {
            totalS += 1;
        }

        if (emoji.includes('PP')) {
            totalP += 2;
        } else if (emoji.includes('PA')) {
            totalP += 1;
            totalA += 1;
        } else if (emoji.includes('P') && !emoji.includes('SSP') && !emoji.includes('SAP') && !emoji.includes('SAAP') && !emoji.includes('PA')) {
            totalP += 1;
        }

        if (emoji.includes('SA') && !emoji.includes('SAP') && !emoji.includes('SAAP')) {
            totalS += 1;
            totalA += 1;
        }

        if (emoji.includes('A') && !emoji.includes('PA') && !emoji.includes('SA') && !emoji.includes('SAP') && !emoji.includes('SAAP')) {
            totalA += 1;
        }
    });

    message.channel.send(`<:0_:1349702526189961227>: ${totalS}  | <:2_:1349702910208114688>: ${totalA} | <:1_:1349702857619804171>: ${totalP}`);
}

module.exports = { handleDiceRoll };
