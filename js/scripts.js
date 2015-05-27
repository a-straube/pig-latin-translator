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
    if (!isVowel(text[1]) && (!isVowel(text[2]) || (text[2] === "u" && text[1] === "q"))) {
      return text.slice(3) + text.slice(0, 3) + "ay";
    }
    else if (!isVowel(text[1]) || (text[1] === "u" && text[0] === "q")) {
      return text.slice(2) + text.slice(0, 2) + "ay";
    } else {
      return text.slice(1) + text[0] + "ay";
    }
  }
};
