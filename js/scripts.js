//This object variable will contain the Pokemon "name", "height", and type

//start the IIFE fucntion
let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Metapod', type: 'Bug', height: 0.7}, 
    {name: 'Weedle', type: ['bug', 'Poison'], height: 0.3},
    {name: 'Fearow', type: ['flying', 'normal'], height: 1.2},
    {name: 'Pikachu', type: 'Electric', height: 0.4}
  ];
  
  function add(pokemon) {//a function to add the new object
    pokemonList.push(pokemon);
  }

  function getAll() {//to return the object anbd keys
    return pokemonList;
  }

  return {//return the new object
    add: add,
    getAll: getAll
  };
})();

//end the IIFE function

//forEach is a pre defined function in JS. item => followed by a {} which indicates to start the function
pokemonRepository.getAll().forEach(item => {  
  if (item.height > 0 && item.height < 0.4) {
      document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a small Pokepmon!)</h1>') 
  } else if (item.height > 0.3 && item.height < 0.7) {
    document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a medium sized Pokemon!)</h1>') 
  } else {
    document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a large pokemon!)</h1>') 
  }
})

//


