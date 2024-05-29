let a = prompt("Son kiriting")
while (isNaN(a) || a / 1 === 0) {
    a = +prompt('sonkirtitin dedimu!')
}
let b = +prompt("Soning darajasini kiriting")

while (isNaN(b) || b / 1 === 0) {
    b = +prompt("Soning darajasini kiriting zaybal")
}
if (a ** b) {
    alert("Javobi = " + a ** b)
}
else if (a !== 0 && b !== 0) {
    alert("Siz son kiritishga majbursiz")
} else {
    alert("Siz son kiritishga majbursiz")
}