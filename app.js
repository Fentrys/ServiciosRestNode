const { static } = require("express");
const express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.send("Hola mundo");
})

app.listen(3000, function(){
    console.log("Estoy listo para recibir peticiones")
});