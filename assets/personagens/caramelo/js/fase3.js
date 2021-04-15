function respostaCerta(){
    document.write(
        `<div>
            <h1>Doguito Caramelo</h1>
            <h2>Conseguiu avançar para a fase final</h2>
            <h3>Doguito descobriu que a identidade do lider é Dr. Hulk e tem 2 opções</h3>
            <h3>O que fazer dessa vez ?</h3>
            <div class="perguntas">
                <h3>1 - Denunciar e acabar o plano do vilão</h3>
                <h3>2 - Lamber e brincar de bolinha </h3>
            </div>    
        </div>
        <div>
            <h2><a href="./parabens.html"><span>Faça sua escolha</span></a></h2>
        </div>`
    )
}

function respostaErrada(){
    document.write(
        `
        <div>
        <h1>Fim de Jogo</h1>
        <h2>Infelizmente a escolha foi errada</h2>
        </div>
        <a href="../../../index.html">Voltar ao Inicio</a>
        `
    )
}

function resposta(){
    var mensagem = "Digite 1 - Denunciar imediatamente \nDigite 2 - Continuar investigando até achar o lider"
    var escolha = prompt(mensagem)
    var certo = "2"
 

if(escolha == 1 || escolha == 2){
    if(escolha == certo){
        respostaCerta()
    }else {
        respostaErrada()
    }
}    
}
resposta()