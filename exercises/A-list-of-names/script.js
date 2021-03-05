function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (person of arrayOfPeople) {
    let h1Tag = document.createElement("h1");
    h1Tag.innerText = person.name;
    content.appendChild(h1Tag);

    let h2Tag = document.createElement("h2");
    h2Tag.innerText = person.job;
    content.appendChild(h2Tag);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
