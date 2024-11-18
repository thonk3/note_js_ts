import express from "npm:express@4.18.2";

import data from "./data.json" with { type: "json" };

const PORT = 8000;

const app = express()

app.get("/", (req, res) => {
    res.send("hello Dino API");
});

app.get("/api/:dino", (req, res) => {
    if (req?.params?.dino) {
        const found = data.find(i => i.name.toLowerCase() === req.params.dino.toLowerCase());
        if(found) res.send(found);
        else res.send("No dino");
    }
})

// simple starting point so far
app.listen(PORT, () => {
    console.log(`starting server at ${PORT}`);
});