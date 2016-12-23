//lakshman.mn@gmail.com - node js instructor help
var http = require("http");
var server = http.createServer();
var respContent ="<HTML>Default page!</HTML>";
var contentType = 'text/html';
server.on("request", onRequest );
console.log("process :: " + process.toString());
console.log("process.env :: " + process.env.toString());
var server_port = process.env.OPENSHIFT_NODEJS_PORT; // || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP; // || '127.0.0.1';
console.log("server port " + server_port + " server ip " + server_ip_address ) ;
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

function onRequest(req,resp){ 
		console.log(req.url);
		resp.writeHead(200, { 'Content-Type': 'text/html' }); 
		resp.write("<html>hello anbu</html>");
		resp.end;
}
