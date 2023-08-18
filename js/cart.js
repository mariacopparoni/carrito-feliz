let carrito = [];

const productoContenedor = document.getElementById("producto-contenedor");
const eliminarProductos = document.querySelectorAll(".boton-eliminar");


eliminarProductos.forEach(eliminarProducto => {
  console.log('asd');
  eliminarProducto.addEventListener('click', handleClick);
});

function handleClick(event) {
  console.log('Button clicked:', event.target.textContent);
}
productoContenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('agregar')) {
    validarProductoEnCarrito(e.target.id);
  }
  calcularTotalcito(carrito);

})

const validarProductoEnCarrito = (id) => {
  const estaRepetido = carrito.some(producto => producto.id == id)

  if (!estaRepetido) {
    const producto = productos.find(producto => producto.id == id)
    carrito.push(producto)
    pintarProductoCarrito(producto)
  } else {
    const producto = carrito.find(producto => producto.id == id)
    const cantidad = document.getElementById(`cantidad${producto.id}`)
    producto.cantidad++
    cantidad.innerText = `Cantidad: ${producto.cantidad}`
  }
}

const pintarProductoCarrito = (producto) => {
  const contenedor = document.getElementById('carrito-contenedor')
  const div = document.createElement('div')
  div.classList.add('productoEnCarrito')

  div.innerHTML = `
    <div id="${producto.id}">
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
  listita.forEach(function(pro) {
    totalcito += pro.cantidad * pro.precio;
    cantidad += pro.cantidad
  });
  document.getElementById('precioTotal').textContent = totalcito;
  document.getElementById('contador-carrito').textContent = cantidad;
  //console.log(totalcito);
}

const sacarProductillo = (idProducto) => {
  element = document.getElementById(idProducto);
  element.parentNode.removeChild(element);
} 

