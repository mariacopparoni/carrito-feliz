const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const finalizar = document.getElementById('button')

abrirCarrito.addEventListener('click', () => {
    validarCarrito();
    modalContenedor.classList.toggle('modal-active');
    asociarEliminarProducto();
});


cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
});

const asociarEliminarProducto = () => {
    const eliminarProductos = document.querySelectorAll(".boton-eliminar");
    eliminarProductos.forEach(eliminarProducto => {
        eliminarProducto.addEventListener('click', handleClick);
    });
}
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_psx1x5g';
        document.getElementById('total_pedido').value = document.getElementById('precioTotal').textContent;
        let datito = ""
        for (const element of carrito) {
            datito += element.nombre + "  $" + element.precio + " x" + element.cantidad + ".\n";
        }
        document.getElementById('message').value = datito;
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });
finalizar.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
    Toastify({
        text: "Su pedido ha sido realizado. Revise su correo para información de pago",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,  #A4D955, #6DDAF2)",
        },
        onClick: function () {
        } // Callback after click
    }).showToast();
});


const emailInput = document.getElementById("reply_to");
const submitButton = document.getElementById("button");

const validarCarrito = () => {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(emailValue) && carrito.length > 0) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
}

emailInput.addEventListener("keypress", validarCarrito);
emailInput.addEventListener("focus", validarCarrito);
emailInput.addEventListener("change", validarCarrito);
emailInput.addEventListener("input", validarCarrito);
emailInput.addEventListener("submit", validarCarrito);





