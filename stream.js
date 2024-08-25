// const fs = require('fs');

// const readStream = fs.createReadStream('./Modules_and_Require/blogs2.txt', {encoding: 'utf-8});

// const writeStream = fs.createWriteStream('./Modules_and_Require/blogs3.txt');


// readStream.on('data',(chunk)=>{
//     console.log('------------------------------------------CHUNK Start---------------------------------------------');
//     console.log(chunk);
//     console.log('------------------------------------------CHUNK End-----------------------------------------------');
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// readStream.pipe(writeStream);