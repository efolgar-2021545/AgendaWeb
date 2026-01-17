document.addEventListener('DOMContentLoaded', function () {
    const formNuevoContacto = document.getElementById('formNuevoContacto');

    if (formNuevoContacto) {
        formNuevoContacto.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita recargar la página
            formNuevoContacto.reset(); // Borra los datos
            console.log("Campos limpiados correctamente.");
        });
    }
});