import { emitirTextoEditor } from "./socket-front.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    //console.log('Telca')
    emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export { atualizaTextoEditor };

