function app() {
    updateUser();
    let divs = document.querySelectorAll("div");
    for (let i = 0; i < divs.length - 1; i++) {//=
        divs[i].style.backgroundColor = turtleColors[divs[i].className];
    }
    localStorage.setItem('seen', 'true');
}

const turtleColors = {
    raphael: "red",
    michelangelo: "orange",
    leonardo: "blue",
    donatello: "purple",
    "master-splinter": "gray"
};

let updateUser = function () {
    let a = localStorage.getItem('seen');
    let b = [".raphael", ".leonardo", ".master-splinter"];
    if (a === 'true') {
        b.forEach(badTurtle => {
            let t = document.querySelector(badTurtle);
            t.style.borderStyle = "dashed";
            t.style.borderColor = "white";
        });
    }
}