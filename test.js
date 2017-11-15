
//Listening to different html pages

var http = require("http");
function onRequest(req, res) {
	if (req.url == "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("This is Homepage");
	}
	else if (req.url == "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Contact us Page");
	}
else if (req.url == "/services") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end("Our Services");
	}

	else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("Page Not Found");
	}
}
http.createServer(onRequest).listen(8080);
    console.log("Hello");