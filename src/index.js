const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

/* const pokemonsLoop =(prefix, suffix) => {
  pokemons.forEach(pokemon => {
    if (pokemon.startsWith("W"))
    {
      return
    }
    console.log("Pokemon name:", prefix + pokemon + suffix)
  });

} */


/* function pokemonsLoop2(prefix, suffix) {
  pokemons.forEach((el)=>console.log(prefix + el + suffix));
}
pokemonsLoop("Jing: ", ". End"); */

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const Pikachu = {};
Pikachu.name = "Pikachu";
Pikachu.element ="electric";
Pikachu.strength="32";
Pikachu.color="yellow";

console.log(Pikachu);

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

console.log(`${Pikachu.name} is a ${Pikachu.element} pokemon with the strength of ${Pikachu.strength}`);


// 4)
// Add the property stillToCatch: true to the Pikachu object.

Pikachu.stllToCatch = true;
console.log(Pikachu);

// 5)
// change the value of the key strength in the Pikachu object.
Pikachu.strength = 22;
console.log(Pikachu);


// 6)
// Delete a property from the Pikachu object.
delete Pikachu.color;
console.log(Pikachu);


// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  }
];
moreAboutPokemons[2] = Pikachu;
console.log(moreAboutPokemons);



// 8)
// Print out all the NAMES of the pokemons in this new array.
const printAllNames = () =>{
  moreAboutPokemons.forEach(moreAboutPokemon => {
    console.log(moreAboutPokemon.name);
  })
}
printAllNames ();


// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

const printAllDetails = ()=>{
  moreAboutPokemons.forEach(el=>{
    console.log(`${el.name} is a ${el.element} pokemon with the strength of ${el.strength}`)
  })
}
printAllDetails ();


