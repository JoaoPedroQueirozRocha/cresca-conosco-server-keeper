import express from "express";
import axios from "axios";
import cron from "node-cron";

const app = express();
const port = 3000;

// Função para fazer a chamada ao servidor externo usando Axios
async function fetchServerData() {
    try {
        const response = await axios.get(
            "https://cresca-conosco-staging.onrender.com/animals/Canja"
        );
        console.log("Dados recebidos:", response.data);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

// Agendar a tarefa para rodar a cada 5 minutos
cron.schedule("*/1 * * * *", () => {
    console.log("Fazendo chamada ao servidor externo...");
    fetchServerData();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
