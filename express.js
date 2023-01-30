const express = require('express')
const app = express()
const port = 5000
app.use(express.static('public'))
app.set('view engine', 'twig')
app.set("views", './public/views')


// app.get("/", (req, res) => {
//     // res.send("Hello World")
//     res.sendFile(__dirname + '/index.html')
// })

// app.get("/users", (req, res) => {
//     res.send("<h1>This is users</h1>")
// })

// app.post("/users/profile", (req, res) => {
//     res.send("<h1>This is users profile</h1>")
// })


app.get("/about/:a-:b", (req, res) => {
    res.render('index', { title: "About", sum: parseInt(req.params.a) + parseInt(req.params.b) })
})




app.listen(port, () => console.log("server is listening on " + port))