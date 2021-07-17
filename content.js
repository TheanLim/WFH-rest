console.log("WFH-Rest Content Running");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
    console.log(message.txt);
}