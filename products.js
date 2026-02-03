const shop = document.getElementById("shop");

// Detectar automáticamente todas las carpetas de productos
const productFolders = [];

fetch('./products')
.then(async res => {
    // No se puede leer directorios en GitHub Pages directamente
    // Se agrega manualmente si local, en GitHub debes listar carpetas
    const folders = ["example_product"]; // agregar carpetas aquí
    folders.forEach(f => productFolders.push(f));
    loadProducts();
});

async function loadProducts(){
    for(const folder of productFolders){
        const res = await fetch(`products/${folder}/info.json`);
        const data = await res.json();

        const msg = `Hola, estoy interesado en el producto: ${data.name}`;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="products/${folder}/logo.png">
            <h2>${data.name}</h2>
            <p>${data.description}</p>
            <b>${data.price}</b>
            <p>Contactar: FallidoQuema#1234</p>
            <button onclick="copyMessage('${msg}')">Contactar por Discord</button>
        `;
        shop.appendChild(card);
    }
}

function copyMessage(msg){
    navigator.clipboard.writeText(msg)
    .then(()=>alert("Mensaje copiado! Pega en Discord para contactar."))
    .catch(()=>alert("Error copiando el mensaje"));
}
