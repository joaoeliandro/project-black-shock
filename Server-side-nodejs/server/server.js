var WebSockektServer = require('websocket').server;
var http = require('http');

const port = 8080;

let server = http.createServer();

let wsServer = initiatorServer(server, port);

wsServer.on('request', (request) => {
    let state = false;

    let client = request.accept(null, request.origin);

    client.on('message', (message) => {
        if (message.type === 'utf8') {
            console.log(message.utf8Data);
        }
    });

    let interval = setInterval(() => {
        client.sendUTF(state ? "ON" : "OFF");
        state = !state;

    }, 1000);

    client.on('close', () => {
        console.log("Connection closed!");
        clearInterval(interval);
    });
});


function initiatorServer(server, port) {
    server.listen(port, () => {
        console.log(`Server connecting to port ${port}`);
    });

    let wsServer = new WebSockektServer({
        httpServer: server
    });

    return wsServer;
}