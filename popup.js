var timer = 5000;

function startCount(){
    chrome.runtime.sendMessage({cmd: 'START', timer: 5000});
}

function stopCount(){
    chrome.runtime.sendMessage({cmd: 'STOP'});
}

let startButton = document.getElementById("startbtn");
console.log("here");
startButton.onclick = startCount;

let stopButton = document.getElementById("stopbtn");
console.log("here");
stopButton.onclick = stopCount;