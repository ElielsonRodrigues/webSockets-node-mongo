import io from "./servidor.js";

const documentos = [

    {
        nome: "JavaScript",
        texto: "texto javascript"
    },
    {
        nome: "Node",
        texto: "texto node"
    },
    {
        nome: "Socket.io",
        texto: "texto socket.io"
    }
];

io.on("connection", (socket) => {
    console.log("Um Cliente se conectou... Cliente: " + socket.id);

    //CAPTURANDO EVENTO POR NOME
    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        //console.log(nome)

        //JUNTA TODOS OS CLIENTE COMO NOME DO MESMO DOCUMENTO
        socket.join(nomeDocumento);

        const documento = encontrarDocumento(nomeDocumento);
        //console.log(documento);

        if (documento) {
            devolverTexto(documento.texto);
        }

    });

    socket.on("texto_editor", ({ texto, nomeDocumento }) => {
        //console.log(texto);

        //ENVIA O EVENTO PARA TODOS OS CLIENTES
        //io.emit("texto_editor_clientes", texto);

        //ENVIA O EVENTO PARA TODOS OS CLIENTES, EXCETO ELE MESMO
        //socket.broadcast.emit("texto_editor_clientes", texto);

        const documento = encontrarDocumento(nomeDocumento);

        if (documento) {
            documento.texto = texto;
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }
    })
});

function encontrarDocumento(nome) {
    const documento = documentos.find((documento) => {
        return documento.nome === nome;
    });

    return documento;
}