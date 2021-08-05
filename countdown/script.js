function getHtmlElements() {
  return document.querySelectorAll("h3.num-val");
}

const numbers = getHtmlElements();

function setCounters() {
  const date = new Date();
  numbers[0].innerHTML = 11 - date.getMonth();
  numbers[1].innerHTML = 24 - date.getDay();
  numbers[2].innerHTML = 24 - date.getHours();
  numbers[3].innerHTML = 59 - date.getMinutes();
  numbers[4].innerHTML = 60 - date.getSeconds();
}

setInterval(() => {
  setCounters();
}, 1000);
