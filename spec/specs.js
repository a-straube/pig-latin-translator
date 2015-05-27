describe('isVowel', function() {
  it('returns true if the letter is a vowel', function() {
    expect(isVowel('a')).to.equal(true);
  });

  it('returns false if the letter is not a vowel', function() {
    expect(isVowel('b')).to.equal(false);
  });
});

describe('wordInPigLatin', function() {
  it('puts "ay" at the end of a word starting with a vowel', function() {
    expect(wordInPigLatin('eat')).to.equal('eatay');
  });

  it('treats "y" as a consonant', function() {
    expect(wordInPigLatin('yes')).to.equal('esyay')
  });

  it('moves the first letter of a word to the end of a word if it is a consonant and adds ay to the end', function() {
    expect(wordInPigLatin('tea')).to.equal('eatay');
  });

  it('moves the first two letters of a word to the end of the word if they are both consonants, and adds ay to the end', function() {
    expect(wordInPigLatin('the')).to.equal('ethay');
  });

  it('moves first three letters to end and adds "ay" if they are consonants', function() {
    expect(wordInPigLatin('three')).to.equal('eethray');
  });

  it('moves "qu" together as consonants to the end and adds "ay"', function() {
    expect(wordInPigLatin('squeel')).to.equal('eelsquay');
  });

  it('works for words starting with 4 or more consonants', function() {
    expect(wordInPigLatin('schmaltzy')).to.equal('altzyschmay');
  })

  it('works for capitalized words starting with a consonant', function() {
    expect(wordInPigLatin('Three')).to.equal('eeThray');
  });

  it('works for capitalized words starting with a vowel', function() {
    expect(wordInPigLatin('Ate')).to.equal('Ateay');
  });
});

describe('startIndex', function() {
  it('returns the index of the first vowel of a word', function() {
    expect(startIndex('three')).to.equal(3);
  });

  it('treats "u" as a consonant when preceded by a "q"', function() {
    expect(startIndex('squrtquae')).to.equal(7);
  });
});

describe('sentenceInPigLatin', function() {
  it('translates each word in a sentence to pig latin', function() {
    expect(sentenceInPigLatin('Hello World')).to.equal('elloHay orldWay');
  });

  it('works with punctuation', function() {
    expect(sentenceInPigLatin('The world, is round?')).to.equal('eThay orldway, isay oundray?');
  });
});
