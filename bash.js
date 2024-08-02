document.addEventListener('DOMContentLoaded', function() {
    function manejarClicEnFila() {
        console.log('Fila clickeada:', this);

        filas.forEach(fila => fila.classList.remove('resaltado'));
        this.classList.add('resaltado');
    }

    const filas = document.querySelectorAll('.tabla .fila');

    filas.forEach(fila => {
        fila.addEventListener('click', manejarClicEnFila);
    });
});