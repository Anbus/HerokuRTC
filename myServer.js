//lakshman.mn@gmail.com - node js instructor help
var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require("path");
var server = http.createServer();
var respContent ="<HTML>Default page!</HTML>";
var contentType = 'text/html';
server.on("request", onRequest );

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

//server.listen(8080);
var gResp;
function onRequest(req,resp){ 
//	gResp = resp;
	console.log(req.url);
//	if(req.url === "/" ){
		resp.writeHead(200, { 'Content-Type': 'text/html' }); 
		resp.write("<html>hello anbu</html>");
		resp.end;
		//fs.readFile("Index.html", onFileRead );	
//	}
/*	else{
		var parsed = url.parse(req.url);
		var extn = getExtension(parsed.pathname);
		if(extn === ".js"){
				contentType = 'text/javascript'
				//resp.writeHead(200, { 'Content-Type': 'text/javascript' }); 
				resp.writeHead(200, { 'Content-Type': contentType }); 
				fs.readFile("client1.js", onFileRead );	
		}
		else if(parsed.pathname === "/favicon.ico/"){
		}
	}  */
	console.log("content type " + contentType);
}
function sendResponse()
{
	gResp.write(respContent);
	gResp.end();		
}
function onFileRead(error, data) {
	if (error) {
		respContent = "<html>error occured</html>";
	} else {
		respContent = data;
	}            
	sendResponse();
}
function getExtension( url ) {
    return url.split('.').pop().split(/\#|\?/)[0];
}