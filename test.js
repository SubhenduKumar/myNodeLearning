const express = require('express');
var cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json());


const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));

// app.post('/', (req, res) => {
//     console.log("req.body.name");
//     console.log(req.body);
//     // res.json({ response: req.body.name });
//     res.send('Success');
// });



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
    // req.file contains the uploaded file information
    x=req.file
    console.log(req.file);
    res.json({ response: req.file })
    res.send('File uploaded');
});
// const IP = require('ip');

// app.get('/:obj', (req, res) => {
//     // const ipAddress = requestIp.getClientIp(req);
//     // console.log(ipAddress);
//     console.log("req.params.obj",req.params.obj);
//     res.json({ response: req.params.obj });
// });

// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// }); 



// app.get('/get-ip', (req, res) => {
//     var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         req.connection.socket.remoteAddress;
//     res.status(200).send('{"ip":"' + ip + '"}');
//     console.log(ip);
//     // rest of your logic
// });


app.listen(5000, () => {
    console.log('Server listening on port 5000');
});

