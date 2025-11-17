import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front.js";

// CAPTURA OS PARAMETROS DA URL
const parametrosUrl = new URLSearchParams(window.location.search);

//CAPTURA O NOME DO DOCUMENTO PASSADO VIA URL EXEMPLO ?nome=JavaScript
const nomeDocumento = parametrosUrl.get('nome');

//CAPTURA O ATRIBUTO  HTML QUE CONTEM O TITULO DO DOCUMENTO
const tituloDocumento = document.getElementById("titulo-documento");
const textoEditor = document.getElementById("editor-texto");
const botaoExcluir = document.getElementById("excluir-documento");

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

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocumento);
});


function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

function alertERedirect(nome) {
    //verifica se a pessoa
    // (cliente esta na mesma sala, se tiver exclui e redireciona)
    if (nome === nomeDocumento) {
        alert(`Documento ${nome} excluido`);
        window.location.href = "/";
    }
}



export { atualizaTextoEditor, alertERedirect };

