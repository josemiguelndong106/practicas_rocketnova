// creamos un araay cde productos con nombres y su stock 
const productos = [
    { nombre: "iPhone 14", stock: 10, id: 1},
    { nombre: "iPhone 15", stock: 5, id: 2},
    { nombre: "iPhone 16", stock: 8, id: 3},
    { nombre: "iPhone 17", stock: 2, id: 4},
    { nombre: "iPhone 18", stock: 1, id: 5},
    { nombre: "iPhone 19", stock: 0, id: 6},
]

// 1--Listar Productso 
function listarProductos(productos) {
    console.log("Listar Productos");
    return productos.map(productos => productos.nombre)
}


// 2--Buscamos la id de un producusto por su nombre
function buscarId(productos, nombre) {
    console.log("Buscar Id");
    const producto = productos.find(producto => producto.nombre === nombre)

    if (!producto) {
        return "Producto no encontrado"
    }
    
   return `El id de este producto ${producto.nombre} es ${producto.id}`;
}


// 3-- Mostrar prodctos con un stock  0
function mostrarProductos(productos) {
    console.log("Mostrar Productos con stock 0");
    return productos.filter(producto => producto.stock === 0)
}


// 4-- Buscamos un producto por su id 
function buscarProducto(productos, id) {
    console.log("Buscar Producto por su id");
    "El nombre del producto con id" + id + " es"
    const producto = productos.find(producto => producto.id === id)

    if (!producto) {
        return "Producto no encontrado"
    }
    
   return `${producto.id} - ${producto.nombre}`
}

//listado de productos
console.log(listarProductos(productos))

//buscamos el id de un producto
console.log(buscarId(productos, "iPhone 15"))

//mostramos los productos con stock mayor a 0
console.log(mostrarProductos(productos))

//buscamos un producto por su id
console.log(buscarProducto(productos, 2))