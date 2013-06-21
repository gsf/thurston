var blam = 'pink';

var jin = function jin () {
  var bloop;
  bloop = 9;
  blam = 'black';
  (function () {
    bloop = 12;
  }());
  return bloop;
};

console.log(blam);
console.log(jin());
console.log(blam);
