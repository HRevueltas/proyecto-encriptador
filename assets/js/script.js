const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonEncriptar = document.querySelector(".btn-encriptar");
const contenedorParrafo = document.querySelector(".contenedor-parrafo");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar(stringEncriptado) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return stringEncriptado;
}

function btnEncriptar() {

    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    contenedorParrafo.style.display = "none";
    botonCopiar.style.visibility = "visible";

}



function desencriptar(stringDesencriptado) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return stringDesencriptado;
}

function btnDesencriptar() {

    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    botonCopiar.style.visibility = "visible";
}

const botonCopiar = document.querySelector('.copiar');

botonCopiar.addEventListener('click', () => {
    const mensaje = document.querySelector('.mensaje');
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
});

window.addEventListener('load', () => {
    textArea.value = '';
    mensaje.value = '';
});