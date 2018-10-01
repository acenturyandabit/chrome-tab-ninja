function ninja(match,script){
  chrome.tabs.query(match, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.executeScript(tabs[i].id, {code:script});
    }
  }
  );
}
//this will come in handy:

//https://developer.chrome.com/extensions/tabs#method-query