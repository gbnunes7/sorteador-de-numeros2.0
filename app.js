// Funcão para sortear ao clicar o botão
function sortear() {
    let paragrafoNum = document.querySelector('#resultado');
    let qtdNumeros = parseInt(document.querySelector('#quantidade').value);
    let numInicial = parseInt(document.querySelector('#de').value);
    let numFinal = parseInt(document.querySelector('#ate').value);

    let numerosSorteados = [];
    let numeros;

    //Condicional para quantidade de numeros seja maior que o intervalo de números, para não dar loop infinito.
    if (qtdNumeros > (numFinal - numInicial + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        limpa()
        return;
    }

    if (numInicial < numFinal ) {

        for ( i = 0;i < qtdNumeros ; i++) {
            numeros = sorteio(numInicial, numFinal);
            
            while(numerosSorteados.includes(numeros)){
                numeros = sorteio(numInicial,numFinal);
            }
            numerosSorteados.push(numeros);   
        }
        paragrafoNum.classList.add('texto__paragrafo');
        paragrafoNum.textContent = `Números sorteados: ${numerosSorteados}`;
        alterarClasseReiniciar();    
    } else {
        alert("Erro, insira os dados corretamente.");
        limpa();
    }
}

function limpa() {
    let qtdNumeros = parseInt(document.querySelector('#quantidade').value = "");
    let numInicial = parseInt(document.querySelector('#de').value = "");
    let numFinal = parseInt(document.querySelector('#ate').value = "");
}

function reiniciar() {
    limpa();
    let paragrafoNum = document.querySelector('#resultado');
    
    paragrafoNum.classList.add('texto__paragrafo');
    paragrafoNum.innerHTML = `Números sorteados: nenhum até agora`; 
    alterarClasseReiniciar(); 
}

function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarClasseReiniciar()  {
    let botaoReiniciar = document.querySelector('#btn-reiniciar')
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}