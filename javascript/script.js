document.addEventListener('DOMContentLoaded', function () {
  var boton = document.querySelector('.BotonConoceme');

  function activarAnimacion() {
    if (!boton.classList.contains('hovered')) {
      boton.classList.add('Saltos');
      setTimeout(function () {
        boton.classList.remove('Saltos');
      }, 3000); // 3 segundos para la duración de la animación
    }
  }

  // Inicia la animación cada cierto intervalo
  setInterval(activarAnimacion, 7000); // 7 segundos en total 


  boton.addEventListener('mouseenter', function () {
    boton.classList.add('hovered');
  });

  boton.addEventListener('mouseleave', function () {
    boton.classList.remove('hovered');
  });

  const elementoADesaparecer = document.getElementById('presentacionProyecto');
  let tercero = document.getElementById('tercero');

  // Opciones para IntersectionObserver
  const opciones = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Define cuánto del elemento debe estar visible para activar la función
  };

  // Crear una instancia de IntersectionObserver con la función de callback
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elementoADesaparecer.style.opacity = '1';
        setTimeout(function () {
          //elementoADesaparecer.style.display = 'flex';
        }, 2500); // 3 segundo
        observer.unobserve(entry.target);
      }
    });
  }, opciones);

  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    project.addEventListener('mouseenter', function () {
      this.querySelector('.project-img').style.opacity = '0'; // Oculta la imagen
      this.querySelector('.project-info').style.opacity = '1'; // Muestra el texto informativo
    });

    project.addEventListener('mouseleave', function () {
      this.querySelector('.project-img').style.opacity = '1'; // Muestra la imagen
      this.querySelector('.project-info').style.opacity = '0'; // Oculta el texto informativo
    });
  });

  // Observar la sección tercera
  observer.observe(tercero);
});