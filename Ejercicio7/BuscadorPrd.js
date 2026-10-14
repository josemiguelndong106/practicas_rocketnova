// creamos un array de productos con nosmbres y categorias 
const productos = [

    {nombre : "iPhone 14", categoria: "Smartphones"},
    {nombre: "HP Envy 15", categoria: "Laptops"},
    {nombre: "Samsung Galaxy S21", categoria: "Smartphones"},
    {nombre: "lg G7", categoria: "Laptops"},
    {nombew: "Asus Zenbook", categoria: "Laptops"},
]

// Ceeamos una funcion que devuelvo todos los productos de esa categoria
function buscarCategoria(productos, categoria) {
    return productos.filter(producto => producto.categoria === categoria)
}


console.log(buscarCategoria(productos, "Smartphones"))
console.log(buscarCategoria(productos, "Laptops"))
