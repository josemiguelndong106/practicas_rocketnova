//Creamos un Array de objetos con productos y precios

const productos = [

    { nombre: "iPhone 14", precio: 1400, cantidad: 3 },
    { nombre: "iPhone 15", precio: 1600, cantidad: 1 },
    { nombre: "iPhone 16", precio: 1800, cantidad: 3 },
    { nombre: "iPhone 17", precio: 2000, cantidad: 1 },
    { nombre: "iPhone 18", precio: 2200, cantidad: 2 },

]

// creamos una funcion que calcule el total de un array de objetos
function calcularTotal(productos) {
    let total = 0
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio * productos[i].cantidad
    }
    return total
}

console.log(calcularTotal(productos))