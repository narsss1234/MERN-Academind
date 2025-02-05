// import fs from 'node:fs';

// const userName = 'Max';

// console.log(userName);

// fs.writeFile("./test.txt",'Name:' + userName, (err) => {
//     if(err) {
//         console.log("Could not complete the write task! : " + err)
//         return;
//     }else{
//     console.log('The username is added to the new file')
//     }
// });

// import http from 'node:http';

// const server = http.createServer((req,res) => {
//     console.log('Listening on port 5000');
//     console.log(req.method, req.url);

//     res.setHeader('Content-type','text/plain');
//     res.end('<h1>Success!</h1>');
// });

// server.listen(5000);

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req,res) => {
    res.send('<form action="/user" method="POST"><input type="text" name="username" /><br><button type="submit">SUBMIT!</button></form>');
});

app.post("/user", (req,res,next) => {
    console.log(req.body.username);
    res.send("Thank you!" + ` Hope you are having fun ${req.body.username}!!!!!`);
});

app.listen(port, (err) => {
    if(err){
        console.log(`Unable to launch the app on port ${port}.` + `This was the error: ${err}`)
    }else{
        console.log(`App is listening on port: ${port}`);
    }
});