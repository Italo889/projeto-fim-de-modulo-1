function respostaCerta(){
    document.write(
        `<div class="intro-fase">
            <h1>Xuxa Maravilha</h1>
            <h2>Contamos com a sua ajuda</h2>
            <h3>Xuxa consegue depois de investigar a fundo</h3>
            <h3>Agora que ela sabe o nome do culpado o que deseja fazer ?/h3>
            <div class="perguntas">
                <h3>1 - Denunciar a policia</h3>
                <h3>2 - Chamar ele de baixinho</h3>
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
        <h2>Infelizmente você perdeu</h2>
        </div>
        <a href="../../../index.html">Voltar ao Inicio</a>
        `
    )
}

function resposta(){
    var mensagem = "1 - Continuar investigando para tentar achar o culpado \n 2 - Gravar um clipe"
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
