function getHtmlElements() {
  return document.querySelectorAll("h3.num-val");
}

const numbers = getHtmlElements();

function setCounters() {
  const date = new Date();
  if (date.getMonth() < 11 || date.getMonth() == 11 && date.getDay() < 25) {
    numbers[0].innerHTML = 11 - date.getMonth(); //months are 0 based
    numbers[1].innerHTML = 24 - date.getDay();
    numbers[2].innerHTML = 23 - date.getHours();
    numbers[3].innerHTML = 59 - date.getMinutes();
    numbers[4].innerHTML = 60 - date.getSeconds();
  } else {
    numbers[0].innerHTML = 11;
    numbers[1].innerHTML = 30 - date.getDay();
    numbers[2].innerHTML = 23 - date.getHours();
    numbers[3].innerHTML = 59 - date.getMinutes();
    numbers[4].innerHTML = 60 - date.getSeconds();
  }
}

setInterval(() => {
  setCounters();
}, 1000);
