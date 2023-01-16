chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId == "simpleSearch"){
        console.log("Search " + info.selectionText + " was clicked.");
        chrome.tabs.create({  
            url: "http://www.google.com/search?q=" + info.selectionText
        });
    } else  if(info.menuItemId == "simpleBookmark"){
        console.log("Bookmark was clicked.");
        var currentURL = info.frameUrl || info.pageUrl;
        chrome.tabs.create({  
            url: "https://ahsailabs.com/simpletools/bookmark/add?url="+currentURL 
        });
    }
  });
  

chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
        id: "simpleSearch",
        title: "Simple search: %s", 
        contexts:["selection"]
    });

    chrome.contextMenus.create({
        id: "simpleBookmark",
        title: "Simple bookmark this url", 
        contexts:["all"]
    });
});