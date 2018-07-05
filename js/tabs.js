// index.js Frank Poth 03/30/2016

// FUNCTIONS

// When you click a tab its menu should either open or close.
function clickTab(event_) {
    if (this.is_open) {
        this.is_open = false;
        this.children[1].className = "Menu";
        return;
    }
    
    // Close all other tabs
    for (var index = tabs.length -1; index > -1; index --) {
        var tab = tabs[index];
        tab.is_open = false;
        tab.children[1].className = "Menu";
    }
    
    // Open the clicked tab
    this.is_open = true;
    this.children[1].className = "Menu Expand";
}

// VARIABLES

// Get all the tabs in the header
var tabs = document.getElementsByClassName("Tab");

// INITIALIZE

for (var index = tabs.length -1; index > -1; index --) {
    var tab = tabs[index];
    tab.is_open = false;
    tab.addEventListener("click", clickTab, false);
}