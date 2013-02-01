/*
// Thurston:

blam: 'pink'

jin: (){
  blam: 'black'
  bloop: 9
  (){bloop: 12}() // IIFE
  ret bloop
}

console.log(jin()) // 12
console.log(blam) // 'black'
*/

// JavaScript:

var blam = 'pink';

var jin = function jin() {
  var bloop;
  blam = 'black';
  bloop = 9;
  (function() {
    bloop = 12;
  }())
  return bloop;
};

console.log(jin());
console.log(blam);
