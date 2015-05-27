var isVowel = function(letter) {
  return /[aeiouy]/.test(letter.toLowerCase());
};


var wordInPigLatin = function(word) {
  if (isVowel(word[0]) && word[0] != "y") {
    word += "ay";
    return word;
  } else {
    var n = startIndex(word);
    return word.slice(n) + word.slice(0,n) + "ay";
  }
};

var startIndex = function(word) {
  var n = 1;
  while (!isVowel(word[n]) || (word[n] === "u" && word[n-1] === "q")) {
   n += 1;
  }
  return n;
};

var sentenceInPigLatin = function(sentence) {
  return sentence.replace(/[A-Za-z]+/g, function(strWord) { return wordInPigLatin(strWord); });
};
