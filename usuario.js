document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');

    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtener los valores de usuario y contraseña
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí puedes realizar la validación del usuario y la contraseña
        if (username === 'a' && password === 'a') {
            // Si la validación es exitosa, redirige a la página de proyecto
            window.location.href = 'proyecto.html';
        } else {
            // Si la validación falla, puedes mostrar un mensaje de error o tomar otra acción apropiada
            alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    });
});
