# chrome-tab-ninja
Little extension to run a script on multiple tabs at once.


# Installation
Download the files as a zip.
Extract.
Go to chrome-> extensions; enable developer mode.
Add the unpacked extension directory. 

# Usage
Go to chrome://extensions.
Under the ninja extension, click inspect views/background.js.
In the developer console, type in your function. For example:

```javascript
ninja ({url:'google.com.au'},"alert('Hi!');");

ninja ({url:'root.level.domain/*'},"(()=>{return somevalue})()").then(console.log);
```
# Changelog
v1.1: Added promise based return function.


Hope this saves you some time.

-S

