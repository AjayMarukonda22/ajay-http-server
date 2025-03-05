const http = require('http');
const url = require('url');

const handleHtml = require('./routes/html.js');
const handleJson = require('./routes/json.js');
const handleUuid = require('./routes/uuid.js');
const handlestatusCode = require('./routes/responseStatus.js');
const handleDelay = require('./routes/delay.js');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.pathname;
    let method = req.method;

    if(method === 'GET') {
    
        if(path === '/html') {
            handleHtml(req, res);
        }
        else if(path === '/json') {
              handleJson(req, res);
        }
        else if(path === '/uuid') {
            handleUuid(req, res);        
        }
        else if(path.startsWith('/status/')) {
            const statusCode = parseInt(path.split('/')[2]);
            handlestatusCode(req, res, statusCode);
        }
        else if(path.startsWith('/delay/')) {
            const delay = parseInt(path.split('/')[2]);
            handleDelay(req, res, delay);
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`);
})