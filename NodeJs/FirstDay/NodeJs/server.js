var http = require('http');
var a = 100
var b = 2000
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":'text/html'})
    res.write("Hello World!")
    res.write("<br/><b>A Value is</b>"+a)
    res.write("<br/><b>B Value is</b>"+b)
    res.end("Bye")
}).listen(3000)

console.log("Server started on http://127.0.0.1:3000/")