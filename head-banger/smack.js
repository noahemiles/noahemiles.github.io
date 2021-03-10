function smack() {
    var count = localStorage.getItem("counter") || 0;
    var counter = document.getElementById("counter") ;
    counter.innerHTML = count++;
    localStorage.setItem("counter", count);
}