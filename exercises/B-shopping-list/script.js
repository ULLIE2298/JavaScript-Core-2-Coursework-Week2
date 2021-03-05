function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  
  for (let items of arrayOfPeople) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText = items;
    ul.appendChild(li);
    content.appendChild(ul);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
