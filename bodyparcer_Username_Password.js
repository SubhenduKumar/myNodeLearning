const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3001
app.use("/static",express.static('public'))
app.set('view engine', 'twig')
app.set("views", './public/views')




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// app.get("/", (req, res) => {
//     res.send("Hello World")
//     res.sendFile(__dirname + '/index.html')
// })

// app.get("/users", (req, res) => {
//     res.send("<h1>This is users</h1>")
// })

// app.post("/users/profile", (req, res) => {
//     res.send("<h1>This is users profile</h1>")
// })

app.get("/", (req, res) => {
    res.render("index", { title: "Login", msg: "Enter" })
})

// app.get("/about/:a-:b", (req, res) => {
//     res.render('index', { title: "About", sum: parseInt(req.params.a) + parseInt(req.params.b) })
// })



app.post("/", (req, res) => {
    res.render("login", { title: "Login", username: req.body.username, password: req.body.password })
})



app.listen(port, () => console.log("server is listening on " + port))