// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');

    const nombre = input.value.trim(); // Elimina espacios al inicio y final

    if (nombre === '') {
        alert('Por favor, escribe un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    // Agregar el nombre al array y actualizar la lista visual
    amigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de texto
    input.value = '';
    input.focus();
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar los resultados previos

    if (amigos.length < 2) {
        alert('Debe haber al menos 2 amigos en la lista para hacer el sorteo.');
        return;
    }

    // Crear una copia del array y barajar los nombres
    const amigosDisponibles = [...amigos];
    const asignaciones = [];

    amigos.forEach((amigo) => {
        let amigoSecreto;

        do {
            amigoSecreto = amigosDisponibles[Math.floor(Math.random() * amigosDisponibles.length)];
        } while (amigoSecreto === amigo);

        asignaciones.push(`${amigo} → ${amigoSecreto}`);
        amigosDisponibles.splice(amigosDisponibles.indexOf(amigoSecreto), 1);
    });

    // Mostrar los resultados en la lista de resultados
    asignaciones.forEach((asignacion) => {
        const li = document.createElement('li');
        li.textContent = asignacion;
        resultado.appendChild(li);
    });
}
