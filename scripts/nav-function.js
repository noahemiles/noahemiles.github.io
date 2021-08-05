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
    link.className = "nav-item";
    link.innerHTML = linkText == "index" ? "Home" : linkText;
    link.href = linkText + ".html";
    nav.appendChild(link);
  });
}

function addSkillListItems() {
  const skills = [
    "Java",
    "Python",
    "Javascript",
    "Web Design",
    "Chrome Extension Development",
  ];
  let skillList = document.getElementById("skill-list");
  skills.forEach((el) => {
    let li = document.createElement("li");
    li.className = "skill";
    li.innerHTML = el;
    skillList.appendChild(li);
  });
}

function init() {
  switch (window.location.pathname) {
    case "/Skills.html":
      addNavDivs();
      addSkillListItems();
      break;
    default:
      addNavDivs();
  }
}

init();
