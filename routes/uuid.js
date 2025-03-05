const {v4 : uuidv4, v4} = require('uuid');

const uuid = {uuid : uuidv4()};

module.exports = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(uuid, null, 2));
};