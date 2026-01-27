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
// fs.appendFile("hey.txt"," me toh aacha hu",function(err){
//   if(err) console.error(err);
//   else console.log("done");
// })

//renameFile
// fs.rename("hey.txt","hello.txt",function(err){
//   if(err) console.error(err);
//   else console.log("done");
// })

//copyfile
// fs.copyFile("hello.txt","./copy/hey.txt",function(err){
//   if(err) console.error(err);
//   else console.log("done");
// })

// //unlike
// fs.unlink("hello.txt",function(err){
//   if(err) console.log(err);
//   else console.log("removed");
// })

//mkdir
fs.rm("./copy", { recursive: true, force: true }, function(err){
    if(err) console.error(err);
    else console.log("folder removed");
});
