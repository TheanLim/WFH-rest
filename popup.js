function triggerStartStop(){
    var temp=document.getElementById("testing");
    temp.innerHTML="lol"
}

let startButton = document.getElementById("startbtn");
console.log("here");
startButton.onclick = triggerStartStop;