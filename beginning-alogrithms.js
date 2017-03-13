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
  return str.substr(-target.length) === target ? true : false;
}

function repeatStringNumTimes(str, num) {
  return num >= 0 ? str.repeat(num) : "";
}

function truncateString(str, num) {
  if (num <= 3) {
    return str.slice(0, num) + "...";
  } else if (str.length > num) {
    return str.slice(0, num - 3) + "...";
  }
  return str;
}

function chunkArrayInGroups(arr, size) {
  var final = [];
  if (size !== 0) {
    for (var i = 0; i < arr.length; i+=size) {
      final.push(arr.slice(i, i+size));
    }
  }
  return final;
}

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }

  return true;
}
