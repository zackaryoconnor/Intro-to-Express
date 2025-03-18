const { name } = require('ejs');
const express = require('express');
const app = express();


app.get(`/:name`, (request, response) => {
    const name = request.params.name;
    response.send(`Hello there ${name}!`)
})




app.listen(3000, () => {
    console.log('Listening on port 3000');
});