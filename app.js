const { static } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended:false}));

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

app.post("/",(req,res)=>{
    res.send(req.body);
})

app.listen(3000, function(){
    console.log("Estoy listo para recibir peticiones")
});