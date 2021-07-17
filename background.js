console.log("WFH-Rest Background Running");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    //console.log(tab);
    let msg = {
        txt: "purplefy"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}