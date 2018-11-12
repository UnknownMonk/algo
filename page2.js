// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });

  const longestWordArr = sorted.filter(function (word) {
    return word.length === sorted[0].length;
  });

  if (longestWordArr.lenght === 1) {
    return longestWordArr[0]
  } else {
    return longestWordArr;
  }






  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

  // const chunkedArr = [];
  // let i = 0;

  // while (i < arr.length) {
  //   chunkedArr.push(arr.slice(i, i + len));
  //   i += len;
  // }
  // return chunkedArr;

  const chunkedArr = []

  arr.forEach(function (val) {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }



  });

  return chunkArr;
}



// console.log(chunkedArr);


// CHALLENGE 3: FLATTEN ARRAY

// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

  // return arrays.reduce(function (a, b) {
  //   return a.concat(b);
  // })

  // return [].concat.apply([], arrays);

  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2)




}

function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.replace(/[a-z]/gi, function (char) {
    if (char === 'z' || char === 'Z') {
      return 'a'
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  return newStr;

}

// Call Function
const output = letterChanges('Hello There');

console.log(output);