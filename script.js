// script para modal de nova tarefa
const btnNovaTarefa = document.querySelector('.botaoNovaTarefa');
const btnCancelarNovaTarefa =document.querySelector('#cancelarNovaTarefa');
const btnConfirmarNovaTarefa = document.querySelector('#confirmarNovaTarefa');

//criar container da tarefa a ser inclusa

function abrirModalNovaTarefa(){
  const novaTarefa = document.querySelector('#modalNovaTarefa');
  novaTarefa.style.display = 'flex';
  const tituloTarefa = document.querySelector('#nomeTarefa')
  tituloTarefa.value = ""
}

function fecharModalNovaTarefa(){
  document.querySelector('form').onsubmit = (event) => event.preventDefault(); //evitando o evento padrão de form
  const novaTarefa = document.querySelector('#modalNovaTarefa');
  novaTarefa.style.display = 'none';
}

function incluirTarefa(){
  document.querySelector('form').onsubmit = (event) => event.preventDefault(); //evitando o evento padrão de form
  const nomeTarefa = document.querySelector('#nomeTarefa').value
  
  //criando as tags
  const tarefa =document.createElement('div')
  // const ok = document.createElement('img')//vai para função de  check depois
  const titulo =document.createElement('p')
  const comandos = document.createElement('div')
  const btnConcluir = document.createElement('button')
  // const btnDetalhes = document.createElement('button')
  const btnEditar = document.createElement('button')
  const btnExcluir = document.createElement('button')
  const imgConcluir = document.createElement('img')
  // const imgDetalhes = document.createElement('img')
  const imgEditar = document.createElement('img')
  const imgExcluir = document.createElement('img')

  //formatando as tags
  tarefa.setAttribute('class', 'tarefa')
  // ok.setAttribute('src', './images/checkedIcon.svg')
  comandos.setAttribute('class', 'comandos')
  imgConcluir.setAttribute('src', './images/checkIcon.svg')
  // imgDetalhes.setAttribute('src', './images/infoIcon.svg')
  imgEditar.setAttribute('src', './images/editIcon.svg')
  imgExcluir.setAttribute('src', './images/deleteIcon.svg')
  titulo.innerHTML = nomeTarefa
  


  //adicionando tags ao document
  // tarefa.append(ok)
  tarefa.append(titulo)
  tarefa.append(comandos)
  comandos.append(btnConcluir)
  // comandos.append(btnDetalhes)
  comandos.append(btnEditar)
  comandos.append(btnExcluir)
  btnConcluir.append(imgConcluir)
  // btnDetalhes.append(imgDetalhes)
  btnEditar.append(imgEditar)
  btnExcluir.append(imgExcluir)


  document.querySelector('.tarefas').append(tarefa)


  //fechar modal
  const novaTarefa = document.querySelector('#modalNovaTarefa')
  novaTarefa.style.display = 'none'
}

btnNovaTarefa.addEventListener('click', abrirModalNovaTarefa);
btnCancelarNovaTarefa.addEventListener('click', fecharModalNovaTarefa);
btnConfirmarNovaTarefa.addEventListener('click', incluirTarefa);