function $(element){
    return document.querySelector(element);
}

function showMessage(message) {
    const defaultMessage = "Ingresa el texto que desees encriptar o desencriptar.";
    $outputText.innerText = message.length > 0 ? message : defaultMessage;
    isHideMessageOutputInfo(message.length > 0);
}


function isHideMessageOutputInfo(isHide){
    $outputInfo.style.display = (isHide ? "none" : "block");
}

// Selección de Elementos
const $inputText = $('#code'); // Obtener el input del usuario
const $outputText = $('.messageOutput__decrypt'); // Obtener el output para mostrar la clave descifrada
const $btnEncrypt = $('#EncryptButton'); // Obtener el botón de encriptado
const $outputInfo = $('.messageOutput__info'); //  Obtener el elemento de información del mensaje cifrado

//  Evento click sobre el botón de Encriptación
$btnEncrypt.addEventListener('click', (e) => {
    // Obtener el valor del input al hacer clic en el botón
    const inputUser = $inputText.value;

    // Mostar el mensaje
    showMessage(inputUser);
});
