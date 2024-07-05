function sortear() {
    let quantidade = document.getElementById("quantidade").value;
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//"btn-sortear"

var sorteio = Boolean;

if (condition) {
    
} else {
    
}

function alterarStatusBotao() {
    let botao1 = document.getElementById("btn-reiniciar");
    let botao2 = document.getElementById("btn-sortear");
    if (botao1.classList.contains("container__botao-desabilitado") && botao2.classList.contains("container__botao")) {
        botao1.classList.remove("container__botao-desabilitado");
        botao2.classList.remove("container__botao");
        botao1.classList.add("container__botao");
        botao2.classList.add("container__botao-desabilitado");
    } else {
        botao1.classList.remove("container__botao");
        botao2.classList.add("container__botao");
        botao1.classList.add("container__botao-desabilitado");
        botao2.classList.remove("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = " ";
    document.getElementById("de").value = " ";
    document.getElementById("ate").value = " ";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}