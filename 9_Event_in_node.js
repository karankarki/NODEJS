// importing http lib

const http = require("http")

// 1.create a server

const ser = http.createServer((req,res)=>{

    // Sending response to client
    res.end("Going with nodejs");
})

ser.listen(3100);
console.log("server is listening in 3100");

