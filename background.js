// background.js

// Called when browser clicks the browser action
chrome.browserAction.onClicked.addListener(function(tab){
    console.log('Changing the text spacing of' + tab.url + '!');
  chrome.tabs.executeScript({
    code: 'document.body.style.line-height="1.5em !important"',
    code: 'document.body.style.letter-spacing="0.12em !important"',
    code: 'document.body.style.word-spacing="0.16em !important"',
    code: 'document.body.style.p.margin-bottom="2em !important"'
  });
});