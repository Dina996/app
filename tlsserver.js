const tls = require('tls');
const fs = require('fs');

const port = 1337;
const host = '188.166.185.228';

var options = {
    key: fs.readFileSync ('key.pem'),
    cert: fs.readFileSync ('cert.pem')
};


var server = tls.createServer( options, (socket) => {
    socket.write("server")
    socket.on('data', (data) => {
        console.log('Recieved: %s [it is %d bytes long]', 
        data.toString().replace(/(/n) /gm, ""),
        data.length()
    })
    socket.on('end', () => {
        console.log('End of transmission')
    })
});

server.listen(port, host, () => {
    console.log("I'm listening at %s, on port %s", host, port)
})