import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.port || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const serverHttp = http.createServer(app);

serverHttp.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);

});

const io = new Server(serverHttp);

export default io;


