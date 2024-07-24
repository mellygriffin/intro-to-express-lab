const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/greetings/:userName', (req,res) => {
    res.send(`Greetings, ${req.params.userName}!`);
});//number 1 complete

app.get('/roll/:number', (req,res) => {
    if (!isNaN(req.params.number)) {
        const randomNumber = Math.floor(Math.random() * (req.params.number - 0) + 0);
        res.send(`<h1>You rolled a ${randomNumber}!</h1>`);
    } else {
        res.send(`You must specify a number.`)
    }
})//number 2 complete

app.get('/collectibles/:itemNumber', (req,res) => {
    if (collectibles[req.params.itemNumber]) {
        res.send(`So, you want ${collectibles[req.params.itemNumber].name}? For ${collectibles[req.params.itemNumber].price}, it can be yours!`)
    } else {
        res.send(`This item is not yet in stock. Check back soon!`)
    }
})

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];//number 3 completed

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];//number 4

app.get('/shoes/min-price', (req, res) => {
    let minPrice = shoes.filter(shoe => shoe.price <= 100);
    if (minPrice) {
        minPrice.map(shoe => shoe.name)
    }
    res.send(minPrice);
  })//list shoes by min price

  app.get('/shoes/max-price', (req, res) => {
    let maxPrice = shoes.filter(shoe => shoe.price >= 100);
    if (maxPrice) {
        maxPrice.map(shoe => shoe.name)
    }
    res.send(maxPrice);
  })//list shoes by max price

  app.get('/shoes/type/sandals', (req, res) => {
    let sandals = shoes.filter(shoe => shoe.type === 'sandal');
    if (sandals.length > 0) {
        let sandalsList = sandals.map(shoe => shoe.name);
        res.send(sandalsList);
    }
  })//list shoes by type - sandals

  app.get('/shoes/type/sneakers', (req, res) => {
    let sneakers = shoes.filter(shoe => shoe.type === 'sneaker');
    if (sneakers.length > 0) {
        let sneakerList = sneakers.map(shoe => shoe.name);
        res.send(sneakerList);
    }
  })//list shoes by type - sneaker

  app.get('/shoes/type/boots', (req, res) => {
    let boots = shoes.filter(shoe => shoe.type === 'boot');
    if (boots.length > 0) {
        let bootList = boots.map(shoe => shoe.name);
        res.send(bootList);
    }
  })//list shoes by type - boots

  app.get('/shoes/type/heels', (req, res) => {
    let heels = shoes.filter(shoe => shoe.type === 'heel');
    if (heels.length > 0) {
        let heelList = heels.map(shoe => shoe.name);
        res.send(heelList);
    }
  })//list shoes by type - heels

  app.get('/shoes', (req, res) => {
    if (shoes.length > 0) {
        let shoeList = shoes.map(shoe => shoe.name);
        res.send(shoeList);
    }
  })//list ALL shoes