// node.js basics:
//Introduction to Node.js
//Installing Node.js and npm.

// node & npm
// working with node and npm
//npm init
//node basic usage

                                        
//working with modules                          //write file
//file system operations                        //append file
//understanding HTTP module                   //copyfile,rename,unlink                 


const fs = require('fs');

//writeFile
// fs.writeFile("hey.txt","hey hello kaise ho",function(err){
//   if(err) console.error(err);
//   else console.log("done");
// })
//appendFile
fs.appendFile("hey.txt"," me toh aacha hu",function(err){
  if(err) console.error(err);
  else console.log("done");
})
