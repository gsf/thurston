var blam = 'pink';

var jin = function jin () {
  blam = jin.blam;
  (function () {
    jin.bloop = 12;
  }());
  return jin.bloop;
};

jin.bloop = 9;
jin.blam = 'black';

console.log(blam);
console.log(jin.bloop);
console.log(jin());
console.log(blam);
