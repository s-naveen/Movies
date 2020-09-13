const express = require('express');

const app = express();

app.listen(8080, (req,err) => {
    console.log("Server Started At Port", 8080);
}); 

app.get("/", (req,res) => {
    res.send("Hello, World!!");
})

app.get("/api/test", (req,res) => {
    res.send("Hola");
})

app.get("/test", (req,res) => {
    res.send("Hola2");
})