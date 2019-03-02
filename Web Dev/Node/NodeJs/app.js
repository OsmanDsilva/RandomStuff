

const express = require('express');


const app = express();


app.use('/hello1',(req,res,next) => {
    console.log("MIDDLEWARE2");
})

app.use('/hello2',(req,res,next) => {
    console.log("MIDDLEWARE3");
})


app.use('/',(req, res, next) => {
    console.log('Hurray working!')
    res.send('<h1>You are now looking at the response</h1>')
    
})
app.listen(3000);
