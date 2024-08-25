const fs = require('fs');          // importing the file system

// <----------------Reading Files--------------->
// here, readFile(filename,(err,data))   is a asynchronous function. it takes two arguments--file name and call back function.
// call back function takes two argument--error and data.

// fs.readFile('./Modules_and_Require/blogs.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

// console.log('last line of reading files')




// <-----------------------------Writing Files-------------------------------->
// writeFile(filename,content,callbackfunction)

// fs.writeFile('./Modules_and_Require/blogs1.txt','I am universal boss.',()=>{
//     console.log('content is written in file');
// })

// console.log('last line of writing files')




//  <------------------------Directories------------------------------------->
// mkdir(dirctory_name,callbackfunction)                it will create a directory in the specified location

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         } else {
//             console.log('directory created');
//         }
//     });
// } else {
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log('directory removed');
//         }
//     })
// }



// <--------------------------deleting files-------------------------->
// unlink(filename,callbackfunction)       this method is used to delete file

// if(fs.existsSync('./Modules_and_Require/blogs1.txt')){
//     fs.unlink('./Modules_and_Require/blogs1.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }
