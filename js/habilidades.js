function candidatosCompatibles(oferta, candidatos) {
    oferta = oferta.map((skill) => skill.toLowerCase());
    const candidatosValidos = [];
    const cantidadSkillsNecesarias = Math.floor(oferta.length * 0.7);

    candidatos.forEach((candidato) => {
        const skillsCompatibles = candidato.skills.filter((skill) =>
            oferta.includes(skill.toLowerCase())
        );

        if (skillsCompatibles.length >= cantidadSkillsNecesarias) {
            candidatosValidos.push(candidato.id);
        }
    });
    if (typeof candidatosValidos[0] === "number") {
        return candidatosValidos.sort((a, b) => a - b);
    }
    return candidatosValidos.sort();
}
// Ejemplo de prueba
console.log(candidatosCompatibles(
    ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
    [
      { id: 1, skills: ['JavaScript', 'HTML', 'CSS'] },
      { id: 2, skills: ['Java', 'Spring', 'Hibernate'] },
      { id: 3, skills: ['JavaScript', 'React', 'Node.js', 'CSS'] },
      { id: 4, skills: ['JavaScript', 'HTML'] },
      { id: 5, skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'] },
    ]
));
