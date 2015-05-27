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
    var n = 1
    while (!isVowel(text[n]) || (text[n] === "u" && text[n-1] === "q")) {
     n += 1;
    }
    return text.slice(n) + text.slice(0,n) + "ay";
  }
};
