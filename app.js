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

//ver el arreglo con los nuevos nombres
    console.log("amigos",amigos);
}else {

    alert("Por favor, ingrese un nombre válido.")
}
}
agregarAmigo();

