function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let selectEl = document.createElement("select");
  content.appendChild(selectEl);
  
  let pEl = document.createElement("p");
  content.appendChild(pEl);

  for (let colour of colours) {
    let optionEl = document.createElement("option");
    optionEl.value = colour;
    optionEl.innerText = colour;
    selectEl.appendChild(optionEl);
    selectEl.addEventListener("click", selectColours);
    
    function selectColours() {
      pEl.innerText = `You have selected: ${selectEl.value}`;
      pEl.style.color = selectEl.value;
    }
  }
  content.appendChild(selectElement);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
