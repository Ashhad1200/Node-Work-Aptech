const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; 
    const log = `Request time: ${new Date().toISOString()} (HTTP Version: ${req.httpVersion}, IP: ${ip})\n`;

    fs.appendFile('log.txt', log, (err, data) => {
        res.end('<h1>Server Started</h1>')
    })
});

server.listen(5000, () => console.log('server Started'));