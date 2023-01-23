var cAns;
ChangeText();

document.getElementById('enter').onkeypress = function (e) {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
        if (document.getElementById('enter').value == cAns) {
            alert("Correct");
        }
        else {
            alert("Wrong, This is like literally basic maths");
        }
        location.reload();
    }
}

function ChangeText() {
    let a, b, op;
    a = Math.round(Math.random() * 10);
    b = Math.round(Math.random() * 10);

    op = Math.round(Math.random() * 3);
    if (op === 0) {
        document.getElementById('op').textContent = "+";
        cAns = a + b;
    }
    if (op === 1) {
        document.getElementById('op').textContent = "-";
        cAns = a - b;
    }
    if (op === 2) {
        document.getElementById('op').textContent = "*";
        cAns = a * b;
    }
    console.log(cAns);
    document.getElementById('one').textContent = a;
    document.getElementById('two').textContent = b;
}