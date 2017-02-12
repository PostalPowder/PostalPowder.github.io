/* Drop Down Search Scripts */
function openNav() {
    document.getElementById("searchTable").style.height = "100%";
}

function closeNav() {
    document.getElementById("searchTable").style.height = "0%";
}
/* Drop Down Search Scripts End */

/* To Open And Close Hamburger Nav Bar */
function openHamburger(x) {
    x.classList.toggle("change");
    var panel = document.querySelector(".hamburger-panel");
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
}

$(document).ready(function(){
    $(window).resize(function() {
        if ($(window).width() > 750) {
            var panel = document.querySelector(".hamburger-panel");
            var button = document.querySelector(".hamburger-container");
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                button.classList.toggle("change");
            }
        }
    })
});
/* End Of Code To Open And Close Hamburger Nav Bar */


/* View More Recipe Drop Down Script */ 
var acc = document.getElementsByClassName("viewmorebutton");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = document.querySelector(".viewmorepanel");
    if (panel.style.maxHeight){
  	  panel.style.maxHeight = null;
    } else {
  	  panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
/* End Of View More Recipe Drop Down Script */

/* Search List Function */
function searchListFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchList");
    li = ul.getElementsByClassName("searchElements");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
/* End Of Search List Function */

/* Start Of Slide Show */
$(document).ready(function () {
    $('.bxslider').bxSlider({
        adaptiveHeight: true,
        pause: 3000,
        auto: true,
        captions: true
    });
});
/* End Of Slide Show */

/* Start Of Function That Refreshes Page For IE When Screen Is Resized */
window.addEventListener('resize', function () { 
    if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        "use strict";
        window.location.reload(); 
    }
});
/* End Of Function That Refreshes Page For IE When Screen Is Resized */



/* WhatsNearby jQueryUI */
/* Could not search for Supermarkets and Grocery Store, Google deprecated the placesTypes 'grocery_or_supermarket', they will remove it on 16 Feb. Got to check at that date if they will add anything that will replace. So right now I am afraid that you will mark this at a later date (16 Feb) so I've decided to change to search for convenience stores instead. */
function printMap() {
    var e = document.getElementById("locationpicker");
    var strUser = e.options[e.selectedIndex].value;
    $("#map").whatsnearby({ 
        zoom: 15,
        width: "100%",
        address: strUser,
        placesRadius: 1000,
        placesTypes: [ 'convenience_store' ]
    });
}

$(document).ready(function() { 
    document.getElementById("locationbutton").addEventListener("click", printMap);
});
/* End Of WhatsNearby jQueryUI */