import { documentosCollection } from "./dbConnect.js";


function listarDocumentos() {

    const listar = documentosCollection.find().toArray();

    return listar;
}


function encontrarDocumento(nome) {

    const documento = documentosCollection.findOne({
        nome: nome
    })
    return documento;
}

function atualizarDocumento(nome, texto) {

    const atualizar = documentosCollection.updateOne({
        nome
    }, {
        $set: {
            texto
        }
    });
    return atualizar;
}

export { encontrarDocumento, atualizarDocumento, listarDocumentos };