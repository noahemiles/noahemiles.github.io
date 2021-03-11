document.getElementById("smacks_count").innerHTML = localStorage.getItem("smacks_count") || 0;
document.getElementById("bangers_count").innerHTML = localStorage.getItem("bangers_count") || 0;
function smack() {
    var count = localStorage.getItem("smacks_count") || 0;
    var counter = document.getElementById("smacks_count") ;
    counter.innerHTML = count > 999 ? (count++).toExponential(count.toString().length - 1) : count++;
    localStorage.setItem("smacks_count", count);
}