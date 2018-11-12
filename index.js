// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {

  // const string = str.split('');
  // string.reverse();
  // string.join('');
  // return string;

  // let revString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  // let revString = '';
  // for (let char of str) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  // let revString = '';
  // str.split('').forEach(char => revString = char +
  //   revString);
  // return revString;

  //   return str.split('').reduce((revString, char) => {
  // return char + revString;
  //   }, '' );




}

// reverseString('hello');









// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

  const revString = str.split('').reverse().join('');

  return revString === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

  const revString = int.toString().split('').reverse()

  return parseInt(revString) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

  // const stArr = str.toLowerCase().split(' ');

  // for(let i = 0; i < stArr.length; i++){
  //   stArr[i] = stArr[i].subString(0, 1).toUpperCase() +
  //   stArr[i].subString(1);

  //   return stArr.join(' ');
  // }

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  const charMap = {};
  const maxNum = 0;
  const maxChar = ''

  str.split('').forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }


  }
  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5) {
      console.log('Buzz');
    } else {
      console.log(i)
    }
  }
}
