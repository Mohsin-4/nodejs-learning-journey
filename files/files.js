const fs = require('fs');


// reading files
// fs.readFile('./blog.txt', (err, data)=>{
// if(err){
//     console.log(err);
// }
// console.log(data.toString());
// })

// console.log('last line');


// write files
// fs.writeFile('./blog.txt', 'Testing, woow its working....', ()=>{
//     console.log('file was written');
// })

// create file
// fs.writeFile('./blog1.txt', 'Testing, woow its working....', ()=>{
//     console.log('file was written');
// })

// directories creation with their files
// fs.mkdir('./test', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     fs.writeFile('./test/test1.txt', 'testing file inside folder', ()=>{
//         console.log('file created within folder successfully');
//     })
// })

//checking if folder exists and creating or deleting it 
// if(!fs.existsSync('./test2')){
//     fs.mkdir('./test2', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created successfully');
//     })
// }else{
//     fs.rmdir('./test2', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted successfully');
//     })
// }

// deleting File
// if(fs.existsSync('./assets/test.txt')){
//     fs.unlink('./assets/test.txt', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted successfully');
//     })
// }

// delete folder
// if(fs.existsSync('./assets')){
//     fs.rmdir('./assets', (err)=>{
//         if(err) console.log(err);
//         console.log('folder deleted successfully');
//     })
// }