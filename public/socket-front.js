import { alertERedirect, atualizaTextoEditor } from "./documento.js";

const socket = io();


// FUNÇÃO DISPARA O EVENTO COM NOME DO DOCUMENTO
function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);

    });
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_documento", (texto) => {
    atualizaTextoEditor(texto);
});

socket.on("texto_editor_clientes", (texto) => {
    //console.log(texto);
    atualizaTextoEditor(texto);

});

function emitirExcluirDocumento(nome) {
    socket.emit("excluir_documento", nome);

}

socket.on("excluido_sucesso", (nome) => {
    alertERedirect(nome);
});


export { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento };

