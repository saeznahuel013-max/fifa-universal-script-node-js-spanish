const net = require('net');

// Railway asigna el puerto automáticamente en la variable PORT
const PORT = process.env.PORT || 42124;

const server = net.createServer((socket) => {
    console.log('[+] PS3 conectada desde: ' + socket.remoteAddress);

    // El código hexadecimal mágico para FIFA 15 (Bypass)
    // Debe enviarse como un Buffer de 12 bytes
    const bypassCode = Buffer.from('000000010000000000000000', 'hex');

    socket.write(bypassCode);
    console.log('[✓] Código de bypass enviado con éxito.');

    socket.on('error', (err) => {
        console.log('[!] Error en la conexión: ' + err.message);
    });

    // Cerramos la conexión después de enviar para que el juego prosiga
    socket.end();
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`[*] Servidor FIFA 15 (Node.js) activo en puerto: ${PORT}`);
});
