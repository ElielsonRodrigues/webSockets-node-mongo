const socket = io();

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    //console.log('Telca')
    socket.emit("texto_editor", textoEditor.value);

});


socket.on("texto_editor_clientes", (texto) => {
    //console.log(texto);
    textoEditor.value = texto;
});