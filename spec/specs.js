describe('isVowel', function() {
  it('returns true if the letter is a vowel', function() {
    expect(isVowel('a')).to.equal(true);
  });

  it('returns false if the letter is not a vowel', function() {
    expect(isVowel('b')).to.equal(false);
  });
});
