const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target; //descobrindo qual elemento eu cliquei
    
    //subindo um nó
    const tarefaCompleta = botaoConclui.parentElement; //pegando o pai do elemento = evento
    tarefaCompleta.classList.toggle('done');//executar quando eu clicar = toggle
}

export default BotaoConclui; //para proteger o cod
