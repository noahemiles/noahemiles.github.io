/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function addNavDivs() {
  let nav = document.getElementById("nav");
  const links = ["index", "Projects", "Skills", "About"];
  links.forEach((linkText) => {
    let link = document.createElement("a");
    link.innerHTML = linkText == "index" ? "Home" : linkText;
    link.href = linkText + ".html";
    nav.appendChild(link);
  });
}

addNavDivs();
