function Anagrama(primeraPalabra, segundaPalabra) {
  if (primeraPalabra.length !== segundaPalabra.length) {
    return false;
  }

  return (
    primeraPalabra.toLowerCase().split("").sort().join("") ===
    segundaPalabra.toLowerCase().split("").sort().join("")
  );
}

const palabra1 = prompt("Ingresa la primera palabra:");
const palabra2 = prompt("Ingresa la segunda palabra:");

if (Anagrama(palabra1, palabra2)) {
  alert(`"${palabra1}" y "${palabra2}" "es anagramas" `);
} else {
  alert(`"${palabra1}" y "${palabra2}" no es anagramas`);
}
