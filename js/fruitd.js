function frutaEmpacadaCorrectamente(entrada, salida) {
  for (let i = 0; i < salida.length; i++) {
    if (salida[i] !== entrada[entrada.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const entradaStr = prompt("Ingresa las frutas de ENTRADA :");
const salidaStr = prompt("Ingresa las frutas de SALIDA :");

const entrada = Array.from(entradaStr);
const salida = Array.from(salidaStr);

if (frutaEmpacadaCorrectamente(entrada, salida)) {
  alert("La secuencia de salida es válida.");
} else {
  alert("La secuencia de salida no es válida.");
}
  