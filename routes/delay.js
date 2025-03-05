
module.exports = (req, res, delay) => {
    if(!isNaN(delay) && delay >= 0) {
        setTimeout(() => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Response delayed by ${delay} seconds`);
        }, delay * 1000);
    }
    else {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Invalid delay. Please provide a positive number');
    }
}