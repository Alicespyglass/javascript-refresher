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
    array.forEach(function (element) {
      if (element.match(/^[aeiou]/i)) {
        ans2.push(element);
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
}
