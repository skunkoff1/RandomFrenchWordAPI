
const express = require("express");
const fs = require("fs");
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
let txt;
let got;

const app = express();
app.use(cors());

async function getList() {
    await fetch("https://www.damien-didrich.com/wordlist.txt")
        .then(res => res.text())
        .then(text => {
            txt = text;
            const words = txt.split("\r\n");
            let rdm = Math.round(Math.random() * 400000);
            got = words[rdm];
            console.log("fonction " + got);
            return got;
        })
}

// getList();

app.get("/getWord", async function (req, res) {
    
    await getList();
    console.log("appel "+got)

    res.status(200).json({
        word: got,
    });
});

app.listen(process.env.PORT, () => console.log('Server started: ' + process.env.PORT));