function Perimeter (x, y) {
    console.log(2 * (x + y));
}

Perimeter(3, 4.5);


function areEqual(x, y) {

if ((x - y) == 0) {
           return true;
}
        else {
            return false;
}
}
console.log(areEqual(3,7));
console.log(areEqual(55,6));
console.log(areEqual(23,23));

function between0and1 (x) {
  if ((x >= 0  && x <= 1))
     {
    return true;
     }
    else
     {
    return false;
  }
}
console.log(between0and1(3));
console.log(between0and1(0.542));
console.log(between0and1(0));
