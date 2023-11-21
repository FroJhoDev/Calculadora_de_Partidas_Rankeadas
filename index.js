let saldoDeRankeadas = (vitorias, derrotas) => vitorias - derrotas;
let mensagemResultado = (saldoVitorias, nivel) => `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;

function mostraResultado(saldo) {

    if (saldo <= 10) {
        console.log(mensagemResultado(saldo, 'Ferro'));
    } else if (saldo >= 11 && saldo <= 20) {
        console.log(mensagemResultado(saldo,'Bronze'));
    } else if (saldo >= 21 && saldo <= 50) {
        console.log(mensagemResultado(saldo, 'Prata'));
    } else if (saldo >= 51 && saldo <= 80) {
        console.log(mensagemResultado(saldo, 'Ouro'));
    } else if (saldo >= 81 && saldo <= 90) {
        console.log(mensagemResultado(saldo, 'Diamante'));
    } else if (saldo >= 91 && saldo <= 100) {
        console.log(mensagemResultado(saldo, 'Lendário'));
    } else {
        console.log(mensagemResultado(saldo, 'Imortal'));
    }

}

mostraResultado(saldoDeRankeadas(50, 40));