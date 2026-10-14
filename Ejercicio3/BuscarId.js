//creamos un array de objetos con nombre e id 

const personas = [

    { nombre: "Lamine", apellidos: "Ebana", edad: 19, id: 1 },
    { nombre: "Kylian", apellidos: "Mbeppe", edad: 27, id: 2 },
    { nombre: "Marcos", apellidos: "LLorente", edad: 31, id: 3 },
    { nombre: "Cristiano", apellidos:"Ronaldo", edad: 42, id: 4 },
    { nombre: "Lionel", apellidos: "Messi", edade: 39, id: 5 },
    { nombre: "Florentino", apellidos: "Perez", edade: 80, id: 6 }

]


// creamos una funcio que al recibir un nombre devuelva el id y tambien el nombre
function buscarId(personas, nombre) {
    const persona = personas.find(persona => persona.nombre === nombre)

    if (!persona) {
        return "Persona no encontrada"
    }
    
   return `${persona.id} - ${persona.nombre}`
}

console.log(buscarId(personas, "Lamine"))
console.log(buscarId(personas, "Kylian"))
console.log(buscarId(personas, "Marta"))
