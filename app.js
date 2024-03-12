const campoTexto = document.querySelector("#ingresoTexto");
const campoMensaje = document.querySelector("#mensajeEncriptador");
const matrizCodigo = [["i","imes"],
                     ["u", "ufat"],
                    ["e", "enter"],
                    ["a", "ai"],
                    ["o", "ober"]];
const validar = /^[a-z ñ\s]+$/;

function btnEncriptar() {
    // Comprueba si el campo de texto está vacío
    if (campoTexto.value === "" || campoTexto.length === 0){
        // Si está vacío, muestra un mensaje de error con SweetAlert
        Swal.fire({
            title: "Error",
            text: "El mensaje está vacio",
            icon: "question",
          });
    } else {
        // Si el campo de texto no está vacío, comprueba si cumple con el patrón de validación
        if (validar.test(campoTexto.value)){
            // Si cumple con el patrón de validación, encripta el texto utilizando la función 'encriptar'
            const textoNuevo = encriptar(campoTexto.value);
            // Asigna el texto encriptado al campo de mensaje
            return campoMensaje.value = textoNuevo;
        }else {
            // Si no cumple con el patrón de validación, muestra un mensaje de error con SweetAlert
            return Swal.fire({
                title: "Error",
                text: "No se permite mayúsculas ni acentos",
                icon: "error",
              });
        }  
        }
    }

// Esta función se encarga de encriptar el texto ingresado por el usuario
function encriptar(fraseEncriptada){
    // Itera sobre la matriz de códigos y reemplaza cada letra según la encriptación
    for (let i = 0; i < matrizCodigo.length; i++){
        if (fraseEncriptada.includes(matrizCodigo[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        // Limpia el campo de texto después de encriptar
        document.getElementById("ingresoTexto").value = "";
    }
    // Realiza los cambios en los elementos de la interfaz de usuario
    cambiosElementos();
    return fraseEncriptada;
}

function btnDescencriptar(){
    // Comprueba si el campo de texto está vacío
    if (campoTexto.value === "" || campoTexto.length === 0){
        // Si está vacío, muestra un mensaje de error con SweetAlert
        Swal.fire({
            title: "Error",
            text: "El mensaje está vacio",
            icon: "question",
          });
    } else {
        // Si el campo de texto no está vacío, comprueba si cumple con el patrón de validación
        if (validar.test(campoTexto.value)){
            // Si cumple con el patrón de validación, desencripta el texto utilizando la función 'descencriptar'
            const textoNuevo = descencriptar(campoTexto.value);
            // Asigna el texto desencriptado al campo de mensaje
            return campoMensaje.value = textoNuevo;
        }else {
            // Si no cumple con el patrón de validación, muestra un mensaje de error con SweetAlert
            return Swal.fire({
                title: "Error",
                text: "No se permite mayúsculas ni acentos",
                icon: "error",
              });
        }  
        }
    }

// Esta función se encarga de descencriptar el texto ingresado por el usuario
function descencriptar( fraseDescencriptada){
    // Itera sobre la matriz de códigos y reemplaza cada letra según la descencriptación
    for (let i = 0; i < matrizCodigo.length; i++){
        if (fraseDescencriptada.includes(matrizCodigo[i][0])){
            fraseDescencriptada = fraseDescencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    // Limpia el campo de texto después de descencriptar
    document.getElementById("ingresoTexto").value = "";
    // Realiza los cambios en los elementos de la interfaz de usuario
    cambiosElementos();
    return fraseDescencriptada;
}

function cambiosElementos() {
    document.getElementById("imagenBuscador").style.display = "none";
    document.getElementById("parrafoMensaje").style.display = "none";
    document.getElementById("botonCopiar").style.display = "block";
    document.getElementById ("descifrar").classList.add("ajustar");
    document.getElementById("mensajeEncriptador").classList.add("ajustar");
    return;
}

function copiar() {
    if (mensajeEncriptador.value === "" || mensajeEncriptador.length === 0){
        Swal.fire({
            title: "Error",
            text: "El mensaje está vacio",
            icon: "question",
          });
    } else {
    let textoNuevo = mensajeEncriptador;
    navigator.clipboard.writeText(textoNuevo.value); 
    console.log(textoNuevo.value)
    /*alert("texto copiado con éxito");*/
    Swal.fire({
        title: 'copiado',
        text: '¡Texto copiado con éxito!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    document.getElementById("mensajeEncriptador").value = "";
    return; 
}
}























 /* es una opcion si quiero mostrar todo los elementos de campo decifrar otra vez*/
    /*document.getElementById("imagenBuscador").style.display = "block";*/
    /*document.getElementById("parrafoMensaje").style.display = "block";*/
    /*document.getElementById("botonCopiar").style.display = "none";*/
    /*document.getElementById ("descifrar").classList.remove("ajustar");*/
    /*document.getElementById("mensajeEncriptador").classList.remove("ajustar");*/

 


  


    
    









