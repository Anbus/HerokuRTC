//lakshman.mn@gmail.com - node js instructor help
var http = require("http");
var server = http.createServer();
var respContent ="<HTML>Default page!</HTML>";
var contentType = 'text/html';
server.on("request", onRequest );
var util = require("util");
console.log("*************************************anbu start process env ");
console.log(util.inspect(process.env, false, null));
console.log("*************************************anbu end process env ");
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080; //process.env.MYNODEJS_SERVICE_PORT; //
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'; //process.env.MYNODEJS_SERVICE_HOST; // '172.30.162.2'; //
console.log("server port " + server_port + " server ip " + server_ip_address ) ;
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port );
});
/*server.listen("http://anbunodejs-learnter.44fs.preview.openshiftapps.com/", function () {
  console.log( "Listening on " + "http://anbunodejs-learnter.44fs.preview.openshiftapps.com/" );
});*/

function onRequest(req,resp){ 
		console.log(req.url);
		resp.writeHead(200, { 'Content-Type': 'text/html' }); 
		resp.write("<html>hello anbu</html>");
		resp.end;
}
