//Use `Array.some` to check if any element in an array starts with the letter "P", case insensitive

const startwithLetterP = ["Peter", "Apple", "Edison","tomato", "potato",];

function checkLetter(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkLetter(startwithLetterP, 'kela');   // false
checkLetter(startwithLetterP, 'banana'); // true


//["Peter", "Apple", "Edison"] // -> true
//["tomato", "potato"] // -> true
//["car", "truck", "helicopter"] // -> false
//[3, 500 -8, 10] // -> false
