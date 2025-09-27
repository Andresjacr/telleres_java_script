let valores = prompt("Coloca tues hechisos aqui: ☽☾♁⚕⚡")
function decodeSpell(valores) {
    const symbolMap = {'☽': 1,'☾': 5,'♁': 10,'⚕': 50,'⚡': 100,};
    let total = 0;
    let i = 0;
  
    // Recorremos la cadena
    while (i < valores.length) {
      const current = symbolMap[valores[i]];
      const next = symbolMap[valores[i + 1]];
  
      // Si el valor actual es undefined, retornamos NaN
      if (current === undefined) return NaN;
  
      // Regla de resta si el siguiente es mayor
      if (next !== undefined && current < next) {
        total += next - current;
        i += 2;
      } else {
        total += current;
        i += 1;
      }
    }
    return total;
  }
  alert("tu hechizo es de:"+decodeSpell (valores))