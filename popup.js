chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: detectQuality
    }, (results) => {

        const qualityBox = document.getElementById("quality-box");

        if (results && results[0] && results[0].result) {
            qualityBox.innerText = "Video Quality: " + results[0].result;
        } else {
            qualityBox.innerText = "No video detected";
        }

    });

});

function detectQuality() {

    const video = document.querySelector("video");

    if (!video) {
        return null;
    }

    const height = video.videoHeight;

    if (!height) {
        return "Detecting...";
    }

    return height + "p";
}
