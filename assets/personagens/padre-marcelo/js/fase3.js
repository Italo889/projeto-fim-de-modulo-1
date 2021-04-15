function respostaCerta(){
    document.write(
        `<div>
            <h1>Mestre Marcelo</h1>
            <h2>Conseguimos acha-lo</h2>
            <h3>Após um intensa investigação o super tunado com os marombas conseguiram achar e deter o vilão</h3>
            <h3>Depois de denunciar com todas as provas escolhidas, o vilão foi preso e os dados estão seguros</h3>
            </div>    
        </div>
        <div>
            <h2><a href="./parabens.html"><span>Finalizar o game</span></a></h2>
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
    var mensagem = "1 - Ir sozinho derrotar o inimigo\n2 - Chamar a galera da academia para enfrentar o inimigo"
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