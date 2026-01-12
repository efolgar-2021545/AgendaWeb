document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Se obtiene lo que utilizamos en correo y contraseña
    const correoInput = document.querySelector('input[type="text"]').value;
    const passwordInput = document.querySelector('input[type="password"]').value;

    // Se guardan los datos para utilizarlos en perfil
    localStorage.setItem('usuarioLogueado', correoInput);
    localStorage.setItem('passwordLogueada', passwordInput);

    // Redirigimos a la pantalla de contactos
    window.location.href = 'contactos.html';
});