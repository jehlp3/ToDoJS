//seleção de elemtnso
const todoForm = document.querySelector("#todo-form");//shit+alt+seta p baixo p criar vários
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-list");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//funções
const saveTodo = (text) => {
    const todo=document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild
}

//eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
   // console.log("Enviou form")
   //adicionou a tarefa

   const inputValue = todoInput.value; //nome da tarefa

   if(inputValue){
    //console.log(inputValue);
    saveTodo(inputValue)
   }
}


)