
let amigos = [];


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');

    const nombre = input.value.trim(); 

    if (nombre === '') {
        alert('Por favor, escribe un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    
    amigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    
    input.value = '';
    input.focus();
}


function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    if (amigos.length < 2) {
        alert('Debe haber al menos 2 amigos en la lista para hacer el sorteo.');
        return;
    }

    
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
