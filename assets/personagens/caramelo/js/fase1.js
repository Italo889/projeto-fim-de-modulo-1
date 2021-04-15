function respostaCerta(){
    document.write(
        `<div>
            <h1>Doguito Caramelo</h1>
            <h2>Doguito resolve ciberfarejar os suspeitos</h2>
            <h3>Ele investiga os rastros e descobre algo sobre um dos suspeitos</h3>
            <h3>O que nosso doguinho vai fazer.</h3>
            <div class="perguntas">
                <h3>1 - Esperar ele continuar recrutando</h3>
                <h3>2 - Invadir o pc do criminoso</h3>
            </div>    
        </div>
        <div>
            <h2><a href="./fase2.html"><span>Faça sua escolha</span></a></h2>
        </div>`
    )
}

function respostaErrada(){
    document.write(
        `
        <div>
        <h1>Fim de Jogo</h1>
        <h2>Infelizmente a escolha foi errada</h2>
        <h3>Ele juntou muitos seguidores e ficou dificil conseguir achar o principal responsável</h3>
        </div>
        <a href="../../../index.html">Voltar ao Inicio</a>
        `
    )
}

function resposta(){
    var mensagem = "Digite 1 - Investigar \nDigite 2 - Ignorar"
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