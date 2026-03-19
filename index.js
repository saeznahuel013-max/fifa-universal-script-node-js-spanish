const net = require('net');

// Railway asigna el puerto automáticamente en process.env.PORT
const PORT = process.env.PORT || 42124;

const server = net.createServer((socket) => {
    console.log(`[+] Conexión recibida de: ${socket.remoteAddress}:${socket.remotePort}`);

    // El "Código Mágico" de login para FIFA (Bypass)
    // Equivale a 000000010000000000000000 en hexadecimal
    const response = Buffer.from("000000010000000000000000", "hex");

    // Enviamos la respuesta y cerramos la conexión inmediatamente
    socket.write(response, () => {
        console.log("[!] Bypass enviado. Cerrando conexión.");
        socket.end();
    });

    socket.on('error', (err) => {
        console.error(`[!] Error en el socket: ${err.message}`);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`[*] Servidor Node.js activo en puerto: ${PORT}`);
});
