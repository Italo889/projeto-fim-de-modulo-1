function respostaCerta(){
    document.write(
        `<h1>Parabéns</h1>
        <h2>Você venceu</h2>   
    
        <h3><a href="../../../index.html">voltar ao inicio</a></h3>`
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
    var mensagem = "1 - Denunciar a policia \n 2 - Chamar ele de baixinho"
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
