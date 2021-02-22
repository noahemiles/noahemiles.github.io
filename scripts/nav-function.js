/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function activeToggle(element) {
    var navItems = document.getElementById("myTopnav").children;
    Array.from(navItems).forEach(function (navItem) { 
        navItem.className = " ";
      }); 
    element.className += "active";
}