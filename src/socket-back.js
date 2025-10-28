import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log("Um Cliente se conectou... Cliente: " + socket.id);

    socket.on("texto_editor", (texto) => {
        //console.log(texto);
        
        //ENVIA O EVENTO PARA TODOS OS CLIENTES
        //io.emit("texto_editor_clientes", texto);

        //ENVIA O EVENTO PARA TODOS OS CLIENTES, EXCETO ELE MESMO
        socket.broadcast.emit("texto_editor_clientes", texto);
    })
});