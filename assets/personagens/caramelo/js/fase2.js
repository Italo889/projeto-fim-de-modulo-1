function respostaCerta(){
    document.write(
        `<div>
            <h1>Doguito Caramelo</h1>
            <h2>Conseguiu avançar para a próxima fase.</h2>
            <h3>O doguito já conseguiu informações que podem comprometer o grupo</h3>
            <h3>Qual será o próximo passo ?</h3>
            <div class="perguntas">
                <h3>1 - Denunciar imediatamente</h3>
                <h3>2 - Continuar investigando até achar o lider</h3>
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
        <h2>Infelizmente a escolha foi errada</h2>
        </div>
        <a href="../../../index.html">Voltar ao Inicio</a>
        `
    )
}

function resposta(){
    var mensagem = "Digite 1 - Esperar ele continuar recrutando \nDigite 2 - Invadir o pc do criminoso"
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