chrome.webRequest.onBeforeRequest.addListener(

    function(details) { return{cancel: true}},
        { urls: [
            "*://*.zedo.com/*",
            "*://*.ads.google.com/*",
            '*://*.adroll.com/*',
            "*://*.marketingplatform.google.com/*",
            "*://*.doubleclick.net/*",
        
        ]},
    ["blocking"],
    

);



