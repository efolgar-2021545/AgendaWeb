document.addEventListener('DOMContentLoaded', function () {
    // Se consiguen los datos del Login y si no hay datos me muestra una advertencia
    const correo = localStorage.getItem('usuarioLogueado') || "Usuario no identificado";
    const pass = localStorage.getItem('passwordLogueada') || "********";

    // Buscamos los elementos en el HTML para escribir los datos
    const emailElement = document.getElementById('perfilEmail');
    const passElement = document.getElementById('perfilPass');

    if (emailElement) emailElement.innerText = correo;
    if (passElement) passElement.innerText = pass;
});

function cerrarSesion() {
    if (confirm("Cerrar Sesion")) {
        // Se borra todo al cerrar sesion
        localStorage.clear();
        window.location.href = 'index.html';
    }
}