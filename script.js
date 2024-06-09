document.addEventListener('DOMContentLoaded', function() {
    var botonMensaje = document.createElement('button');

    botonMensaje.textContent = 'clickeame plis:)';

    botonMensaje.addEventListener('click', function() {
        alert('esta pagina tomo mucho trabajo, ¡valora nuestro esfuerzo!');
    });
    document.querySelector('main').appendChild(botonMensaje);
});