
function validar(){
 
 var nombre, apellido, cedula, telefono, correo, expresion;
 nombre= document.getElementById("nombre").value;
 apellido = document.getElementById("apellido").value;
 cedula= document.getElementById("cedula").value;
 telefono= document.getElementById("telefono").value;
 correo= document.getElementById("correo").value;

expresion = /\w+@\w+\.+[a-zA-Z+*/0-9-]/;


 if(nombre === "" || nombre.length>25  || nombre.length<3){
 	alert ("El campo nombre es obligatorio \nSolo puede contener letras \n Maximo de letras 25 \n Minimo de letras 3");
 	return false;
 }

 if(apellido === "" || apellido.length>25  || apellido.length<3){
 	alert ("El campo apellido es obligatorio \nSolo puede contener letras \n Maximo de letras 25 \n Minimo de letras 3");
 	return false;
 }

 
 if(cedula === "" || cedula.length<7  || cedula.length>8){
 	alert ("El campo cedula es obligatorio \n Maximo de numeros 14 \n Minimo de numeros 11");
 	return false;
 }else if ( isNaN(cedula) ) {
    alert(" El Campo Cedula:\nsolo puede contener numeros.");
    return false;
}

if (telefono == "" || telefono.length > 14 || telefono.length < 11  ) {
alert(" El campo telefono es obligatorio\n Maximo de letras 14 \n Minimo de letras 11");
            return false;
            }else
            if ( !(/^[0-9\s-]+$/.test(telefono))) {
                 alert(" El Campo Telefono:\n-Solo puede Contener Numeros, Guiones y Espacios.");
                    return false;

            }

 if(  correo == ""  ) {
                alert(" El campo correo es obligatorio");
                return false;
            }else
            if ( (/^[a-zA-Z+*/@0-9-]+$/.test(correo))) {
                 alert(" El Campo Correo:\n~Debe tener el @.com ");
                    return false;

            }

 if(!document.querySelector('input[name="hm"]:checked')) {
              alert("Debe seleccionar el Genero");
               return false;
              } else {  
					 alert("¡Los datos duministrados son correctos! ");
                    return true;
                }   




}
