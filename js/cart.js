let carrito = localStorage.getItem("carrito") !== null ? JSON.parse(localStorage.getItem("carrito")) : [];

const productoContenedor = document.getElementById("producto-contenedor");

document.addEventListener("DOMContentLoaded", function() {
    carrito.forEach(function (element){
        pintarProductoCarrito(element)
    });
    calcularTotalcito(carrito);
});


const handleClick = (event) => {
    sacarProductilloModal(event.target.value);
}
productoContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarProductoEnCarrito(e.target.id);
    }
    calcularTotalcito(carrito);

})

const validarProductoEnCarrito = (id) => {
    const estaRepetido = carrito.some(producto => producto.id == id)
    let producto = productos.find(producto => producto.id == id)

    let cantidad = document.getElementById(`cantidad${producto.id}`)

    if (!estaRepetido) {
        carrito.push(producto)
        pintarProductoCarrito(producto)
    } else {
        if (cantidad === null)
        {
            pintarProductoCarrito(producto)
            cantidad = document.getElementById(`cantidad${producto.id}`)
        }
        producto = carrito.find(producto => producto.id == id)
        producto.cantidad++
        console.log(cantidad, producto);
        cantidad.innerText = `Cantidad: ${producto.cantidad}`
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const pintarProductoCarrito = (producto) => {
    const contenedor = document.getElementById('carrito-contenedor')
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.id = "divp-" + producto.id
    div.innerHTML = `
    <div id="pro-${producto.id}">
    <p>${producto.nombre}</p>
    <p>$ ${producto.precio}</p>
    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
    <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}" >X</button>
    </div>
  `
    contenedor.appendChild(div)
}


const calcularTotalcito = (listita) => {
    let totalcito = 0;
    let cantidad = 0;
    listita.forEach(function (pro) {
        totalcito += pro.cantidad * pro.precio;
        cantidad += pro.cantidad
    });
    document.getElementById('precioTotal').textContent = totalcito;
    document.getElementById('contador-carrito').textContent = cantidad;
}

const sacarProductilloModal = (idProducto) => {
    const element = document.getElementById('divp-' + idProducto);
    element.parentNode.removeChild(element);
    carrito = carrito.filter(obj => obj.id.toString() !== idProducto);

    calcularTotalcito(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    validarCarrito();
    Toastify({
        text: "Producto Eliminado :(",
        className: "info",
        style: {
            background: "linear-gradient(to right, #A4D955, #6DDAF2)",
        }
    }).showToast();
} 

