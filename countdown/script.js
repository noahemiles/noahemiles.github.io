function getHtmlElements() {
  return document.querySelectorAll("h3.num-val");
}

const numbers = getHtmlElements();

function setCounters() {
  const date = new Date();
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let month = date.getMonth();
  lastDay = lastDay.getDate();
  numbers[0].innerHTML = 11 - date.getMonth(); //months are 0 based
  numbers[1].innerHTML = daysInThisMonth() - date.getDate();
  numbers[2].innerHTML = 23 - date.getHours();
  numbers[3].innerHTML = 59 - date.getMinutes();
  numbers[4].innerHTML = 60 - date.getSeconds();
}

function daysInThisMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}

setInterval(() => {
  setCounters();
}, 1000);
