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
