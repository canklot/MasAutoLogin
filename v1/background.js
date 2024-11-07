chrome.runtime.onInstalled.addListener(() => {
    // Set an alarm to trigger every 5 hours
    chrome.alarms.create("autoLoginAlarm", { delayInMinutes: 1, periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "autoLoginAlarm") {
        // Query tabs with the specific URL
        chrome.tabs.query({ url: "http://172.20.114.21/login.html" }, (tabs) => {
            if (tabs.length > 0) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['content.js']
                });
            }
        });
    }
});
