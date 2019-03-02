var http = require('http');
console.log('Server started');


const server = http.createServer((req, res) => {
  console.log("The url is",req.url)
  console.log("The method is",req.method)
//res.writeHead(200, {'Content-Type': 'text/html'});

if (req.url === '/hello') {
    res.write('<html>')
    res.write('<head><title>YO!!</title></head>')
    res.write('<body><h1>Hello</h1>')
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>')
    res.write('</body></html>')
    res.end();
}

if(req.url === '/message'){
    console.log('In message route');
}

}).listen(8080);
