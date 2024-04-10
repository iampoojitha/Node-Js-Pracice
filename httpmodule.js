const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end("hello world");

// })

const server = http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h2>this is home page</h2>')
        res.end()
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h2>this is about page</h2>')
        res.end()
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h2>this is contact page</h2>')
        res.end()
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h2>page not found</h2>')
        res.end()
    }
})

server.listen(8080,()=>{
    console.log("server is listening")
})

