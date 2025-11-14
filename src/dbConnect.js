import { MongoClient } from "mongodb";

const url = "mongodb://root:123456@localhost:1000/aluraSocketio?authSource=admin";

const cliente = new MongoClient(url);

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    const documentos = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");
} catch (error) {
    console.log(error)

}