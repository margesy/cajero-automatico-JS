var cuentas = [
    { nombre: "gisela", saldo: 500, password: "popitopiketiras" },
    { nombre: "yair", saldo: 300, password: "forza1" },
    { nombre: "sofia", saldo: 67, password: "kpopbts" }
];

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cuentaEncontrada = false;

    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === username && cuentas[i].password === password) {
            cuentaEncontrada = true;
            localStorage.setItem('nombreCuentaActual', cuentas[i].nombre);
            break;
        }
    }

    if (cuentaEncontrada) {
        window.location.href = 'cajero.html'; 
    } else {
        alert('Usuario o contraseña incorrectos, intentalo nuevamente');
    }
});