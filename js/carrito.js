const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoContainer = document.getElementById("carrito-container");
const totalPrecio = document.getElementById("total-precio");
const vaciarCarrito = document.getElementById("vaciar-carrito");
const finalizarCompra = document.getElementById("finalizar-compra");

function mostrarCarrito() {
  carritoContainer.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const sabores = item.sabores ? item.sabores.join(", ") : "No aplica";
    total += item.precio;

    const itemHtml = `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.imagen}" class="img-fluid rounded-start" alt="${item.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <p class="card-text">Sabores: ${sabores}</p>
              <p class="card-text fw-bold">$${item.precio}</p>
              <button class="btn btn-danger btn-sm eliminar-item" data-index="${index}">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    `;
    carritoContainer.innerHTML += itemHtml;
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
