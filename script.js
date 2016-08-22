var windowHeight = screen.height;

var navigacija = document.querySelector("#navBar");
var navPosition = navigacija.getBoundingClientRect();
var placeholder = document.createElement("div");
placeholder.style.width = navPosition.width + "px";
placeholder.style.height = navPosition.height + "px";
var isAdded = false;

window.onscroll = function() {curtainUp(), navSticky()};

function curtainUp() {
	
    if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
        document.getElementById("pageTop").className = "pageTopPos"; 
        document.getElementById("naslovAman").className = "naslovOn"; 
    } 
    else if (document.body.scrollTop > windowHeight/1.2 || document.documentElement.scrollTop > windowHeight/1.2) {
        document.getElementById("naslovAman").className = "naslovOn naslovFixed"; 
    }
    else {
        document.getElementById("naslovAman").className = "";
        document.getElementById("pageTop").className = "topFixed";   
    }
}

function navSticky() {
  if ((window.pageYOffset >= navPosition.top && !isAdded) || (window.pageYOffset >= navPosition.top && !isAdded)) {
    navigacija.className = "sticky";
    navigacija.parentNode.insertBefore(placeholder, navigacija);
    isAdded = true;
  }
  else if ((window.pageYOffset < navPosition.top && isAdded) || (window.pageYOffset < navPosition.top && isAdded)) {
    navigacija.className = "";
    navigacija.parentNode.removeChild(placeholder);
    isAdded = false;
  }
}

