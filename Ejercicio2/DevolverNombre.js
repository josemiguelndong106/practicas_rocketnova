// Creamos una lista de personas con nombres apellidos y edades

const personas = [

    { nombre: "Lamine", apellidos: "Ebana", edad: 19 },
    { nombre: "Kylian", apellidos: "Mbeppe", edad: 27},
    { nombre: "Marcos", apellidos: "LLorente", edad: 31},
    { nombre: "Cristiano", apellidos:"Ronaldo", edad: 42 },
    { nombre: "Lionel", apellidos: "Messi", edade: 39},
    { nombre: "Florentino", apellidos: "Perez", edade: 80} 

]

//creamos una funcion que reciba a una persona y devuelva su nombre
function DevolverNombre( personas ){
    return personas.map(personas => personas.nombre)

}

console.log(DevolverNombre(personas))