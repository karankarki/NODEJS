const fs = require('fs')


//READING file content using Blocking code

// console.log("starting reading ");

// let  buffer = fs.readFileSync('data.txt',{encoding:'utf-8'})
// // console.log(buffer.toString()); 
// console.log(buffer); 

// console.log("reading end");


// Creating a file using fs

// fs.writeFileSync('data.txt',`name:karan age:20 gender:male`)

// console.log("Writing in file is done")

// // Appending content in a file

// fs.appendFileSync('data.txt',"name:ansh age:20 gender:female ")

// console.log("appending in file is done ")


// deleting a file using fs

// fs.unlinkSync('data.txt');


// Using unblocking code


fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})

// appendfile and ulnlick are also same