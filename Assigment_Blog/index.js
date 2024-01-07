// Write your code here
import * as blog_action from './blogActions.js'
import readline from 'readline'
import path from 'path';
import module from 'module';
const Solution = () => {

    const qinterface = readline.createInterface(
        {
            input:process.stdin,
            output:process.stdout,
        }
    )

    qinterface.question("Enter your blog: ",(blg)=>{
       const p =  path.join("myblog.txt");
       blog_action.writeBlog(blg,p)
       qinterface.close();
     });
     
   


  };
  Solution();
  module.exports = Solution;