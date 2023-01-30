const express = require('express')
const bodyParser = require("body-parser")
// ...rest of the initial code omitted for simplicity.
const { body, validationResult, check } = require('express-validator');

const app = express()
const port = 3001
app.use("/static", express.static('public'))
app.set('view engine', 'twig')
app.set("views", './public/views')




// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/json
const jsonParser = bodyParser.json()


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
    res.render("indexForValidator", { title: "Login", msg: "Enter" })
})

// app.get("/about/:a-:b", (req, res) => {
//     res.render('index', { title: "About", sum: parseInt(req.params.a) + parseInt(req.params.b) })
// })



app.post("/", urlencodedParser, [
    check('username', 'Username email id').isEmail(),
    check("password", "must be in 5 char").isLength({ min: 5 })
], (req, res) => {
    const errors=validationResult(req)
    console.log(errors.mapped());
    console.log(req.body);
    res.render("indexForValidator", { title: "User Details",error:errors.mapped()})
})



app.listen(port, () => console.log("server is listening on " + port))