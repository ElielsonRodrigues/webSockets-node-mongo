import { atualizaTextoEditor } from "./index.js";

const socket = io();

function emitirTextoEditor(texto) {
    socket.emit("texto_editor", texto);
}


socket.on("texto_editor_clientes", (texto) => {
    //console.log(texto);
    atualizaTextoEditor(texto);

});
export { emitirTextoEditor };

