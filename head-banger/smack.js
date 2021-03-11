document.getElementById("smack_count").innerHTML = localStorage.getItem("smack_count") || 0;
document.getElementById("brick_count").innerHTML = localStorage.getItem("brick_count") || 0;
function smack() {
    var count = localStorage.getItem("smack_count") || 0;
    var counter = document.getElementById("smack_count") ;
    counter.innerHTML = count > 999 ? (count++).toExponential(count.toString().length - 1) : count++;
    localStorage.setItem("smack_count", count);
}