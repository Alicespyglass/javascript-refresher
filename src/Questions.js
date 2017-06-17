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

  // # remove instances of null (but NOT false) from an array
  Questions.prototype.removeInstancesOfNull = function (array) {
    const ans3 = [];
    array.forEach(function (element) {
      if (element !== null) {
        ans3.push(element);
      }
    });
    return ans3;
  };

  // remove instances of nil AND false from an array
  Questions.prototype.removeInstancesOfNullAndFalse = function (array) {
    const ans4 = [];
    array.forEach(function (element) {
      if (element !== null && element !== false ) {
        ans4.push(element);
      }
    });
    return ans4;
  };

  // don't reverse the array, but reverse every word inside it. e.g.
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

  // given an array of student names, like ['Bob', 'Dave', 'Clive']
  // give every possible pairing - in this case:
  // [['Bob', 'Clive'], ['Bob', 'Dave'], ['Clive', 'Dave']]
  // make sure you don't have the same pairing twice,
  Questions.prototype.nCrPairing = function (array) {
    var pairs = [];
    var pos = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        pairs[pos++] = [array[i], array[j]];
      }
    }
    return pairs;
  };

}
