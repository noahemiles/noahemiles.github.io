function smack(increment = 1) {
  let count = localStorage.getItem("smack_count") || 0,
    smack_count = document.getElementById("smack_count"),
    soundFile = "Meaty_Whack_No_Boing.mp3";

  count = Number(count) + increment;
  if (count % 100 === 0) {
    soundFile = "Meaty_Whack_Both_Chuckle.mp3";
  }
  smack_count.innerHTML =
    /*count > 99999
      ? (count).toExponential(count.toString().length - 1)
      : */count;
  localStorage.setItem("smack_count", count);
  playAudio(soundFile);
}

function playAudio(fileName) {
  let audio = new Audio(`./media/audio/${fileName}`);
  audio.play();
}

function handleListeners() {
  document.getElementsByTagName("main")[0].addEventListener("click", (e) => {
    smack(1);
  });
}

function handleLegacy(smack_count) {
  //Legacy Update
  if (localStorage.getItem("counter")) {
    smack_count += Number(localStorage.getItem("counter"));
    localStorage.setItem("smack_count", smack_count);
    localStorage.removeItem("counter");
  }
  return smack_count;
}

function init() {
  let smack_count = Number(localStorage.getItem("smack_count")) || 0;
  smack_count = handleLegacy(smack_count);
  //Initial set of Smack
  document.getElementById("smack_count").innerHTML =
    /*smack_count > 999
      ? Number(smack_count).toExponential(smack_count.toString().length - 1)
      : */smack_count;
  //Initial set of Brick
  let brick_count = localStorage.getItem("brick_count") || 0;
  document.getElementById("brick_count").innerHTML = brick_count;
  handleListeners();
}

init();