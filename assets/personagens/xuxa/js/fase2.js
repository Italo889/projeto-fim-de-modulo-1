function respostaCerta(){
    document.write(
        `<div class="intro-fase">
            <h1>Xuxa Maravilha</h1>
            <h2>Novo nivel</h2>
            <h3></h3>
            <h3>Avançamos na investigação e agora a Xuxa já tem noção de onde possa ser o criminoso.</h3>
            <div class="perguntas">
                <h3>1 - Contimuar investigando para tentar achar o culpado</h3>
                <h3>2 - Gravar um clipe</h3>
            </div>    
        </div>
        <div>
            <h2><a href="./fase3.html"><span>Faça sua escolha</span></a></h2>
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
    var mensagem = "1 - Investigar e tentar achar o culpado \n 2 - Ir se apresentar em algum programa"
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
