let countdownTime;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'START'){
        countdownTime = setInterval(() => {
            chrome.notifications.create('reminder', {
                title: 'Ring ring',
                message: 'Time for break',
                iconUrl: "temp.png",
                type: 'basic'
              });
        }, request.timer);
    }else if (request.cmd === 'STOP'){
        clearInterval(countdownTime);
    }
});