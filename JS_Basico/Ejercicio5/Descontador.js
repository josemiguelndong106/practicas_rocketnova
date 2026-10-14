// creamos un array de productos y sus descuentos del 20%
const productos = [

    { nombre: "iPhone 14", precio: 1400, cantidad: 3, descuento: 0.2 },
    { nombre: "iPhone 15", precio: 1600, cantidad: 1, descuento: 0.2 },
    { nombre: "iPhone 16", precio: 1800, cantidad: 3, descuento: 0.2 },
    { nombre: "iPhone 17", precio: 2000, cantidad: 1, descuento: 0.2 },
    { nombre: "iPhone 18", precio: 2200, cantidad: 2, descuento: 0.2 },

]

// creamos una funcion que calcule el total de los productos con el descuento aplicado a cada uno
function calcularTotal(productos) {
    let total = 0
    const productosConDescuento = []

    for (let i = 0; i < productos.length; i++) {
        const precioFinal = productos[i].precio * (1 - productos[i].descuento)

        total += precioFinal * productos[i].cantidad

        // copiamos el producto y actualizamos solo el precio
        productosConDescuento.push({ ...productos[i], precio: precioFinal })
    }

    return { total, productos: productosConDescuento }
}

const resultado = calcularTotal(productos)

console.log(resultado.total)    
console.log(resultado.productos)