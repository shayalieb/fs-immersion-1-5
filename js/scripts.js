//start the IIFE fucntion
(function () {
  
//This object variable will contain the Pokemon "name", "height", and type
let pokemonList = [
  {name: 'Metapod', type: 'Bug', height: 0.7}, 
  {name: 'Weedle', type: ['bug', 'Poison'], height: 0.3},
  {name: 'Fearow', type: ['flying', 'normal'], height: 1.2},
  {name: 'Pikachu', type: 'Electric', height: 0.4}
];

//forEach is a pre defined function in JS. item => followed by a {} which indicates to start the function
pokemonList.forEach(item => {  
  if (item.height > 0 && item.height < 0.4) {
      document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a small Pokepmon!)</h1>') 
  } else if (item.height > 0.3 && item.height < 0.7) {
    document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a medium sized Pokemon!)</h1>') 
  } else {
    document.write('<h1>' + item.name + ' (height: ' + item.height + ') - This is a large pokemon!)</h1>') 
  }
})

//end the IIFE function
})();

  

