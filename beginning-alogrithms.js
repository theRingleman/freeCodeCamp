function reverseString(str) {
  return str.split('').reverse().join('');
}

function palindrome(str) {
  var scrubbedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  return scrubbedStr === reverseString(scrubbedStr) ? true : false;
}

function findLongestWord(str) {
  //This takes the string turns it into an array and then runs the sort function on it.
  return str.split(' ').sort(function (a,b) {
    return a.length < b.length; // This then checks the length of each word in the array then sorts it out biggest to smallest.
  })[0].length; // This takes the first element in the array which will alway be the longest and returns the length of the word.
}

function titleCase(str) {
  return str.split(' ').map(function(word){
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }).join(' ');
}

function largestOfFour(arr) {
  return arr.map(function(arr){
    return Math.max.apply(null, arr);
  });
}

function confirmEnding(str, target) {
  return str.substr(-target.length) ? true : false;
}
