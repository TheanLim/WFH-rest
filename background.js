let countdownTime;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'START'){        
        $.ajax({
            url: chrome.extension.getURL("restTime.html"),
            dataType: "html",
            success: sendResponse
        });
        alert("came in");

        // countdownTime = setInterval(() => {
        //     alert("ring");
        // }, request.timer);
    }else if (request.cmd === 'STOP'){
        clearInterval(countdownTime);
    }
});