async function ninja(match, script) {
  return new Promise((r) => {
    let results = [];
    let count=0;
    chrome.tabs.query(match, function (tabs) {

      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.executeScript(tabs[i].id, { code: script }, (cb) => {
          count++;
          results.push(cb[0]);
          if (count == tabs.length-1) {
            r(results);
          }
        });
      }
    }
    );
  })
}
//this will come in handy:

//https://developer.chrome.com/extensions/tabs#method-query