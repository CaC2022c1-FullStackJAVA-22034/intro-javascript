let titulo = document.getElementById("elTitulo");
let parrafo1 = document.getElementById("p1");
let parrafo2 = document.getElementById("p2");
let link = document.getElementById("enlace");
let inputApellido = document.querySelector("#lname");

let textoOriginal;

function handOver(evt) {
    textoOriginal = evt.target.innerHTML;
    evt.target.innerHTML = "¡Me pasaron por encima!";
}

function handLeave(evt) {
    evt.target.innerHTML = textoOriginal;
}

function handClick(evt) {
    evt.target.innerHTML = "¡Me hicieron un click!";
}

function handleKeyPress(evt) {
    let ape = evt.target.value;
    parrafo2.innerHTML = ape + " mide " + ape.length + " caracteres"
}

titulo.onmouseover = handOver;
titulo.onmouseleave = handLeave;
titulo.onclick = handClick;
parrafo1.onmouseover = handOver;
parrafo1.onmouseleave = handLeave;
parrafo1.onclick = handClick;
link.onmouseover = handOver;
link.onmouseleave = handLeave;
link.onclick = handClick;

inputApellido.onkeyup = handleKeyPress;