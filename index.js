const express = require('express');
const app = express();

const port = 3000;

const fortunes = [
    "It is easier to run down a hill than up one.",
    "If God had meant for us to be naked, we would have been born that way.",
    "All true wisdom is found on T-shirts.",
    "If God had a beard, he'd be a UNIX programmer.",
    "If you refuse to accept anything but the best you very often get it."
];

async function getFortune(req, res) {
    const randomFortune = await fortunes[Math.floor(Math.random()*5)];
    console.log(randomFortune);
    res.json(randomFortune);
}

app.get('/fortune', getFortune);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});