const books = ["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"];
const output = document.getElementById("output");
const menuInput = document.getElementById("menuInput");

let isInMenu = true;

const showBooks = () => {
    output.innerHTML = `<p>Libros disponibles: ${books.join(", ")}</p>`;
    showBackToMenu();
};

const borrowBook = () => {
    const borrowedBook = prompt("Ingrese el nombre del libro que desea pedir prestado:");
    const bookIndex = books.indexOf(borrowedBook);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        showBooks();
    } else {
        alert("El libro no está disponible en la lista.");
    }
};

const addOrReturnBook = () => {
    const action = prompt("¿Desea agregar o devolver un libro? (agregar/devolver)").toLowerCase();
    const book = prompt("Ingrese el nombre del libro:");
    
    if (action === "agregar") {
        books.push(book);
    } else if (action === "devolver") {
        books.push(book);
    } else {
        alert("Acción no reconocida.");
        return;
    }
    
    showBooks();
};

const checkBook = () => {
    const searchedBook = prompt("Ingrese el nombre del libro que desea verificar:");
    if (books.includes(searchedBook)) {
        alert("El libro está en la lista.");
    } else {
        alert("El libro no está en la lista.");
    }
};

const showMenu = () => {
    output.innerHTML = `
        <p>Opciones:</p>
        <p>a. Ver la lista de libros.</p>
        <p>b. Pedir prestado un libro.</p>
        <p>c. Agregar o devolver un libro.</p>
        <p>d. Verificar si existe un libro.</p>
        <p>e. Salir.</p>
    `;
};

const showBackToMenu = () => {
    output.innerHTML += "<p>f. Volver al menú.</p>";
};

showMenu();

menuInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const option = menuInput.value.toLowerCase();
        switch (option) {
            case "a":
                showBooks();
                break;
            case "b":
                borrowBook();
                break;
            case "c":
                addOrReturnBook();
                break;
            case "d":
                checkBook();
                break;
            case "e":
                if (isInMenu) {
                    isInMenu = false;
                    output.innerHTML = "<p>¡Hasta luego!</p>";
                } else {
                    isInMenu = true;
                    showMenu();
                }
                break;
            case "f":
                isInMenu = true;
                showMenu();
                break;
            default:
                alert("Opción no válida.");
        }
        menuInput.value = "";
    }
});
