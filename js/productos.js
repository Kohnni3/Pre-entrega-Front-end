

const productos = [
    { nombre: "1kg de Helado", precio: 11000, imagen: "imagenes/1kg.jpg", descripcion: "Rinde para toda la familia." },
    { nombre: "1/2kg de Helado", precio: 6000, imagen: "imagenes/medio.jpg", descripcion: "Ideal para compartir." },
    { nombre: "1/4kg de Helado", precio: 4000, imagen: "imagenes/cuarto.jpg", descripcion: "Perfecto para uno." },
    { nombre: "5 Cucuruchos", precio: 2000, imagen: "imagenes/cucuruchos.jpg", descripcion: "Siempre frescos." },
  ];
  
  const productosContainer = document.getElementById("productos-container");
  const saboresModal = new bootstrap.Modal(document.getElementById("modalSabores"));
  const saboresLista = document.getElementById("saboresLista");
  const confirmarSabores = document.getElementById("confirmarSabores");
  const errorSabores = document.getElementById("errorSabores");
  
 
  productos.forEach((producto, index) => {
    const card = `
      <div class="col-md-6 col-lg-5 col-xl-3 d-inline-flex py-3 ps-3 flex-md-row justify-content-center">
        <div class="card mb-4">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text fw-bold">$${producto.precio}</p>
            <button class="btn btn-primary comprar-btn" data-index="${index}">Comprar</button>
          </div>
        </div>
      </div>
    `;
    productosContainer.innerHTML += card;
  });
  
 
  document.querySelectorAll(".comprar-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const producto = productos[index];
  
      if (producto.nombre.includes("Cucuruchos")) {
        agregarAlCarrito(producto);
      } else {
        mostrarModalSabores(producto);
      }
    });
  });
  
  
  function mostrarModalSabores(producto) {
    saboresLista.innerHTML = saboresDisponibles.map((sabor, index) => `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="sabor${index}" value="${sabor.nombre}">
        <label class="form-check-label" for="sabor${index}">${sabor.nombre}</label>
      </div>
    `).join("");
  
    confirmarSabores.onclick = () => {
      const seleccionados = [...document.querySelectorAll("#saboresLista input:checked")].map(input => input.value);
      if (seleccionados.length > 0 && seleccionados.length <= 4) {
        errorSabores.classList.add("d-none");
        agregarAlCarrito(producto, seleccionados); 
        saboresModal.hide();
      } else {
        errorSabores.classList.remove("d-none");
      }
    };
  
    saboresModal.show();
  }
  
  function agregarAlCarrito(producto, saboresSeleccionados = []) {
  
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoConSabores = {
      ...producto,  
      sabores: saboresSeleccionados,  
    };
    carrito.push(productoConSabores);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  