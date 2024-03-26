let listaDeNuemroSorteados = [];
let numeroLimiti = 10;
let NumeroScreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do Número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
    
    
 function verificarChute() {
       let chute = document.querySelector('input').value;
     console.log(chute == NumeroScreto);

     if (chute == NumeroScreto){
exibirTextoNaTela('h1', 'Acertou!');
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentaviva';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
exibirTextoNaTela('p',mensagemTentativa);
document.getElementById('reiniciar').removeAttribute('disabled')
} else{
    if (chute > NumeroScreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
        exibirTextoNaTela('p','O número secreto é maior');
    } tentativas++;
    limparCampo();
}

 }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiti + 1);
    let quantidadeDeNumerosEscolhidos = listaDeNuemroSorteados.length;

if (quantidadeDeNumerosEscolhidos == numeroLimiti ){
    listaDeNuemroSorteados = [];
}
     if (listaDeNuemroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
} else{
    listaDeNuemroSorteados.push(numeroEscolhido);
    console.log (listaDeNuemroSorteados)
    return numeroEscolhido;
}
   

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
    function novoJogo() {
        NumeroScreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }