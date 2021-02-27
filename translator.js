
// define global object for english key -> morse value
export const translator = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '- ....',
    7: '-- ...',
    8: '---..',
    9: '----.',
    0: '-----'
};

//  -------------------------
// translator function assumes input is in correct format.
// 1. english to morse
export const translateEnglishToMorse = (input) => {
  let result = translator[input];
    // check for invalid input
  if (result == undefined) {
    return -1;
  }
  else {
    return result;
  }
}

// 2. morse to english
export const translateMorseToEnglish = (input) => {
  let result = Object.keys(translator).find(key => translator[key] === input);
  // check for invalid input
  if (result == undefined) {
    return -1;
  }
  else {
    return result;
  }
}
//  -------------------------
// translate words using translate character functions
// assume word is a string format
export const splitWord = (word) => {
  // split word at spaces. Each array element is a morse character
  return word.split('');
}

// translate morse-word assuming valid input
// split morse-word at ' '
export const splitMorseWord = (word) => {
  // split morse-word at ' '. Each array element is an english letter 
  return word.split(' ');
}
// --------------------------
// split sentance input and output words
export const splitSentance = (sentance) => {
  return sentance.split(' ');
}

export const splitMorseSentance = (sentance) => {
  return sentance.split(' / ');
}
// --------------------------
// Apply split sentance into characters
export const splitSentanceToCharacter = (sentance) => {
  // split sentance into array of words
  let wordArray = splitSentance(sentance);
  // for each word, split into array of characters and place each array of characters in an array of words
  return wordArray.map((word) => {
    return splitWord(word);
  })
}

export const splitMorseSentanceToMorseCharacter = (sentance) => {
  // split sentance into array of words
  let wordArray = splitMorseSentance(sentance);
  // for each word, split into array of characters and place each array of characters in an array of words
  return wordArray.map((word) => {
    return splitMorseWord(word);
  })
}

// --------------------------
// translate sentances
export const translateAllEtoM = (sentance) => {
  let result = splitSentanceToCharacter(sentance);
  // for each word map word
  // translatedArray is the translated sentance with each element array being a word
  let translatedArray = result.map((word) => {
    // for each letter map letter
   let answer = word.map((letter) => {
      return translateEnglishToMorse(letter);
    });
    // add '/' after each character/letter
    let length = answer.push('/');
    return answer;
  });
  // join letters to words, words to sentances and slice off last two letters ( /)
  return translatedArray.map(word => {
    return word.join(' ');
  }).join(' ').slice(0, -2);
}

export const translateAllMtoE = (sentance) => {
  let result = splitMorseSentanceToMorseCharacter(sentance);
  // for each morse-word map morse-word
  // translatedArray is the translated sentance with each element array being a word
  let translatedArray = result.map((word) => {
    // for each morse-letter map morse-letter translation
   let answer = word.map((letter) => {
      return translateMorseToEnglish(letter);
    });
    return answer;
  });
  // join letters to words, words to sentances and slice off last two letters ( /)
  return translatedArray.map(word => {
    return word.join('');
  }).join(' ');
}