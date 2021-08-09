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

function addPrivacyPolicy() {
  console.log("Privacy:", getPrivacyPolicy());
  let privacy = document.getElementById("policy");
  privacy.innerHTML = getPrivacyPolicy() || "Privacy Policy<br><br> -\tUser's email is collected and stored locally only.";
  privacy.className = "text";
}

function getPrivacyPolicy(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://noahemiles.github.io/privacy.txt', true);
  request.send(null);
  request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
          var type = request.getResponseHeader('Content-Type');
          if (type.indexOf("text") !== 1) {
              return request.responseText;
          }
      }
  }
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
      addPrivacyPolicy();
      break;
    default:
      addNavDivs();
  }
}

init();
