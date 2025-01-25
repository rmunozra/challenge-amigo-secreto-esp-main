let amigos = [];
//funcion para agregar amigo
function agregarAmigo(){
// obtner el valor del id "amigo"
   let nombre= document.getElementById("amigo").value;
//verificar que ne esté vacio el campo 
if (nombre.trim() !== ""){
//agrega el nombre al arreglo
    amigos.push(nombre.trim());
 //limpia el campo
    document.getElementById("amigo").value="";
    actualizaAmigos(amigos);
//ver el arreglo con los nuevos nombres
    console.log("amigos",amigos);
}else {
    alert("Por favor, ingrese un nombre válido.")
}
}
// Función para actualizar la lista de amigos en el DOM
function actualizaAmigos(amigos) {
   const lista = document.getElementById('listaAmigos');
   lista.innerHTML = ''; // Limpiar la lista actual

   amigos.forEach(amigo => {
   const li = document.createElement('li');
   li.textContent = amigo; // Agregar el nombre del amigo como texto del <li>
   lista.appendChild(li);
    });
}

// Función para sortear amigos
 function sortearAmigo(){
//Valida si hay amigos en el arreglo
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade al menos un amigo.");
        return;
    }
//seleccionar indice aleatoreo
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
//msotrar el nombre seleccionado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // limpia el resultado
    const li = document.createElement ('li')
    li.textContent = `Amigo seleccionado: ${amigos[indiceAleatorio]}`;
    resultado.appendChild(li);
//mostrar en consola
    console.log("Amigo sorteado", amigos[indiceAleatorio]);

 }
