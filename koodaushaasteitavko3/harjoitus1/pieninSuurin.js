function pieninSuurin(array) {
  var array = [0,1,2,3,4];
  array.sort();
  var pienin = array.shift();
  var suurin = array.pop();
  console.log("pienin " + pienin + " ja suurin " + suurin);
}
pieninSuurin();
