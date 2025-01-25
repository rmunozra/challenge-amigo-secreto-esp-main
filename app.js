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
function actualizaAmigos(amigos){
    const lista= document.getElementById('listaAmigos');
    lista.innerHTML='';
amigos.forEach(amigo=> {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);

});
}
