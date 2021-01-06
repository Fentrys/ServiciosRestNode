const { static } = require("express");
const express = require("express");

var app = express();

const places = [
    {
        "title":"Oficina Codigo Fcilito",
        "description":"Lorem Ipsum",
        "address":"Lorem Ipsum"
    },
    {
        "title":"Oficina Codigo Fcilito",
        "description":"Lorem Ipsum",
        "address":"Lorem Ipsum"
    },
    {
        "title":"Oficina Codigo Fcilito",
        "description":"Lorem Ipsum",
        "address":"Lorem Ipsum"
    },
    {
        "title":"Oficina Codigo Fcilito",
        "description":"Lorem Ipsum",
        "address":"Lorem Ipsum"
    }
]

app.use(express.static("public"));

app.get("/", (req,res) =>{    
    res.json(places)
})

app.listen(3000, function(){
    console.log("Estoy listo para recibir peticiones")
});