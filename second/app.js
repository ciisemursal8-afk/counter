let number = 3;

function increase() {
    number++;
    document.getElementById("number").innerHTML = number;
}

function decrease() {
    if (number > 0) {
        number--;
    }

    document.getElementById("number").innerHTML = number;
}


function reset() {
    number = 0;
    document.getElementById("number").innerHTML = number;
}