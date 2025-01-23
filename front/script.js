document.getElementById('searchButton').addEventListener('click', async () => {
    const input = document.getElementById('characterInput').value.trim();
    const characterInfoDiv = document.getElementById('characterInfo');
    if (!input) {
        characterInfoDiv.innerHTML = `Por favor, ingresa un nombre`;
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/character/${input}`);
        
        if (!response.ok) {ç
            throw new Error('Personaje no encontrado');
        }
        const data = await response.json();
        characterInfoDiv.innerHTML = `
        <img src="${data.image}" alt="${data.name}">
        <p>Nombre: ${data.name}</p>
        <p>Status: ${data.status}</p>
        <p>Especie: ${data.species}</p>
        <p>Género: ${data.gender}</p>
        <p>Origen: ${data.origin}</p>
        `;
    } catch (error) {
        characterInfoDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});