const http = require('http');
const { clientApp } = require('./clientApp');
const PORT = 8000;

const server = http.createServer(clientApp);

server.listen(PORT, () => {
    console.log(`Serviço executando na porta: ${PORT}`);
});