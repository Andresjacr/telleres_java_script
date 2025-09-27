function detectarPlagio(base, frasesEstudiante) {
    const normalizar = frase =>
      frase
        .trim()
        .replace(/^[¡¿]+/, '')
        .replace(/[\.\!\?]+$/g, '')
        .toLowerCase();
  
    const baseNormalizada = new Set(base.map(normalizar));
  
    return frasesEstudiante.filter(frase =>
      baseNormalizada.has(normalizar(frase))
    );
  }
console.log(detectarPlagio(
    [
      "¡Hola, mundo!",  
        "¿Cómo estás?",
        "Esto es una prueba.",
        "JavaScript es genial."
    ],
    [
      "hola, mundo!",
      "Esto es una prueba",
        "Me gusta programar en JavaScript.",
        "¿Cómo estás?",
        "¡Buenos días!"
    ]
  ));
