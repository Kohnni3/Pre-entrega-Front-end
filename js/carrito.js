const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoContainer = document.getElementById("carrito-container");
const totalPrecio = document.getElementById("total-precio");
const vaciarCarrito = document.getElementById("vaciar-carrito");
const finalizarCompra = document.getElementById("finalizar-compra");

function mostrarCarrito() {
  carritoContainer.innerHTML = '<ul class="list-group"></ul>';
  const lista = carritoContainer.querySelector(".list-group");
  let total = 0;

  carrito.forEach((item, index) => {
    const sabores = item.sabores ? item.sabores.join(", ") : "No aplica";
    total += item.precio;

    const itemHtml = `
      <li class="list-group-item d-flex justify-content-between align-items-center bg-light border-0 mb-3 shadow-sm rounded">
        <div class="d-flex align-items-center">
          <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid rounded me-3" style="max-width: 50px; max-height: 50px;">
          <div>
            <h5 class="mb-1">${item.nombre}</h5>
            <p class="mb-1 text-muted">Sabores: ${sabores}</p>
            <span class="fw-bold">$${item.precio}</span>
          </div>
        </div>
        <button class="btn btn-danger btn-sm eliminar-item" data-index="${index}">Eliminar</button>
      </li>
    `;
    lista.innerHTML += itemHtml;
  });

  totalPrecio.textContent = total;
  document.querySelectorAll(".eliminar-item").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    });
  });
}

vaciarCarrito.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  location.reload();
});

finalizarCompra.addEventListener("click", () => {
  alert("Gracias por tu compra!");
  localStorage.removeItem("carrito");
  location.reload();
});

mostrarCarrito();
