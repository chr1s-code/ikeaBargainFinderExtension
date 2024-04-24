// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });

  // chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  //   if (changeInfo.status == 'complete' && tab.active) {
  //     chrome.scripting.executeScript({
  //       target: {tabId: tab.id},
  //       files: ['content.js']
  //     });
  //   }
  // })