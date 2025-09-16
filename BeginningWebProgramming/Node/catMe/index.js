let catMe = require('cat-me');

//console.log(catMe());

const pokemon = require('pokemon');

let pokemon1 = [];

for (let i = 0; i < 5; i++) {
    pokemon1.push(pokemon.random());
}

console.log("pokemon1: " + pokemon1);

let pokemon2 = [];

for (let i = 0; i < 5; i++) {
    pokemon2.push(pokemon.random());
}

console.log("pokemon2: " + pokemon2);

let pokemon3 = [...pokemon1, ...pokemon2];

console.log("pokemon3: " + pokemon3);