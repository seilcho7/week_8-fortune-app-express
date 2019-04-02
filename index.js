const express = require('express');
const app = express();

const port = 3000;

const axios = require('axios');

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

// app.get('/fortune', getFortune);

app.get('/fortune', async (req, res) => {
    const jokeUrl = 'http://yerkee.com/api/fortune';

    // Let's call the jokes api with axios
    const jokeResponse = await axios.get(jokeUrl);

    // Axios puts the data you want in a .data property
    const theActualJoke = jokeResponse.data;

    // and then return that in a response
    res.json(theActualJoke);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});