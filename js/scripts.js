var isVowel = function(letter) {
  var vowels = ['a', 'e', 'o', 'u', 'i', 'y']
  if (vowels.indexOf(letter) >= 0) {
    return true;
  } else {
    return false;
  }
};

var inPigLatin = function(text) {
  if (isVowel(text[0]) && text[0] != "y") {
    text += "ay";
    return text;
  } else {
    return text.slice(1) + text[0] + "ay"
  }
};
