const http = require ('http')

http.createServer(function(req,res){

    res.end("meu primeiro servidor nodejs")
}).listen(8081)