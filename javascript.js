const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

document.querySelector('.carousel-next').addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.carousel-prev').addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});


function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
  
  // Añadir la clase 'active' a los elementos visibles
  items.forEach((item, index) => {
      item.classList.remove('active');
      if (index === currentIndex) {
          item.classList.add('active');
      }
  });
}


  document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', function() {
      const selectedValue = this.getAttribute('data-value');
      document.querySelector('.select-selected').innerHTML = `<i class="fa-brands fa-usps"></i> ${this.innerHTML}`;
      // Aquí puedes manejar el valor seleccionado como desees
      this.parentElement.classList.add('select-hide');
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const mostrarBtn = document.querySelector('.mostrar');
    const esconderBtn = document.querySelector('.esconder');
    const nav = document.querySelector('.nav');
    const mainContent = document.getElementById('carousel-container');

    mostrarBtn.addEventListener('click', () => {
        nav.classList.add('show'); // Muestra el menú
        mostrarBtn.classList.add('hide'); // Esconde el ícono de mostrar
        esconderBtn.classList.add('show'); // Muestra el ícono de esconder
        mainContent.classList.add('carousel-container'); // Expande el margen del contenido
    });

    esconderBtn.addEventListener('click', () => {
        nav.classList.remove('show'); // Esconde el menú
        mostrarBtn.classList.remove('hide'); // Muestra el ícono de mostrar
        esconderBtn.classList.remove('show'); // Esconde el ícono de esconder
        mainContent.classList.remove('carousel-container'); // Restaura el margen del contenido
    });
});

const texts = [
    "Cámaras Frigoríficas",
    "Instalación de Equipos  Climatizadores",
    "Reparaciones de Equipos  Climatizadores",
    "Refrigeración Comercial e Industrial",
    "Planes de Mantenimiento",
    "Asistencia 24 / 7",
    "Instalacion de Ductos",
    "Instalacion de Temperado de Piscina"
];

let index = 0;

const animatedText = document.getElementById("animatedText");

function changeText() {
    animatedText.textContent = texts[index];
    index = (index + 1) % texts.length; // Cambia el índice y vuelve al inicio si es necesario
}

setInterval(() => {
    changeText();
},6000); // Cambia el texto cada 5 segundos (mismo tiempo que la animación)
document.addEventListener('DOMContentLoaded', function() {
    const serviciosSelect = document.getElementById('servicios');
    serviciosSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue) {
            window.location.href = selectedValue; // Redirige a la página seleccionada
        }
    });
});