let taskName = document.getElementById("title");
let description = document.getElementById("description");
let assignee = document.getElementById("assignee");

function createElement() {
    let state = document.getElementById("state").value;
    const forText = document.createElement("article");
    const startTextSection = document.createElement("aside");
    const taskTitle = document.createElement("h1");
    const taskDescription = document.createElement("h3");
    const endText = document.createElement("p");
    document.getElementById(state).appendChild(forText);
    forText.appendChild(startTextSection);
    startTextSection.appendChild(taskTitle);
    startTextSection.appendChild(taskDescription);
    forText.appendChild(endText);
    taskTitle.innerHTML = taskName.value;
    taskDescription.innerHTML = description.value;
    endText.innerHTML = assignee.value;
}

function reset() {
    taskName.value = "";
    description.value = "";
    assignee.value = "";
}


function doit() {
    if (taskName.value != "" && description.value != "" && assignee.value != "") {
        createElement();
        reset();
    } else {
        window.alert('დაშვებულია შეცდომა, გთხოვთ შეავსოთ სრული ფორმა')
    }

}