import { documentosCollection } from "./dbConnect.js";

function encontrarDocumento(nome) {
    /*
    const documento = documentos.find((documento) => {
        return documento.nome === nome;
    });
    */

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
    }
    )
    return atualizar;
}


export { encontrarDocumento, atualizarDocumento };