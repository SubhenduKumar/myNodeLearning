const fs = require("fs")

fs.readFile(__dirname + "/hi.txt", "utf-8", (err, resp) => {
    if (err) throw err
    console.log(resp);
})



fs.unlink(__dirname + "/bye.txt", (err, resp) => {
    if (err) throw err
    console.log(resp)
})

console.log()