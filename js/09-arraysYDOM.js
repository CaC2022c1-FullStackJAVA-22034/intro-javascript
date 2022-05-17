const personas = [];

const campoNombre = document.getElementById("fname");
const campoApellido = document.getElementById("lname");
const btnAgregar = document.getElementById("btnAgregar");
const btnBorrar = document.getElementById("btnBorrar");
const laTabla = document.getElementById("laTabla");

function agregar(evt) {
    const nombre = campoNombre.value;
    const apellido = campoApellido.value;
    if( nombre !== "" && apellido !== "" ) {
        const nuevaFila = obtenerNuevaFila(nombre, apellido);
        laTabla.appendChild( nuevaFila );
        personas.push( nombre + " " + apellido );
    }    
}

function obtenerNuevaFila(nom, ape) {
    const nuevaFila = document.createElement("tr");
    let elTD = obtenerTD(personas.length + 1)
    nuevaFila.appendChild(elTD);
    elTD = obtenerTD(nom)
    nuevaFila.appendChild(elTD);
    elTD = obtenerTD(ape)
    nuevaFila.appendChild(elTD);
    return nuevaFila
}

function obtenerTD (dato) {
    const td = document.createElement("td");
    td.innerHTML = dato;
    return td
}

btnAgregar.onclick = agregar;