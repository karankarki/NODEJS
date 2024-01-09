const express = require('express');

const server = express();


// My static files are in public folder which are directly accessable
server.use(express.static('public'));

server.get('/',(req,res)=>{
    res.end("RESPONSE IS ENDED");
})

server.listen(3000);
