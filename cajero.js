function consultarSaldo() {
    var cuentas = [
        { nombre: "gisela", saldo: 500, password: "popitopiketiras" },
        { nombre: "yair", saldo: 300, password: "forza1" },
        { nombre: "sofia", saldo: 67, password: "kpopbts" }
    ];

    var nombreCuentaActual = localStorage.getItem('nombreCuentaActual');
    var cuentaActual = cuentas.find(cuenta => cuenta.nombre === nombreCuentaActual);
    var elementoSaldo = document.getElementById('infoSaldo');

    if (cuentaActual) {
        elementoSaldo.innerHTML = 'Tu saldo actual es: $' + cuentaActual.saldo;
    } else {
        elementoSaldo.innerHTML = 'No hay una sesión activa o cuenta seleccionada.';
    }
}

//Para ingresar

function ingresarMonto() {
    var monto = parseFloat(document.getElementById('montoAIngresar').value);
    var elementoResultado = document.getElementById('resultadoIngreso');
  
    if (isNaN(monto) || monto <= 0) {
      elementoResultado.innerHTML = 'Por favor, ingresa un monto válido.';
      return;
    }
  
    var cuentaActual = cuentas.find(cuenta => cuenta.nombre === localStorage.getItem('nombreCuentaActual'));
  
    var saldoActual = cuentaActual.saldo;
    var nuevoSaldo = saldoActual + monto;
  
    if (nuevoSaldo > 990) {
      elementoResultado.innerHTML = 'No puedes tener más de $990 en tu cuenta. Transacción no realizada.';
    } else if (nuevoSaldo < 10) {
      elementoResultado.innerHTML = 'La cuenta no puede tener menos de $10. Transacción no realizada.';
    } else {
      cuentaActual.saldo = nuevoSaldo;
      elementoResultado.innerHTML = 'Transacción exitosa. Tu nuevo saldo es: $' + cuentaActual.saldo;

      localStorage.setItem('saldoActual', cuentaActual.saldo);

        // Actualizamos el saldo en el elemento HTML
        document.getElementById('infoSaldo').innerHTML = 'Tu saldo actual es: $' + cuentaActual.saldo;
    }
  }

  //Para retirar

  function retirarMonto() {
    var monto = parseFloat(document.getElementById('montoARetirar').value);
    var elementoResultado = document.getElementById('resultadoRetiro');
  
    if (isNaN(monto) || monto <= 0) {
      elementoResultado.innerHTML = 'Por favor, ingresa un monto válido.';
      return;
    }
  
    var cuentaActual = cuentas.find(cuenta => cuenta.nombre === localStorage.getItem('nombreCuentaActual'));
  
    var saldoActual = cuentaActual.saldo;
    var nuevoSaldo = saldoActual - monto;
  
    if (nuevoSaldo > 990) {
      elementoResultado.innerHTML = 'No puedes tener más de $990 en tu cuenta. Transacción no realizada.';
    } else if (nuevoSaldo < 10) {
      elementoResultado.innerHTML = 'La cuenta no puede tener menos de $10. Transacción no realizada.';
    } else {
      cuentaActual.saldo = nuevoSaldo;
      elementoResultado.innerHTML = 'Transacción exitosa. Tu nuevo saldo es: $' + cuentaActual.saldo;
    
      localStorage.setItem('saldoActual', cuentaActual.saldo);

      // Actualizamos el saldo en el elemento HTML
      document.getElementById('infoSaldo').innerHTML = 'Tu saldo actual es: $' + cuentaActual.saldo;
    }
  }