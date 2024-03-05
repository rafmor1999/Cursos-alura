let desafio = document.querySelector('h1');
desafio.innerHTML ='Hora do desafio';


function verificarBotao(){
    console.log('O botâo foi clicado');
}
function exibirAlerta() {
    alert('Eu amo Js')
}
function cidadeBrasil() {
    let cidade = prompt('Escolha uma cidade do brasil:');
    alert (`Estive em ${cidade} e lembrei de você!`);
}
function somaNumero() {
    let n1 = parseInt(prompt('Escolha o primeiro número:'));
    let n2 = parseInt(prompt('Escolha o segundo número:'));
    let soma = n1 + n2;
    alert (`A soma dos números é ${soma}`);
    
}
