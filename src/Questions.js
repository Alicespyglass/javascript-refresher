function Questions () {

 // 1. keep only the elements that start with an a
  Questions.prototype.selectElementsStartingWithA = function (array) {
    const ans1 = [];
    array.forEach(function (element) {
      const lowCaseElement = element.toLowerCase();
      if (lowCaseElement.charAt(0) === 'a') {
        ans1.push(lowCaseElement);
      }
    });
    return ans1;
  };

  // 2. keep only the elements that start with a vowel
  Questions.prototype.selectElementsStartingWithVowel = function (array) {
    const ans2 = [];
    array.forEach(function (word) {
      if (word.match(/^[aeiou]/i)) {
        ans2.push(word);
      }
    });
    return ans2;
  };

  // 3. remove instances of null (but NOT false) from an array
  Questions.prototype.removeInstancesOfNull = function (array) {
    const ans3 = [];
    array.forEach(function (element) {
      if (element !== null) {
        ans3.push(element);
      }
    });
    return ans3;
  };

  // 4. remove instances of nil AND false from an array
  Questions.prototype.removeInstancesOfNullAndFalse = function (array) {
    const ans4 = [];
    array.forEach(function (element) {
      if (element !== null && element !== false ) {
        ans4.push(element);
      }
    });
    return ans4;
  };

  // 5. don't reverse the array, but reverse every word inside it. e.g.
  // ['dog', 'monkey'] becomes ['god', 'yeknom']
  Questions.prototype.reverseEachWordInArrayBySplit = function (array) {
    const ans5a = [];
    array.forEach(function (word) {
      let reverse = word.split('').reverse().join('');
      ans5a.push(reverse);
    });
    return ans5a;
  };

  Questions.prototype.reverseEachWordInArrayByLoop = function (array) {
    const ans5b = [];
    array.forEach(function (word) {
      let newString = '';
      for ( var i = word.length -1; i>= 0; i-- ) {
        newString += word[i];
      }
      ans5b.push(newString);
    });
    return ans5b;
  };

  Questions.prototype.reverseEachWordInArrayByRecursion = function (array) {
    const ans5c = [];
    array.forEach(function (word) {
      function reverseString(str) {
        if ( str === '' ) {
          return '';
        } else {
          return reverseString(str.substr(1)) + str.charAt(0);
        }
      }
      let reverseword = reverseString(word);
      ans5c.push(reverseword);
    });
    return ans5c;
  };

  // 6.given an array of student names, like ['Bob', 'Dave', 'Clive']
  // give every possible pairing - in this case:
  // [['Bob', 'Clive'], ['Bob', 'Dave'], ['Clive', 'Dave']]
  // make sure you don't have the same pairing twice,
  Questions.prototype.nCrPairing = function (array) {
    const ans6 = [];
    let pos = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        ans6[pos++] = [array[i], array[j]];
      }
    }
    return ans6;
  };

  // 7. discard the first 3 elements of an array,
  // e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
  Questions.prototype.discardFirst3Elements = function (array) {
    const ans7 = array.slice(3);
    return ans7;
  };

  //8. add an element to the beginning of an array
  Questions.prototype.addElementToBeginning = function (array, element) {
    array.unshift(element);
    return array;
  };

  // 9. sort an array of words by their last letter, e.g.
  // ['sky', 'puma', 'maker'] becomes ['puma', 'maker', 'sky']
  Questions.prototype.sortArrayByLastLetter = function (array) {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  };

  // 10 - cut strings in half, and return the first half, e.g.
  // 'banana' becomes 'ban'. If the string is an odd number of letters
  // round up - so 'apple' becomes 'app'
  Questions.prototype.cutStringsInHalf = function (string) {
    const stringLength = string.length;
    const halfPoint = Math.ceil(stringLength/2);
    return string.slice(0, halfPoint);
  };

  // 11 - turn a positive integer into a negative integer. A negative integer
  // stays negative
  Questions.prototype.turnNegative = function (integer) {
    const ans11 = integer > 0 ? -integer : integer;
    return ans11;
  };


  // 12 - turn an array of numbers into two arrays of numbers, one an array of
  // even numbers, the other an array of odd numbers
  // even numbers come first
  // so [1, 2, 3, 4, 5, 6] becomes [[2, 4, 6], [1, 3, 5]]

  // 13 - count the numbers of elements in an element which are palindromes
  // a palindrome is a word that's the same backwards as forward
  // e.g. 'bob'. So in the array ['bob', 'radar', 'eat'], there
  // are 2 palindromes (bob and radar), so the method should return 2

  // 14 - return the shortest word in an array

  // 15 - return the shortest word in an array

  // 16 - add up all the numbers in an array, so [1, 3, 5, 6]
  // returns 15

  // 17 - turn an array into itself repeated twice. So [1, 2, 3]
  // becomes [1, 2, 3, 1, 2, 3]

  // 18 - convert a symbol into a string

  // 19 - get the average from an array, rounded to the nearest integer
  // so [10, 15, 25] should return 17

  // 20 - get all the elements in an array, up until the first element
  // which is greater than five. e.g.
  // [1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7]
  // becomes [1, 3, 5, 4, 1, 2]

  // 21 - turn an array (with an even number of elements) into a hash, by
  // pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
  // {'a' => 'b', 'c' => 'd'}

  // 22 - get all the letters used in an array of words and return
  // it as a array of letters, in alphabetical order
  // . e.g. the array ['cat', 'dog', 'fish'] becomes
  // ['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']

  // 23 - swap the keys and values in a hash. e.g.
  // {'a' => 'b', 'c' => 'd'} becomes
  // {'b' => 'a', 'd' => 'c'}

  // 24 - in a hash where the keys and values are all numbers
  // add all the keys and all the values together, e.g.
  // {1 => 1, 2 => 2} becomes 6

  // 25 - take out all the capital letters from a string
  // so 'Hello JohnDoe' becomes 'ello ohnoe'

  // 26 - round up a float up and convert it to an Integer,
  // so 3.214 becomes 4

  // 27 - round down a float up and convert it to an Integer,
  // so 9.52 becomes 9

  // 28 - take a date and format it like dd/mm/yyyy, so Halloween 2013
  // becomes 31/10/2013

  // 29 - get the domain name *without* the .com part, from an email address
  // so alex@makersacademy.com becomes makersacademy

  // 30 - capitalize the first letter in each word of a string,
  //  except 'a', 'and' and 'the'
  // *unless* they come at the start of the start of the string, e.g.
  // 'the lion the witch and the wardrobe' becomes
  // 'The Lion the Witch and the Wardrobe'

  // 31 - return true if a string contains any special characters
  // where 'special character' means anything apart from the letters
  // a-z (uppercase and lower) or numbers

  // 32 - get the upper limit of a range. e.g. for the range 1..20, you
  // should return 20

  // 33 - should return true for a 3 dot range like 1...20, false for a
  // normal 2 dot range

  // 34 - get the square root of a number

  // 35 - count the number of words in a file

  // --- tougher ones ---
  //
  // call an arbitrary method from a string. so if I
  // called call_method_from_string('foobar')
  // the method foobar should be invoked

  // return true if the date is a uk bank holiday for 2014
  // the list of bank holidays is here:
  // https://www.gov.uk/bank-holidays

  // given your birthday this year, this method tells you
  // the next year when your birthday will fall on a friday
  // e.g. january 1st, will next be a friday in 2016
  // return the day as a capitalized string like 'Friday'

  // in a file, total the number of times words of different lengths
  // appear. So in a file with the text "the cat sat on the blue mat"
  // I have 5 words which are 3 letters long, 1 which is 2 letters long
  // and 1 that is 4 letters long. Return it as a hash in the format
  // word_length => count, e.g. {2 => 1, 3 => 5, 4 => 1}

  // implement fizzbuzz without modulo, i.e. the % method
  // go from 1 to 100
  // (there's no RSpec test for this one)

  // print the lyrics of the song 99 bottles of beer on the wall
  // http://www.99-bottles-of-beer.net/lyrics.html
  // make sure you use the singular when you have one bottle of
  // beer on the wall, and print 'no more bottles of beer on the wall'
  // at the end.
  // (there's no RSpec test for this one)

}
