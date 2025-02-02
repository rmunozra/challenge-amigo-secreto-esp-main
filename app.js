let amigos = []; // Arreglo para almacenar los amigos

// Función para agregar amigo
function agregarAmigo() {
   // Obtener el valor del id "amigo"
   let nombre = document.getElementById("amigo").value;
   
   // Verificar que no esté vacío el campo
   if (nombre.trim() !== "") {
      // Agrega el nombre al arreglo
      amigos.push(nombre.trim());
      
      // Limpiar el campo
      document.getElementById("amigo").value = "";
      
      // Actualizar la lista de amigos
      actualizaAmigos(amigos);
      
      // Ver el arreglo con los nuevos nombres
      console.log("amigos", amigos);
   } else {
      alert("Por favor, ingrese un nombre válido.");
   }
}

// Función para actualizar la lista de amigos en el DOM
function actualizaAmigos(amigos) {
   let lista = document.getElementById('listaAmigos'); // Usar let para 'lista'
   lista.innerHTML = ''; // Limpiar la lista actual

   amigos.forEach(amigo => {
      let li = document.createElement('li'); // Usar let para 'li'
      li.textContent = amigo; // Agregar el nombre del amigo como texto del <li>
      lista.appendChild(li);
   });
}

// Función para sortear amigos
function sortearAmigo() {
   // Valida si hay amigos en el arreglo
   if (amigos.length === 0) {
      alert("No hay amigos para sortear. Por favor, añade al menos un amigo.");
      return;
   }
   
   // Seleccionar índice aleatorio
   let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Usar let para 'indiceAleatorio'
   
   // Mostrar el nombre seleccionado
   let resultado = document.getElementById('resultado'); // Usar let para 'resultado'
   resultado.innerHTML = ''; // Limpiar el resultado
   
   let li = document.createElement('li'); // Usar let para 'li'
   li.textContent = `Amigo seleccionado: ${amigos[indiceAleatorio]}`;
   resultado.appendChild(li);
   
   // Mostrar en consola
   console.log("Amigo sorteado", amigos[indiceAleatorio]);
}
