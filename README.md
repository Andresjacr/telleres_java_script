1. El códice de Arkanus

Descripción:
Decodifica una cadena de símbolos mágicos según un sistema similar a los números romanos.

Función:

decodeSpell(cadena)


Ejemplo:

decodeSpell("☽☽☽");   // 3
decodeSpell("☽☾");     // 4
decodeSpell("☽☽☽⚡"); // 101
decodeSpell("⚕.♒");   // NaN

📌 2. Archivos comprometidos

Descripción:
A partir del timestamp de la última descarga segura y los registros de modificaciones de drones,
devuelve los IDs de archivos comprometidos (sin repetir, ordenados de menor a mayor).

Función:

getCompromisedFiles(lastSafeDownload, droneLogs)


Ejemplo:

const lastSafeDownload = 1670000000;
const droneLogs = [
  [42, 1670000500],
  [13, 1670000000],
  [8, 1670000700],
  [8, 1670000001],
  [99, 1669999999]
];

getCompromisedFiles(lastSafeDownload, droneLogs); 
// ➝ [8, 42]

📌 3. Frases plagiadas

Descripción:
Detecta si un estudiante ha plagiado frases de una base, ignorando mayúsculas/minúsculas,
espacios al inicio/final y puntuación al final (. ! ?).

Función:

detectarPlagio(base, frasesEstudiante)


Ejemplo:

const base = [
  "El conocimiento es poder.",
  "Aprender nunca es una pérdida de tiempo!",
  "Programar es divertido"
];

const frases = [
  "el conocimiento es poder",
  " Aprender nunca es una pérdida de tiempo ",
  "programar es divertido.",
  "La práctica hace al maestro"
];

detectarPlagio(base, frases);
// ➝ ["el conocimiento es poder", " Aprender nunca es una pérdida de tiempo ", "programar es divertido."]

📌 4. Frutas envasadas

Descripción:
Verifica si la secuencia de frutas empacadas respeta el orden LIFO (pila).

Función:

frutaEmpacadaCorrectamente(entrada, salida)


Ejemplo:

frutaEmpacadaCorrectamente(
  ["manzana", "banana", "kiwi"],
  ["kiwi", "banana", "manzana"]
); // true

frutaEmpacadaCorrectamente(
  ["manzana", "banana", "kiwi"],
  ["banana", "kiwi", "manzana"]
); // false

📌 5. Habilidades compatibles

Descripción:
Encuentra candidatos que cumplan al menos el 70% de las habilidades requeridas por una oferta laboral.

Función:

candidatosCompatibles(oferta, candidatos)


Ejemplo:

const oferta = ["JavaScript", "React", "Node", "CSS", "Git"];
const candidatos = [
  { id: "juan", skills: ["JavaScript", "React", "Node", "Git"] },
  { id: "ana", skills: ["JavaScript", "CSS", "React", "Node", "Git"] },
  { id: "leo", skills: ["HTML", "CSS"] },
  { id: "lu", skills: ["JavaScript", "Node"] }
];

candidatosCompatibles(oferta, candidatos);
// ➝ ["ana", "juan"]

📌 6. Puertas del portal temporal

Descripción:
Encuentra el índice del primer portal que no se repite.
Si todos se repiten → devuelve -1.

Función:

portalFueraDeFase(string)


Ejemplo:

portalFueraDeFase("xyxyxy");          // -1
portalFueraDeFase("quasar");          // 0
portalFueraDeFase("aabbccddeeffg");   // 12

📌 7. Anagramas

Descripción:
Verifica si dos palabras son anagramas (ignora mayúsculas/minúsculas).

Función:

esAnagrama(palabra1, palabra2)


Ejemplo:

esAnagrama("cinema", "iceman");   // true
esAnagrama("hello", "world");     // false
esAnagrama("Listen", "Silent");   // true
esAnagrama("evil", "vile");       // true

🚀 Tecnologías

JavaScript (ES6+)

Node.js o Navegador (dependiendo del ejercicio)
