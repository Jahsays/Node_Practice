const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
	console.log(req.url)
	
	if(req.url === "/json") {
		res.writeHead(200, {'Content-Type': 'application/json'});

		const data = {
			name: "Chiaka",
			Country: "Nigeria",
			hobby: "Food"
		}
		return res.end(JSON.stringify(data));
	} else if (req.url === "/html") {
		// send html file
        res.writeHead(200, {'Content-Type': 'text/html'});
		 fs.createReadStream('index.html').pipe(res)
	} 
    else if (req.url === "/text") {
		// send a text
        res.writeHead(200, {'Content-Type': 'text/plain'});
		return res.end("I'm here to learn")
	} 
    else {
		// any other endpoint
		res.end("ok")
	}
})

server.listen("4000", "127.0.0.1");
console.log("Yes, you have created a server");