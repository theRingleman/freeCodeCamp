function sumAll(arr) {
  var maxValue = Math.max.apply(null, arr),
      minValue = Math.min.apply(null, arr),
      mathArr = [];
  
  for(var i = minValue; i <= maxValue; i++){
    mathArr.push(i);
  }
  
  return mathArr.reduce((a,b) => a + b);
}

function diffArray(arr1, arr2) {
  // Same, same; but different.
 return arr1
   .concat(arr2)
   .filter(item => !arr1.includes(item) || !arr2.includes(item));
}