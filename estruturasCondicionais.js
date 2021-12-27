var jogador1 = 0;
var jogador2 = 0;
var placar;


if (jogador1 ) {
    placar = jogador1 > jogador2;
    console.log('Jogador 1 marcou ponto');  
} else if (jogador2) {
    placar = jogador2 > jogador1;
    console.log('Jogador 2 marcou ponto');    
} else {
    console.log('Ninguém marcou ponto');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 venceu');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 venceu');
        break;
    default:
        console.log('Ninguém venceu');
}


//  Laços de repetição
    // São estruturas condicionais que repetem uma instrução até atingir uma determinada condição.

    /**
     * 
     * For
     * For / in
     *  For / of
     *  While
     * do / while
     */