var timer = 5000;

function startCount(){
    // chrome.runtime.sendMessage({cmd: 'START', timer: 5000});

    const options = {
        type: "basic",
        iconUrl: "./temp.png",
        title: "Popup.js",
        message: "Hello from popup.js!"
    };

    chrome.notifications.create("", options, function(id){
        console.log('in noti');
    });
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