const saboresDisponibles = [
  { nombre: "Chocolate", imagen: "imagenes/sabor1.jpg", descripcion: "Clásico y delicioso." },
  { nombre: "Vainilla", imagen: "imagenes/sabor2.jpg", descripcion: "Suave y cremosa." },
  { nombre: "Frutilla", imagen: "imagenes/sabor3.jpg", descripcion: "Fresca y afrutada." },
  { nombre: "Limón", imagen: "imagenes/sabor4.jpg", descripcion: "Refrescante y ácido." },
  { nombre: "Dulce de leche", imagen: "imagenes/sabor1.jpg", descripcion: "Una delicia argentina." },
  { nombre: "Menta granizada", imagen: "imagenes/sabor2.jpg", descripcion: "Fresca con chocolate." },
  { nombre: "Crema americana", imagen: "imagenes/sabor3.jpg", descripcion: "Cremosa y suave." },
  { nombre: "Cookies and cream", imagen: "imagenes/sabor4.jpg", descripcion: "Con trozos de galleta." },
  { nombre: "Banana split", imagen: "imagenes/sabor1.jpg", descripcion: "Sabor tropical." },
  { nombre: "Tramontana", imagen: "imagenes/sabor2.jpg", descripcion: "Dulce con chocolate." },
  { nombre: "Maracuyá", imagen: "imagenes/sabor3.jpg", descripcion: "Exótico y refrescante." },
  { nombre: "Cereza", imagen: "imagenes/sabor4.jpg", descripcion: "Dulce y jugosa." },
];
const saboresContainer = document.getElementById("sabores-container");

saboresDisponibles.forEach(sabor => {
  const saborCard = `
    <div class="col-6 col-md-6 col-lg-3">
      <div class="gallery-item">
        <img src="${sabor.imagen}" alt="${sabor.nombre}">
        <div class="overlay">${sabor.nombre}</div>
        <p>${sabor.descripcion}</p>
      </div>
    </div>
  `;
  saboresContainer.innerHTML += saborCard;
});

