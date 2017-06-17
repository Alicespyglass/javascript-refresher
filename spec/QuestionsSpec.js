describe('Questions', function () {
  var questions;

  beforeEach(function () {
    questions = new Questions();
  });

  it ('1 - select elements starting with a', function () {
    const n = ['bananas', 'apples', 'pears', 'avocados'];
    expect(questions.selectElementsStartingWithA(n)).toEqual(['apples', 'avocados']);
  });

  it ('2 - keep only the elements that start with a vowel', function () {
    const n =  ['john', 'david', 'omar', 'fred', 'idris', 'angela'];
    expect(questions.selectElementsStartingWithVowel(n)).toEqual(['omar', 'idris', 'angela']);
  });

  it ('3 - remove instances of null', function () {
    const n = ['a', 'b', null, null, false, 'c', null];
    expect(questions.removeInstancesOfNull(n)).toEqual(['a', 'b', false, 'c']);
  });

  it ('4 - remove instances of null and false', function () {
    const n = ['a', 'b', null, null, false, 'c', null];
    expect(questions.removeInstancesOfNullAndFalse(n)).toEqual(['a', 'b', 'c']);
  });

  it ('5a - reverse each word in array - split', function () {
    const n = ['dog', 'monkey', 'elephant'];
    expect(questions.reverseEachWordInArrayBySplit(n)).toEqual(['god', 'yeknom', 'tnahpele']);
  });

  it ('5b - reverse each word in array - loop', function () {
    const n = ['dog', 'monkey', 'elephant'];
    expect(questions.reverseEachWordInArrayByLoop(n)).toEqual(['god', 'yeknom', 'tnahpele']);
  })

});
