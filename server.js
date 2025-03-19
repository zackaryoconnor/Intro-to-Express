const { name } = require('ejs');
const express = require('express');
const app = express();




const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];




  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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

app.listen(3000, () => {
    console.log('Listening on port 3000');
});