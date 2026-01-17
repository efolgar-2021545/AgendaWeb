const datosContactos = {
    "1": { nombre: "Javier Delgado", tel: "41654604", correo: "javierdelgado@gmail.com" },
    "2": { nombre: "Mariana Alarcón", tel: "36811460", correo: "marianaalarcon@gmail.com" },
    "3": { nombre: "Ricardo Palacios", tel: "67346497", correo: "ricardopalacios@gmail.com" },
    "4": { nombre: "Laura Castillo", tel: "98124753", correo: "lauracastillo@gmail.com" },
    "5": { nombre: "Fernando García", tel: "89653421", correo: "fernandogarcia@gmail.com" }
};

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id && datosContactos[id]) {
        const c = datosContactos[id];
        document.getElementById('nombreDetalle').innerText = c.nombre;
        document.getElementById('telefonoDetalle').innerText = c.tel;
        document.getElementById('correoDetalle').innerText = c.correo;

        if (parseInt(id) > 2) {
            const badge = document.getElementById('badgeFavorito');
            if (badge) badge.style.display = 'none';
        }
    }

    document.getElementById('btnEditar').addEventListener('click', (e) => e.preventDefault());
    document.getElementById('btnEliminar').addEventListener('click', (e) => e.preventDefault());
});