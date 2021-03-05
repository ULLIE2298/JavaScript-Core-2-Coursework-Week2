function todoList(todos) {
  // Write your code here...
  todos.forEach((todo) => {
    let content = document.querySelector("#content")
    let ulEl = document.createElement("ul");
    content.appendChild(ulEl);

    let liEl = document.createElement("li");
    liEl.innerText = todo.todo;
    ulEl.appendChild(liEl);

    liEl.addEventListener("click", strike);
    function strike(){
      if(liEl.style.textDecoration === "line-through"){
        liEl.style.textDecoration = "initial";
      } else {
      liEl.style.textDecoration = "line-through";
    }
  }
});
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);