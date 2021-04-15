function respostaCerta(){
    document.write(
        `<div class="intro-fase">
        <h1>Super Tunado Rossi</h1>
        <h2>Contamos com a sua ajuda</h2>
        <h3>Iniciando nossa jornada qual decisão você tomará para procurar o culpado?</h3>
        <h3>Nosso herói tem que decidir o que fazer.</h3>
        <div class="perguntas">
            <h3>1 - Investigar e tentar achar o culpado</h3>
            <h3>2 - Ir pra academia buscar o trapézio descendente</h3>
        </div>    
    </div>
    <div>
        <h2 class="botao-padre"><a href="./fase2.html"><span>Faça sua escolha</span></a></h2>
    </div>`
    )
}

function respostaErrada(){
    document.write(
        `
        <div>
        <h1>Fim de Jogo</h1>
        <h2>Birrrrrl</h2>
        <h2>Infelizmente a escolha foi errada</h2>
        </div>
        <a href="../../../index.html">Voltar ao Inicio</a>
        `
    )
}

function resposta(){
    var mensagem = "Digite 1 - Fazer algo para ajudar a população \nDigite 2 - Ignorar o vilão e sair pra comprar whey"
    var escolha = prompt(mensagem)
    var certo = "1"
 

if(escolha == 1 || escolha == 2){
    if(escolha == certo){
        respostaCerta()
    }else {
        respostaErrada()
    }
}    
}
resposta()