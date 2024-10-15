document.addEventListener('DOMContentLoaded', function() {
    const serviciosSelect = document.getElementById('servicios');
    serviciosSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue) {
            window.location.href = selectedValue; // Redirige a la página seleccionada
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function showElements() {
        const windowHeight = window.innerHeight;

        fadeInElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;

            // Verifica si el elemento está dentro del 80% de la altura de la ventana
            if (elementPosition < windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    }

    // Detectar el desplazamiento
    window.addEventListener('scroll', showElements);

    // Llamar a la función para mostrar elementos al cargar la página
    showElements();
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


const images = document.querySelectorAll('.carrusel img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

document.getElementById('anterior').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

document.getElementById('siguiente').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Muestra la primera imagen al cargar
showImage(currentIndex);


document.addEventListener('DOMContentLoaded', function() {
    const serviciosSelect = document.getElementById('servicios');
    serviciosSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue) {
            window.location.href = selectedValue; // Redirige a la página seleccionada
        }
    });
});