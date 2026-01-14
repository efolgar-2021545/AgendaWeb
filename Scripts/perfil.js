document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos los datos de la memoria, si no hay nada ponemos un mensaje por defecto
    const correo = localStorage.getItem('usuarioLogueado') || "Usuario no identificado";
    const pass = localStorage.getItem('passwordLogueada') || "********";

    // Buscamos los elementos en el HTML para escribir los datos
    const emailElement = document.getElementById('perfilEmail');
    const passElement = document.getElementById('perfilPass');

    if(emailElement) emailElement.innerText = correo;
    if(passElement) passElement.innerText = pass;
});

function cerrarSesion() {
    if(confirm("Cerrar Sesion")) {
        // Borramos la memoria al salir por seguridad
        localStorage.clear();
        window.location.href = 'index.html';
    }
}