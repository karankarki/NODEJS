// creating a server

// 1.Import http libray module
const http =  require('http');

// create server
const server = http.createServer((req,res)=>{

    // res.end('Created node js server ');
    //Handling multiple request

    if(req.url=='/login'){
        return res.end("Hey this is a Login page");

    }
    else{
        res.end("this is a home page");
    }



}); 


server.listen(3100);
