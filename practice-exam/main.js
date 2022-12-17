function app() {
    updateUser();
    let divs = document.querySelectorAll("div");
    for (let i = 0; i < divs.length - 1; i++) {
        divs[i].style.backgroundColor = turtleColors[divs[i].className];
    }
}

const turtleColors = {
    leonardo: "blue",
    donatello: "purple",
    raphael: "red",
    michelangelo: "orange",
    "master-splinter": "gray"
};

let updateUser = function () {
    let a = localStorage.getItem('seen');
    let b = [".raphael", ".leonardo", ".master-splinter"];
    if (a) {
        b.forEach(badTurtle => {
            let t = document.querySelector(badTurtle);
            t.style.borderStyle = "dashed";
            t.style.borderColor = "white";
        });
        localStorage.removeItem('seen');
    } else {
        localStorage.setItem('seen', 'true');
    }
}