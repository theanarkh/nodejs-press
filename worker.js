const http = require('http');
module.exports = function() {
    const client = http.get('http://www.baidu.com', function(res) {
        console.log(res.statusCode);
    });
    client.on('error', () => {});
}