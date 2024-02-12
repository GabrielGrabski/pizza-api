import express from "express";
import router from "./routes";
import cors from "cors";
import errorHandler from "./utils/error/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

app.listen(3000, () => console.log("rodando na porta 3000!"));
