console.log("WFH-Rest Content Running");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
    console.log(message.txt);
    if(message.txt === "purplefy"){
        let paragraphs = document.getElementsByTagName('p')
        for (elt of paragraphs){
            elt.style['background-color'] = '#FF00FF'
        }
    }
}