var smack_count =
  (Number(localStorage.getItem("counter")) >
  Number(localStorage.getItem("smack_count"))
    ? localStorage.getItem("counter")
    : localStorage.getItem("smack_count")) || 0;
document.getElementById("smack_count").innerHTML =
  smack_count > 999
    ? Number(smack_count).toExponential(smack_count.toString().length - 1)
    : smack_count;
document.getElementById("brick_count").innerHTML =
  localStorage.getItem("brick_count") || 0;
console.log(
  Number(localStorage.getItem("counter")) >
    Number(localStorage.getItem("smack_count"))
);
function smack() {
  var count = localStorage.getItem("smack_count") || 0;
  var smack_count = document.getElementById("smack_count");
  smack_count.innerHTML =
    count > 999
      ? (count++).toExponential(count.toString().length - 1)
      : count++;
  localStorage.setItem("smack_count", count);
}
