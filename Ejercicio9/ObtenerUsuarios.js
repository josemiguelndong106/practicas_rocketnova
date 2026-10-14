// creamos una funcion para obtner usuarios por una api

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        
        //Convertimos la respuesta a JSON
        const usuarios = await respuesta.json()

        // mostramos los usuarios
        usuarios.forEach(usuario => {
            console.log(`${usuario.id} - ${usuario.name} (${usuario.email})`)
        })

        return usuarios

    } catch (error) {
        console.log(error)
    }
}

obtenerUsuarios()
    