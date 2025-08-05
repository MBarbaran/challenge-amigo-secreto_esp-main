// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// ✅ Variable: array que guarda los nombres de los amigos
let amigos = [];

// ✅ Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // ✅ Condicional: validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // ✅ Agregar al array
    amigos.push(nombre);

    // ✅ Mostrar en la lista HTML
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // ✅ Limpiar el campo
    input.value = "";
}

// ✅ Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // ✅ Condicional: verificar si hay nombres para sortear
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    // ✅ Math.random y Math.floor para obtener índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    // ✅ Mostrar el resultado
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);

    // ✅ Loop: recorrer la lista (solo para práctica del lazo)
    console.log("Lista completa de amigos:");
    for (let i = 0; i < amigos.length; i++) {
        console.log(`- ${amigos[i]}`);
    }
}

// ✅ Función para reiniciar el sorteo 
function reiniciarSorteo() {
    // Vaciar el array
    amigos = [];

    // Limpiar las listas visuales
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // (Opcional) Confirmar reinicio
    alert("El sorteo ha sido reiniciado.");
}
