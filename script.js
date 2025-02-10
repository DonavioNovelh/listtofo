let input = document.querySelector(".input");
let pai = document.querySelector(".pai");
let add = document.querySelector(".adicionar");
let body = document.querySelector("body");
let titulo = "";
let tasks = document.querySelectorAll('.cont')
add.addEventListener("click", adicionar);
let divCont = "";
let divting = "";
let spanDelete = "";
let spanDone = "";
let h2 = "";
let tiu = "";
let deleteButton = document.querySelectorAll(".delete");
console.log(tasks[0])



function adicionar(e) {
  e.stopPropagation();
  //console.log(e.target+ '1223')
  if (input.value.length > 0) {
    titulo = input.value;
    h2 = document.createElement("h2");
    h2.textContent = titulo;

    //div com background cinza
    divCont = document.createElement("div");
    divCont.classList.add("cont");
    divCont.appendChild(h2);

    //div com botões delete e done
    divting = document.createElement("div");
    divting.classList.add("ting");
    divCont.appendChild(divting);

    spanDelete = document.createElement("span");
    spanDelete.classList.add("delete");
    spanDelete.textContent = "delete";
    divting.appendChild(spanDelete);
    /*
    spanDone = document.createElement("span");
    spanDone.classList.add("done");
    spanDone.textContent = "done";
    divting.appendChild(spanDone);
    */
    pai.appendChild(divCont);
    deleteButton = document.querySelectorAll(".delete");
    adicionarEventos();
    input.value = ''
  } else {
    alert("Ocorreu um erro ao tentar adicionar uma tarefa");
  }
}

function adicionarEventos() {
  deleteButton.forEach((el, id) => {
    el.addEventListener("click", deletarDivPaiPai);
  });
}
function deletarDivPaiPai(event) {
  event.stopPropagation();
  console.log("Cliquei no delete");
  console.log(event);
  console.log(event.target.parentElement.parentElement.remove());
  console.log('Tem tarefas')
  console.log(tasks.length)
}



function verificarTasks (){
if (tasks.length == 0) {
  let texto = document.createElement("p");
  pai.appendChild(texto);
  return true
}
return false
}

// butao delete

verificarTasks()
adicionarEventos()
 
