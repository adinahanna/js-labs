// Building and Referencing Objects

// Become [Ash Ketchum](http://bulbapedia.bulbagarden.net/wiki/Ash_Ketchum)

// - You are now a pokemon trainer. Yes, your middle school dreams (elementary school, maybe? okay, high school.) are now fulfilled.
// - Build Your starting four pokemon!

// 1. Create each pokemon as an object literal.
// 2. Give each pokemon at least four properties - be sure to use each data type in the properties (think `health: 500` or `moves: ['ice punch', 'friend chip', 'mega sneeze']`).
// 3. Create an array `myPokemon` and push or unshift each pokemon into the array in the order you choose.
// 4. **BONUS**: Give your pokemon a move as a method - make it remove an amount of HP from another pokemon foe!!

const bulbasaur = {
    height: 2.04,
    weaknesses: ['fire', 'psychic', 'flying', 'ice'],
    HP: 70,
    types: ['grass', 'poison'],
    attackIvysaur: function() {
        ivysaur.HP = ivysaur.HP - 50;
    }
};
const ivysaur = {
    height: 3.03,
    weaknesses: ['fire', 'psychic', 'flying', 'ice'],
    HP: 100,
    types: ['grass', 'poison']
};
const cinccino = {
    height: 1.08,
    weaknesses: ['fighting'],
    HP: 90,
    types: ['normal']
};
const froslass = {
    height: 4.03,
    weaknesses: ['steel', 'ghost', 'fire', 'dark', 'rock'],
    HP: 90,
    types: ['ice', 'ghost']
};
const myPokemon = [];
myPokemon.push(bulbasaur, ivysaur, cinccino, froslass);
console.log(myPokemon);

// ---

// Build a Pizza Menu

// - Become the sweaty human behind the counter, make your menu, and start making some friggin' pizzas.

// 1. Create a menu object.
// 2. Create 5 pizzas, each referenced within the menu object as distinct properties (like `dailySpecial: {` fill this in on the next step `}`).
// 3. Give each pizza 6 properties.
// 4. Be sure to use each data type in the properties (think `calories: 5000`, `meat: null` or `preferredBy: 'vegetarians'`).
// 5. **BONUS**: Create a method on the menu object that prints to the console the entirety of the menu!

// ---

//  Card Those Minors!

// - As a bouncer, use your JavaScript skillz to send guests to the appropriate party.

// 1. Make seven guest objects as individual variables each with a string property called `name` and a number property called `age`.
// 2. Create an array called `guests` and add these guest objects to the array using appropriate Array methods.
// 3. Create two more arrays, called `kidParty` and `adultParty`.
// 4. Iterate through each guest in the `guests` array. If the guest is under age 18, add them to the `kidParty` array. If they are 18 or older, add them to the `adultParty` array.
// 5. Now loop through the `kidParty` and `adultParty` arrays using an iterator method and print a nice message welcoming each guest by name to the correct party they are attending.
// 6. **BONUS** Now try to empty the `guests` array using only one line of code!
