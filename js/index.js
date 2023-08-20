var  productos = [];

const pintarProductos = (data) => {
    const contenedor = document.getElementById("producto-contenedor");

    data.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                          <img src=${producto.imagen}>
                          <span class="card-title">${producto.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-#A4D955"><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${producto.desc}</p>
                            <p>${producto.precio}</p>
                        </div>
                       `
        contenedor.appendChild(div);
    });
};

const loadJSON = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar el JSON desde ${url}: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                productos = data;
                document.addEventListener('DOMContentLoaded', pintarProductos(productos));
            });
    });
}


const jsonUrl = '../data/stock.json';

loadJSON(jsonUrl);
