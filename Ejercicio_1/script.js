const libros = ["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"];
const output = document.getElementById("output");
const menuInput = document.getElementById("menuInput");

let isInMenu = true;

const mostrarLibros = () =>{
    output.innerHTML = `<p>Libros disponibles: ${libros.join(", ")}</p>`;
    mostrarVolverAlInicio();
}

const pedirPrestadoLibro = () => {
    const libroPrestado = prompt("Ingrese el nombre del libro que desea pedir prestado:");
    const libroIndex = libros.indexOf(libroPrestado);
    if (libroIndex !== -1) {
        libros.splice(libroIndex, 1);
        mostrarLibros();
    } else {
        alert("El libro no está disponible en la lista.");
    }
}

const agregarODevolverLibro = () => {
    const accion = prompt("¿Desea agregar o devolver un libro? (agregar/devolver)").toLowerCase();
    const libro = prompt("Ingrese el nombre del libro:");
    
    if (accion === "agregar") {
        libros.push(libro);
    } else if (accion === "devolver") {
        libros.push(libro);
    } else {
        alert("Acción no reconocida.");
        return;
    }
    
    mostrarLibros();
}

const verificarLibro = () => {
    const libroBuscado = prompt("Ingrese el nombre del libro que desea verificar:");
    if (libros.includes(libroBuscado)) {
        alert("El libro está en la lista.");
    } else {
        alert("El libro no está en la lista.");
    }
}

const mostrarMenu = () => {
    output.innerHTML = `
        <p>Opciones:</p>
        <p>a. Ver la lista de libros.</p>
        <p>b. Pedir prestado un libro.</p>
        <p>c. Agregar o devolver un libro.</p>
        <p>d. Verificar si existe un libro.</p>
        <p>e. Salir.</p>
    `;
}

const mostrarVolverAlInicio = () =>  {
    output.innerHTML += "<p>f. Volver al inicio.</p>";
}

mostrarMenu();

menuInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const opcion = menuInput.value.toLowerCase();
        switch (opcion) {
            case "a":
                mostrarLibros();
                break;
            case "b":
                pedirPrestadoLibro();
                break;
            case "c":
                agregarODevolverLibro();
                break;
            case "d":
                verificarLibro();
                break;
            case "e":
                if (isInMenu) {
                    isInMenu = false;
                    output.innerHTML = "<p>¡Hasta luego!</p>";
                } else {
                    isInMenu = true;
                    mostrarMenu();
                }
                break;
            case "f":
                isInMenu = true;
                mostrarMenu();
                break;
            default:
                alert("Opción no válida.");
        }
        menuInput.value = "";
    }
});
