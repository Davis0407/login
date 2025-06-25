function Login(){
 const Nombre = document.getElementById("Nombre").value;
 const clave  = document.getElementById("clave").value;
 
  if (Nombre === "Coyote" & clave === "123" ){
    window.location.href="prueba.html";
  }else{
   alert("El Nombre o clave es Incorrecta");
 }
}

function Registrar(){

     const Nombre = document.getElementById("Nombre").value;
     const clave  = document.getElementById("clave").value;
     console.log("Variables");
     if(Nombre != "" & clave != "" ){
        alert("Usuario"+Nombre +"Registrado");
    }else{
        alert("Rellena baboso");
    }

}