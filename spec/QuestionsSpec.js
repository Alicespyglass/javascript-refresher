describe('Questions', function () {
  var questions;

  beforeEach(function () {
    questions = new Questions();
  });

  it ('1 - Select Elements Starting With A', function () {
    const n = ['bananas', 'apples', 'pears', 'avocados'];
    expect(questions.selectElementsStartingWithA(n)).toEqual(['apples', 'avocados']);
  });

  it ('2 - keep only the elements that start with a vowel', function () {
    const n =  ['john', 'david', 'omar', 'fred', 'idris', 'angela']
    expect(questions.selectElementsStartingWithVowel(n)).toEqual(['omar', 'idris', 'angela']);
  });

});
