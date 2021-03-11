function smack() {
    var count = localStorage.getItem("counter") || 0;
    var counter = document.getElementById("counter") ;
    counter.innerHTML = count > 999 ? (count++).toExponential(count.toString().length - 1) : count++;
    localStorage.setItem("counter", count);
}