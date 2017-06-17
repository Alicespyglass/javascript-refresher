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


}
