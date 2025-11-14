
import { encontrarDocumento, atualizarDocumento, listarDocumentos } from "./documentosController.js";

import io from "./servidor.js";

io.on("connection", (socket) => {
    //console.log("Um Cliente se conectou... Cliente: " + socket.id);
    socket.on("obter_documentos", async (devolverDocumentos) => {
        //console.log("solicitando documentos");
        const documentos = await listarDocumentos();
        devolverDocumentos(documentos);

    });

    //CAPTURANDO EVENTO POR NOME
    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        //console.log(nome)

        //JUNTA TODOS OS CLIENTE COMO NOME DO MESMO DOCUMENTO
        socket.join(nomeDocumento);

        const documento = await encontrarDocumento(nomeDocumento);
        //console.log(documento);

        if (documento) {
            devolverTexto(documento.texto);
        }

    });

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
        //console.log(texto);

        //ENVIA O EVENTO PARA TODOS OS CLIENTES
        //io.emit("texto_editor_clientes", texto);

        //ENVIA O EVENTO PARA TODOS OS CLIENTES, EXCETO ELE MESMO
        //socket.broadcast.emit("texto_editor_clientes", texto);


        //RETORNA DOCUMENTO DO BANCO DE DADOS
        //const documento = encontrarDocumento(nomeDocumento);

        // ATUALIZA OS DOCUMENTOS NO BANCO, DE ACORDO COM NOME E TEXTO
        const atualizacao = await atualizarDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }

    })
});

