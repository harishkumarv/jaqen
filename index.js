chrome.browserAction.onClicked.addListener(function(tab) {
    var domain = tab.url.replace(/.*\/\//,"").replace(/\/.*$/,"");
    if(domain !== "heyneighbor.chat" && domain !== "scrollback.io" )  return alert("Not applicable for this site.");
    chrome.tabs.executeScript({
        file:"/assets/jquery-1.11.3.min.js"
    }, function(){
        chrome.tabs.executeScript({
            file:"/scripts/store.js"
        }, function(){
            chrome.tabs.executeScript({
                file:"/scripts/user.js"
            }, function(){
                chrome.tabs.executeScript({
                    file: "/scripts/showDialog.js"
                });
            });
        });
    });
});

/*
var modalDiv = $("<div>");
var modalContent = $("<div>");
var buttonsDiv = $("<div>");
var usersList = $("<div>");
var bodyTag = $("body");

body.append(modalDiv);
modalDiv.append(modalContent);


*/
