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
    setInterval(activarAnimacion, 7000); // 7 segundos en total (3 segundos de animación + 4 segundos de retraso)
    
    // Agrega y quita la clase "hovered" durante el hover
    boton.addEventListener('mouseenter', function () {
        boton.classList.add('hovered');
    });

    boton.addEventListener('mouseleave', function () {
        boton.classList.remove('hovered');
    });
});
