let quotes = [
    "Stay one step ahead.",
    "Small progress is still progress.",
    "Never quit learning.",
    "Focus beats talent.",
    "You are stronger than you think."
];

function newQuote(){
    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText = quotes[random];
}

function addTask(){
    let task = document.getElementById("taskInput").value;

    let li = document.createElement("li"); li.innerText = task;


document.getElementById("taskList").appendChild(li);
}