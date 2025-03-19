// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    // Verificar que el campo no esté vacío
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está ingresado. Por favor ingresa uno diferente.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Actualizar la lista de amigos en el HTML
    mostrarListaAmigos();

    // Limpiar el campo de texto
    nombreInput.value = "";

    // Habilitar el botón de sorteo si hay al menos 2 amigos
    if (amigos.length >= 2) {
        document.querySelector(".button-draw").disabled = false;
    }
}

// Función para mostrar la lista de amigos ingresados
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join("");
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Mezclamos los amigos aleatoriamente
    function mezclarArreglo(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiar elementos
        }
    }

    // Mezclamos los amigos
    mezclarArreglo(amigos);

    // Creamos el sorteo y lo mostramos
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultados del Sorteo:</h3>";

    for (let i = 0; i < amigos.length; i++) {
        const amigoSecreto = amigos[(i + 1) % amigos.length]; // El último se asigna al primero
        resultadoDiv.innerHTML += `<p><strong>${amigos[i]}</strong> le tocó como amigo secreto a <strong>${amigoSecreto}</strong>.</p>`;
    }

    // Deshabilitar el botón de sorteo después de hacerlo
    document.querySelector(".button-draw").disabled = true;
}
