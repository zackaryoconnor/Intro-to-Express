const { name } = require('ejs');
const express = require('express');
const app = express();




const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];



app.get(`/name`, (request, response) => {
    const name = request.params.name;
    response.send(`Hello there ${name}!`);
});




app.get(`/roll/:number`, (request, response) => {
    const number = request.params.number;

    if (isNaN(number)) {
        return response.send(`enter a number`);
    }

    const randomNumber = Math.floor(Math.random() * number + 1);
    console.log(number);
    response.send(`You rolled a ${randomNumber}`);
});




app.get(`/collectibles/:index`, (request, response) => {
    const index = request.params.index;

    if (isNaN(index) || index < 0 || index >= collectibles.length) {
        return response.send(`This item is not yet in stock. Check back soon!`);
    }

    const collectible = collectibles[index]
    response.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});