const express = require('express')
const bodyParser = require("body-parser")
// ...rest of the initial code omitted for simplicity.
const { body, validationResult, check, matchedData } = require('express-validator');

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
    //before using sanitizer
    // check('username', 'Username email id fake').isEmail(),
    // check("password", "must be in 5 char").isLength({ min: 5 }),
    // check("cpassword", "must be in 5 char").isLength({ min: 5 })
    //after using sanitizer
    check('username', 'Username email id fake').trim().isEmail(),
    check("password", "must be in 5 char").trim().isLength({ min: 5 }),
    // check("cpassword", "must be in 5 char").trim().isLength({ min: 5 }),
    check("cpassword").custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error("confirm password not matching")
        }
        return true; //need to give this one
    })
], (req, res) => {
    const errors = validationResult(req)
    console.log(errors.mapped());
    if (!errors.isEmpty()) {
        const userData = matchedData(req)
        // res.render("indexForValidator", { title: "User Details", error: errors.mapped() })
        res.render("indexForValidator", { title: "User Details", error: errors.mapped(), userData: userData })
    }
    else {
        const userData = matchedData(req)
        console.log("userData", userData);
        // res.render("login", { title: "User Details", username:req.body.username,password:req.body.password })
        res.render("login", { title: "User Details", userData: userData })
    }
    // console.log(req.body);
    // res.render("indexForValidator", { title: "User Details", error: errors.mapped() })
})



app.listen(port, () => console.log("server is listening on " + port))