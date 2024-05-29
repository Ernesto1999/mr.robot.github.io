function sumar(index, targetIndex) {
  var valorActual = parseInt(document.getElementById("valor" + index).innerText);
  var targetValor = parseInt(document.getElementById("valor" + targetIndex).innerText);
  
  document.getElementById("valor" + index).innerText = valorActual + 1;
  document.getElementById("valor" + targetIndex).innerText = targetValor + 1;
}
function restar(index, targetIndex) {
  var valorActual = parseInt(document.getElementById("valor" + index).innerText);
  var targetValor = parseInt(document.getElementById("valor" + targetIndex).innerText);
  
  if (valorActual > 0) {
    document.getElementById("valor" + index).innerText = valorActual - 1;
    document.getElementById("valor" + targetIndex).innerText = targetValor - 1;
  }
}
function calcularTotal() {
    var total = 0;
    var filas = document.querySelectorAll('#customers tr');
    for (var i = 1; i < filas.length - 1; i++) {
        var valor = parseInt(filas[i].querySelector('td:last-child').innerText);
        total += valor;
    }
    // Actualizamos el contenido de la celda "total"
    document.getElementById('total').innerText = total;
}

// Llama a la función calcularTotal() después de que se cargue el contenido HTML
window.onload = calcularTotal;
