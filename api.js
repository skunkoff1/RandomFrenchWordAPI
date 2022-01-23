
const express = require("express");
const fs = require("fs");
const cors = require('cors');

const app = express();
app.use(cors());

const file = fs.readFileSync("./wordlist.txt", "latin1");

const words = file.split("\r\n");
let rdm = Math.round(Math.random() *400000);


app.get("/getWord", (req, res) => {
    
    res.status(200).json({        
        word : words[rdm]
    });
});

app.listen(process.env.PORT, () => console.log('Server started: '+ process.env.PORT));