var http = require('http');

var server = http.createServer(function(request, response) {
    const uuidv4 = require('uuid/v4');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(uuidv4);
    response.end("Hello World - AFT!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
