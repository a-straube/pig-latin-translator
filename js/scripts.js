var isVowel = function(letter) {
  var vowels = ['a', 'e', 'o', 'u', 'i', 'y']
  if (vowels.indexOf(letter.toLowerCase()) >= 0) {
    return true;
  } else {
    return false;
  }
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
  var toBeSplit = sentence.split(" ");
  var returnSentence = toBeSplit.map (function(word) {return wordInPigLatin(word);}) ;
  return returnSentence.join(" ");
};
