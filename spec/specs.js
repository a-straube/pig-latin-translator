describe('isVowel', function() {
  it('returns true if the letter is a vowel', function() {
    expect(isVowel('a')).to.equal(true);
  });

  it('returns false if the letter is not a vowel', function() {
    expect(isVowel('b')).to.equal(false);
  });
});

describe('inPigLatin', function() {
  it('puts "ay" at the end of a word starting with a vowel', function() {
    expect(inPigLatin('eat')).to.equal('eatay');
  });

  it('treats "y" as a consonant', function() {
    expect(inPigLatin('yes')).to.equal('esyay')
  });

  it('moves the first letter of a word to the end of a word if it is a consonant and adds ay to the end', function() {
    expect(inPigLatin('tea')).to.equal('eatay');
  });

  it('moves the first two letters of a word to the end of the word if they are both consonants, and adds ay to the end', function() {
    expect(inPigLatin('the')).to.equal('ethay');
  });

  it('moves first three letters to end and adds "ay" if they are consonants', function() {
    expect(inPigLatin('three')).to.equal('eethray');
  });

  it('moves "qu" together as consonants to the end and adds "ay"', function() {
    expect(inPigLatin('squeel')).to.equal('eelsquay');
  });

  it('works for words starting with 4 or more consonants', function() {
    expect(inPigLatin('schmaltzy')).to.equal('altzyschmay');
  })
});

describe('startIndex', function() {
  it('returns the index of the first vowel of a word', function() {
    expect(startIndex('three')).to.equal(3);
  })
});
