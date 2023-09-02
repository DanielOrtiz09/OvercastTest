document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
    const signupForm = document.getElementById("signup");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-nombre").value;
        const password = document.getElementById("login-contraseña").value;
        
        if (username === "admin" && password === "admin") {
            window.location.href = 'pokedex.html';
        } else {
            alert("El usuario no es correcto, intenta con el usuario 'admin' y contraseña 'admin'");
        }
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("signup-nombre").value;
        const password = document.getElementById("signup-contraseña").value;
        console.log(`Se ha registrado: ${username}, su contraseña es "${password}"`);
    });
});