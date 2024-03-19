// Función que se encarga de obtener los elementos al ser invocada
function $(element){
    return document.querySelector(element);
}

// Selección de Elementos
const $inputText = $('#code'); // Obtener el input del usuario
const $outputText = $('.messageOutput__decrypt'); // Obtener el output para mostrar la clave descifrada
const $btnEncrypt = $('#EncryptButton'); // Obtener el botón de encriptado
const $btnDesencrypt = $('#DecryptButton'); // Obtener el botón de desencriptado
const $outputInfo = $('.messageOutput__info'); //  Obtener el elemento de información del mensaje cifrado

function showMessage(message) {
    const defaultMessage = "Ingresa el texto que desees encriptar o desencriptar.";
    $outputText.innerText = message.length > 0 ? message : defaultMessage;
    isHideMessageOutputInfo(message.length > 0);
}

// Ocultar el  mensaje de la pantalla si no hay nada escrito
function isHideMessageOutputInfo(isHide){
    $outputInfo.style.display = (isHide ? "none" : "block");
}


//  Evento click sobre el botón de Encriptación
$btnEncrypt.addEventListener('click', (e) => {
    // Obtener el valor del input con el mensaje sin encriptat al hacer clic.
    const inputUser = $inputText.value.toLowerCase();

    // Mostrar el mensaje encriptado
    showMessage(encryptMessage(inputUser));
});

// Evento click sobre el botón de Desencriptado
$btnDesencrypt.addEventListener('click', (e) =>{
    // Obtener el valor del input con el mensaje encriptado al hacer clic.
    const encryptedInputUser = $inputText.value.toLowerCase();

    //Mostrar el mensaje desencriptado
    showMessage(decryptedMessage(encryptedInputUser));
});

// Encriptar Mensaje
function encryptMessage(message){

    /*
    Ejemplo: "gato" -> "gaitober"
    replace(patron, reemplazo);
    Devuelve una nueva cadena
    patrón: Cadena u objeto regex.
      Si es cadena solo cambia la primera aparición.
      Si es regex buscará toda la cadena 
        /e : busca todas las apariciones de la letra 'e'
        /g : Indica que debe hacer un reemplazo global
    */  
    const encryptedMessage = message
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    return encryptedMessage;
};

// Desencriptar Mensaje
function decryptedMessage(encryptedMessage){
    const decryptedMessage = encryptedMessage
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")

    return decryptedMessage;
};
