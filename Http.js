const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Hey Running</h1>")
    res.end()
}).listen(8000, () => console.log("Server Running on 8000"))

// const server = http.createServer()


// server.on("hi", (req, res) => {
//     res.write("hi")
//     res.end()
// })

// server.listen(8000, () => console.log("Server Running on 8000"))