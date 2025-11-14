import { emitirTextoEditor, selecionarDocumento } from "./socket-front.js";

// CAPTURA OS PARAMETROS DA URL
const parametrosUrl = new URLSearchParams(window.location.search);

//CAPTURA O NOME DO DOCUMENTO PASSADO VIA URL EXEMPLO ?nome=JavaScript
const nomeDocumento = parametrosUrl.get('nome');

//CAPTURA O ATRIBUTO  HTML QUE CONTEM O TITULO DO DOCUMENTO
const tituloDocumento = document.getElementById("titulo-documento");

const textoEditor = document.getElementById("editor-texto");

//ATUALZA O TITULO DO DOCUMENTO
tituloDocumento.textContent = nomeDocumento || "Documento sem Título";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    //console.log('Telca')
    emitirTextoEditor(
        {
            texto: textoEditor.value,
            nomeDocumento,
        }
    );
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export { atualizaTextoEditor };

