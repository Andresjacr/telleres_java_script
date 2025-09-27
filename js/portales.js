function portalFueraDeFase(portales) {
  const string = portales.toLowerCase().split("");
  const obj = {};

  for (let i = 0; i < string.length; i++) {
    obj[string[i]] = (obj[string[i]] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(portalFueraDeFase("xyxyxy"));       
console.log(portalFueraDeFase("quasar"));       
console.log(portalFueraDeFase("aabbccddeeffg"));
console.log(portalFueraDeFase("abacaba"));      
console.log(portalFueraDeFase("aabbccddeeffgg"));
