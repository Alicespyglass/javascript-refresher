describe('Questions', function () {
  var questions;

  beforeEach(function () {
    questions = new Questions();
  });

  it ('1 - Select Elements Starting With A', function () {
    const n = ['bananas', 'apples', 'pears', 'avocados'];
    expect(questions.selectElementsStartingWithA(n)).toEqual(['apples', 'avocados']);
  });
});
