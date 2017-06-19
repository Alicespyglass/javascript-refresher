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
  });

  it ('5c - reverse each word in array - recursion', function () {
    const n = ['dog', 'monkey', 'elephant'];
    expect(questions.reverseEachWordInArrayByRecursion(n)).toEqual(['god', 'yeknom', 'tnahpele']);
  });

  it ('6 - nCr pairing combinations', function () {
    const n = ['Bob', 'Dave', 'Clive'];
    expect(questions.nCrPairing(n)).toEqual([['Bob', 'Dave'], ['Bob', 'Clive'], ['Dave', 'Clive']]);
  });

  it ('7 - discard first 3 elements of an array', function () {
    const n = [1, 2, 3, 4, 5, 6, 7];
    expect(questions.discardFirst3Elements(n)).toEqual([4, 5, 6, 7]);
  });

  it ('8 - add an element to the beginning of an array', function () {
    const n = [2, 3, 4, 5],
      element = 1;
    expect(questions.addElementToBeginning(n, element)).toEqual([1, 2, 3, 4, 5]);
  });

  it ('9 - sort an array of words by their last letter', function () {
    const n = ['sky', 'puma', 'maker'];
    expect(questions.sortArrayByLastLetter(n)).toEqual(['puma', 'maker', 'sky']);
  });

  it ('10 - cut strings in half and return first half. Round up if string is odd', function () {
    let a = 'banana',
      b = 'apple';
    expect(questions.cutStringsInHalf(a)).toEqual('ban');
    expect(questions.cutStringsInHalf(b)).toEqual('app');
  });

  it ('11 - turn a positive integer into a negative integer', function () {
    const a = 5,
      b = -7;
    expect(questions.turnNegative(a)).toEqual(-5);
    expect(questions.turnNegative(b)).toEqual(-7);
  });

  it ('12 - turn array of numbers into 2 arrays of odd and even numbers (even first)', function () {
    const a = [1, 2, 3, 4, 5, 6, 7];
    expect(questions.oddEvenArrays(a)).toEqual([[2, 4, 6], [1, 3, 5, 7]]);
  });

  it ('13 - count the number of elements in an array that are palindromes', function () {
    const a = ['bob', 'radar', 'alex', 'noon', 'banana'];
    expect(questions.countPalindromes(a)).toEqual(3);
  });

  it ('14 - return the shortest word in an array', function () {
    const a = ['here', 'is', 'a', 'bunch', 'of', 'words', 'of', 'different', 'lengths'];
    expect(questions.shortestWord(a)).toEqual('a');
  });

  it ('15 - return the longest word in an array', function () {
    const a = ['here', 'is', 'a', 'bunch', 'of', 'words', 'of', 'different', 'lengths'];
    expect(questions.longestWord(a)).toEqual('different');
  });

  it ('16 - add up all numbers in an array', function () {
    const a = [1, 3, 5, 6];
    expect(questions.addUpAllNumbers(a)).toEqual(15);
  });

  it ('17 - turn array into itself repeated twice', function () {
    const a = [1, 2, 3];
    expect(questions.repeatArray(a)).toEqual([1, 2, 3, 1, 2, 3]);
  });

  it ('18 - convert a symbol into a string', function () {
    let a = Symbol();
    expect(questions.symbolToString(a)).toEqual('Symbol()');
  });

  it ('19 - get the average from an array, rounded to nearest integer', function () {
    const a = [10, 15, 25];
    expect(questions.averageArray(a)).toEqual(17);
  });

  it ('20 - get elements in an array, up until the first greater than 5', function () {
    const a = [1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7];
    expect(questions.until6Elements(a)).toEqual([1, 3, 5, 4, 1, 2]);
  });

});
