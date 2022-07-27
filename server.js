// const http= require("http");

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// // global.process - process

// const server = http.createServer((request,response) =>{
//     response.statusCode = 200;
//     response.setHeader('Content-Type',"text/plain");
//     response.end("Hello World");
// });

// server.listen(PORT, HOSTNAME, ()=>{
//     console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
// });

// global.__


// console.log(__dirname);
// console.log(__filename);


// read file

// const fs = require('fs');
// const {readFile, readFileSync} = require('fs');

// fs.readFile('hi.txt','utf8', (err,data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });

// try{
//     const data = fs.readFileSync('hi.txt','utf8');
//     console.log(data);
// } catch(err){
//     console.errror(err);
// }
// console.log("Log from outside");

// write File
// const {writeFile, writeFileSync, write} = require('fs');
// const {appendFile} = require('fs');

// const newContent = 'This is some new text';
// const newContent = '\n This is some more new text';

// writeFile('hi.txt',newContent,{flag: "a"},(err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Cotent written!");
// });

// try{
//     writeFileSync('hi.txt',newContent);
//     console.log('content Written!');
// }catch(err){
//     console.error(err);
// }

// appendFile('hi.txt',newContent,(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("content written");
// });


// rename file
// const {rename} = require("fs");

// rename('hi.txt','hello.txt',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File renamed!");
// });


// unlink file - delete file
// const { unlink } = require("fs");

// unlink('hello.txt',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.group('file deleted');
// });


// export & import

// const addNums = require('./addNums');
// import { addNums } from './addNums.js'

// const sum = addNums(2,2);

// console.log(sum);


// html content
const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{
    // console.log(req.url, req.method);

    // res.statusCode = 200;

    res.setHeader('Content-Type','text/html');

    let path = './';
    switch(req.url){
        case '/':  
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            // res.setHeader("Location","/");
            // res.statusCode = 301;
            break;
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.error(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(PORT , ()=> console.log(`Server is listening on port ${PORT}`));