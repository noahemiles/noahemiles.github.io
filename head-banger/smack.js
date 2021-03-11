function smack() {
    var count = localStorage.getItem("counter") || 0;
    var counter = document.getElementById("counter") ;
    counter.innerHTML = (count++).toExponential(4);
    localStorage.setItem("counter", count);
}