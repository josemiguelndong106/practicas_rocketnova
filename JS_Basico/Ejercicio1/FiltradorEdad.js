// lista de personas con distintas edades
const nombres = [
    {nombre: "Lucas", edad: 20},
    {nombre: "Pedro", edad: 21},
    {nombre: "Marcos", edad: 19},
    {nombre: "Meteo", edad: 18},
    {nombre: "Maria", edad: 17},
    {nombre: "Laura", edad: 16},
    {nombre: "Antonio", edad: 15},
]

// recibe una persona y devuelve su nombre solamente si tiene más de 17, sino devuelve null
function filtrarEdad(persona) {
    return persona.edad > 17 ? persona.nombre : null
}

// recibe la lista y devuelve los nombres de las personas con más de 17
function filtrarEdadPorArray(personas) {
    return personas
        .filter(p => p.edad > 17)
        .map(p => p.nombre)
}

console.log(filtrarEdad(nombres[0]))   
console.log(filtrarEdadPorArray(nombres)) 