
fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


// function getIP(onNewIP) { //  onNewIp - your listener function for new IPs
//     var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
//     var pc = new myPeerConnection({
//             iceServers: []
//         }),
//         noop = function() {},
//         localIPs = {},
//         ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
//         key;

//     function ipIterate(ip) {
//         if (!localIPs[ip]) onNewIP(ip);
//         localIPs[ip] = true;
//     }
//     pc.createDataChannel("");
//     pc.createOffer().then(function(sdp) {
//         sdp.sdp.split('\n').forEach(function(line) {
//             if (line.indexOf('candidate') < 0) return;
//             line.match(ipRegex).forEach(ipIterate);
//         });
//         pc.setLocalDescription(sdp, noop, noop);
//     }).catch(function(reason) {
//         console.log(reason);
//     });
//     pc.onicecandidate = function(ice) {
//         if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
//         ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
//     };
// }

// getIP(function(ip){
//     console.log("ip",ip);
// });
// console.log("hi");


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "/get-ip", true);
// xhr.setRequestHeader('client-ip', clientIp);
// xhr.send();