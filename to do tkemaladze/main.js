let taskName = document.getElementById("title");
let description = document.getElementById("description");
let assignee = document.getElementById("assignee");
let state = document.getElementById("state");
let toDoArea = document.getElementById("toDoArea");
let progressArea = document.getElementById("progressArea");
let testingArea = document.getElementById("testingArea");
let doneArea = document.getElementById("doneArea");

function createElement(optionValue) {
    const forText = document.createElement("article");
    const startTextSection = document.createElement("aside");
    const taskTitle = document.createElement("h1");
    const taskDescription = document.createElement("h3");
    const endText = document.createElement("p");
    optionValue.appendChild(forText);
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
    if (state.value === "To-do" && taskName.value != "" && description.value != "" && assignee.value != "") {
        createElement(toDoArea);
        reset();

    } else if (state.value === "progress" && taskName.value != "" && description.value != "" && assignee.value != "") {
        createElement(progressArea);
        reset();

    } else if (state.value === "testing" && taskName.value != "" && description.value != "" && assignee.value != "") {
        createElement(testingArea);
        reset();

    } else if (state.value === "done" && taskName.value != "" && description.value != "" && assignee.value != "") {
        createElement(doneArea);
        reset();

    } else {
        window.alert('დაშვებულია შეცდომა, გთხოვთ შეავსოთ სრული ფორმა')
    }

}