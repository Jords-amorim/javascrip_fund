function novaFuncao() {
    console.log('Passou aqui');
}

// novaFuncao();


// *************** Funções com parâmetros ********************
/**
 * As funções podem receber em sua declaração, parâmetros que são passados
 * para a função (servem como variáveis, onde sua atribuição é feita durante a chamada da função).
 */

// function recebeParam(parametro) {
//     console.log(parametro);
// }

// recebeParam('ValorDoParametro');
// recebeParam('Passar outro Valor');

// *************** Parâmetros rest ********************

function paramRest(valor1, ...rest) {
    console.log('valor1: ' + valor1);
    console.log('rest: ' + rest);
    console.log('rest índice 1: ' + rest[1]);
}

paramRest(2, 4, 6)
// Neste exemplo acima, rest irá coletar o segundo e terceiro argumento da função 
// O primeiro é mapeado para o valor1
