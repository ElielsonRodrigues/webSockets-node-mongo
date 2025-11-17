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

function adicionarDocumento(nome) {

    const salvar = documentosCollection.insertOne({
        nome, texto: ""
    });
    return salvar;
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

function excluirDocumento(nome) {

    const excluir = documentosCollection.deleteOne({
        nome
    });
    return excluir;
}

export { encontrarDocumento, atualizarDocumento, listarDocumentos, adicionarDocumento, excluirDocumento };