function respostaCerta(){
    document.write(
        `<div class="intro-fase">
        <h1>Super Tunado Rossi</h1>
        <h2>Descobrimos o culpado!</h2>
        <h3>O Dr. Hulk está tentando se beneficiar nas eleições com os dados e temos que detê-lo</h3>
        <h3>O que faremos a seguir?</h3>
        <div class="perguntas">
            <h3>1 - Ir sozinho derrotar o inimigo</h3>
            <h3>2 - Chamar a galera da academia para enfrentar o inimigo</h3>
        </div>    
    </div>
    <div>
        <h2 class="botao-padre"><a href="./fase3.html"><span>Faça sua escolha</span></a></h2>
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
    var mensagem = "1 - Ir pra academia buscar o trapézio descendente \n 2 - Investigar e tentar achar o culpado"
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