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

var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
 if (num === 0) {
    return '';
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
}

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){ after = after.replace(after[0], after[0].toUpperCase()); }
  return str.replace(before, after);
}

function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if(vowels.indexOf(str[0]) >= 0){
    return str + 'way';
  } else {
    strArr = str.split('');
    for(var i = 0; i < strArr.length; i++){
      if(vowels.indexOf(str[i]) >= 0){
        return str.substr(i) + str.substr(0, i) + 'ay';
      }
    }
  }
}

function pairElement(str) {
  var finalArr = [];
  for(var i = 0; i < str.length; i++){
    if(str[i] === "G"){
      finalArr.push(["G", "C"]);
    } else if(str[i] === "C"){
      finalArr.push(["C", "G"]);
    } else if(str[i] === "A"){
      finalArr.push(["A", "T"]);
    } else if(str[i] === "T"){
      finalArr.push(["T", "A"]);
    }
  }
  return finalArr;
}