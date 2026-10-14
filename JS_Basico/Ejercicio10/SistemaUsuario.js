// Creamos un Array de usuarios con nombres, id y email 
const usuarios = [
    { id: 1, nombre: "Juan", email: "juan@gmail.com", edad: 20 },
    { id: 2, nombre: "Pedro", email: "pedro@gmail.com", edad: 18 },
    { id: 3, nombre: "Carlos", email: "carlos@gmail.com", edad: 19 },
    { id: 4, nombre: "Luis", email: "luis@gmail.com", edad: 27 },
    { id: 5, nombre: "Maria", email: "maria@gmail.com", edad: 39 },
    { id: 6, nombre: "Jose", email: "jose@gmail.com", edad: 16 },
    { id: 7, nombre: "Antonio", email: "antonio@gmail.com", edad: 15 },
];

// Listar usuarios
function listarUsuarios(usuarios) {
    console.log("Listar Usuarios");
    return usuarios.map(usuario => usuario.nombre);
}

// Buscar usuario por id
function buscarId(usuarios, id) {
    console.log("Buscar usuario por id");
    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        return "Usuario no encontrado";
    }
     
   return `${usuario.id} - ${usuario.nombre}`;
}

// Buscar usuario por nombre
function buscarNombre(usuarios, nombre){
    console.log("Buscar usuario por nombre");
    const usuario = usuarios.find(usuario => usuario.nombre === nombre);

    if(!usuario){
        return "El usuario no se ha encontrado";
    }

    return `${usuario.id} - ${usuario.nombre}`;
}

// Crear usuario (Orden corregido: usuarios, nombre, email, edad, id)
function crearUsuario(usuarios, nombre, email, edad, id) {
    console.log("Crear usuario");

    if (!nombre || !email) {
        return "El nombre y el email son requeridos";
    }

    if (edad !== undefined && edad < 0) {
        return "La edad no puede ser negativa";
    }

    if (usuarios.some(u => u.nombre === nombre)) {
        return "El usuario ya existe";
    }

    if (id !== undefined && usuarios.some(u => u.id === id)) {
        return "Ya existe un usuario con ese id";
    }

    const nuevoId = id ?? Math.max(0, ...usuarios.map(u => u.id)) + 1;

    usuarios.push({ id: nuevoId, nombre, email, edad });

    return `El usuario ${nombre} ha sido creado con el id ${nuevoId}`;
}

// Eliminar usuario
function eliminarUsuario(usuarios, id){
    console.log("Eliminar usuario");
    const usuario = usuarios.find(usuario => usuario.id === id);

    if(!usuario){
        return "El usuario no existe";
    }

    usuarios.splice(usuarios.indexOf(usuario), 1);

    return `El usuario ${usuario.nombre} ha sido eliminado`;
}

// Actualizar usuario
function actualizarUsuario(usuarios, id, accion, nuevoNombre){
    console.log("Actualizar usuario");
    const usuario = usuarios.find(usuario => usuario.id === id);

    if(!usuario){
        return "El usuario no existe";
    }

    if(usuario.nombre === "Juan"){
        return "No puedes actualizar con Juan";
    }

    if(accion === "eliminar"){
        usuarios.splice(usuarios.indexOf(usuario), 1);
        return `El usuario ${usuario.nombre} ha sido eliminado`;
    }

    if(accion === "editar"){
        usuario.nombre = nuevoNombre || usuario.nombre;
        return `El usuario ${usuario.nombre} ha sido editado`;
    }

    return "Esta acción no es válida";
}
    // Mostrar Lista de suarios
   //console.log(listarUsuarios(usuarios))

   // Buscar susario por id
   //console.log(buscarId(usuarios, 18))

   // Buscar susario por nombre
   //console.log(buscarNombre(usuarios, "Juan"))

   // Crear susario
   //console.log(crearUsuario(usuarios, "Felipe", "Felipe@gmail.com", 18 ,  8))

   //console.log(buscarId(usuarios, 8))

   //console.log(listarUsuarios(usuarios))

   // Eliminar susario
   console.log(eliminarUsuario(usuarios, 2))

   console.log(listarUsuarios(usuarios))

   