// Write your code here
import fs from 'fs'
export function writeBlog(blog,path){
    fs.appendFile(path,blog,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            fs.readFile('myblog.txt',(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log(data.toString())
                }
            })
        }
    })
}
