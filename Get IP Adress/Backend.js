const express = require('express');
const app = express();
const requestIp=require("request-ip")
var cors = require("cors");

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


// const IP = require('ip');

app.get('/', (req, res) => {
    const ipAddress = requestIp.getClientIp(req);
    console.log(ipAddress);
    res.json({ ipAddress: ipAddress });
});

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
    console.log('Server listening on port 3000');
});

