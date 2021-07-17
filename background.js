let countdownTime;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'START'){
        alert("came in");

        // countdownTime = setInterval(() => {
        //     chrome.notifications.create('reminder', {
        //         title: 'Ring ring',
        //         message: 'Time for break',
        //         iconUrl: "temp.png",
        //         type: 'basic'
        //       }, function(notificationId) {
        //           console.log("here");
        //           console.log(chrome.runtime.lastError);});
        //     alert('ring');
        // }, request.timer);
    }else if (request.cmd === 'STOP'){
        clearInterval(countdownTime);
    }
});