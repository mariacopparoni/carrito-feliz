const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');

abrirCarrito.addEventListener('click', () => {

    modalContenedor.classList.toggle('modal-active')
});


modalContenedor.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
});