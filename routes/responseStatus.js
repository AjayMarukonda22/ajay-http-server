const responseCode = [100, 200, 300, 400, 500];

module.exports = (req, res, statusCode) => {
    console.log('Inside responseStatus.js - Received statusCode:', statusCode);
    if (responseCode.includes(statusCode)) {
        if (statusCode === 100) {
            res.writeHead(200, { 'Content-Type': 'text/plain' }); // Change to 200 as browser don't display content for 1xx responseCodes.
            res.end(`Response with statusCode: ${statusCode}`);
        } else {
            res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
            res.end(`Response with statusCode: ${statusCode}`);
        }
    }
    else {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Invalid statusCode. Try 100, 200, 300, 400 0r 500');
    }
};