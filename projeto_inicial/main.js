import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

    const criarTarefa = (evento) => {
        evento.preventDefault(); 

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]'); 
        const valor = input.value;


        const tarefa = document.createElement('li'); //criando um elemento li (ja que apaguei do html)
        tarefa.classList.add('task'); 
        const conteudo = `<p class="content">${valor}</p>` //interpolar html com js

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());

        lista.appendChild(tarefa);

        input.value = " "; 
    }

    const novaTarefa = document.querySelector('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa); 
