var blam = 'pink';

var jin = function jin () {
  blam = 'black';
  (function () {
    jin.bloop = 12;
  }());
  return jin.bloop;
};
jin.bloop = 9;

console.log(blam);
console.log(jin.bloop);
console.log(jin());

var squiggle = function squiggle (sss, cb) {
  console.log(sss);
  console.log(cb.x);
  console.log(cb());
};

squiggle(blam, (function () {
  var $x2sjd = function () {
    return $x2sjd.x + ' is ' + $x2sjd.n;
  };
  $x2sjd.x = 13;
  $x2sjd.n = 'a carrot';
  return $x2sjd;
}()));
