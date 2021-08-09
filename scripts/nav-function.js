function addNavDivs() {
  let nav = document.getElementById("nav");
  const links = [
    "index",
    "Projects",
    "Skills",
    "References",
    "Privacy",
    "About",
  ];
  links.forEach((linkText) => {
    let link = document.createElement("a");
    link.className = "nav-item text";
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
    li.className = "text";
    li.innerHTML = el;
    skillList.appendChild(li);
  });
}

function addRefListItems() {
  const refs = ["Bill", "Bob", "Joe", "Steve", "Mike", "Bruno"];
  let refList = document.getElementById("skill-list");
  refs.forEach((el) => {
    let li = document.createElement("li");
    li.className = "text";
    li.innerHTML = el;
    refList.appendChild(li);
  });
}

function init() {
  switch (window.location.pathname) {
    case "/Skills.html":
      addNavDivs();
      addSkillListItems();
      break;
    case "/References.html":
      addNavDivs();
      addRefListItems();
      break;
    case "/Privacy.html":
      break;
    default:
      addNavDivs();
      break;
  }
}

init();
