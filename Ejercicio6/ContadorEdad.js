// lista de personas con distintas edades
const nombres = [
    {nombre: "LUcas", edad: 20},
    {nombre: "Pedro", edad: 21},
    {nombre: "Marcos", edad: 19},
    {nombre: "Meteo", edad: 18},
    {nombre: "Maria", edad: 17},
    {nombre: "Laura", edad: 16},
    {nombre: "Antonio", edad: 15},
]

// creamos una funcion que reciba el array y devuelva cuantos son mayores tienen mas de 17 y cuantos no 
function contarEdad(personas) {
    let mayores = 0
    let menores = 0
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad > 17) {
            mayores++
        } else {
            menores++
        }
    }
    return { mayores, menores }
}

console.log(contarEdad(nombres))