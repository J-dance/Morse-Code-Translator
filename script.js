// must import each function used here:
import { translateEnglishToMorse, translator, translateMorseToEnglish, splitWord, splitMorseWord, splitSentance, splitMorseSentance, splitSentanceToCharacter, splitMorseSentanceToMorseCharacter,  translateAllEtoM, translateAllMtoE  } from './translator.js';
// import
//  ----------------------------------
//  Put your event handlers/DOM interactions in here to call/invoke functions 

// global variable
let option = 1; /* option default is english to morse */

// display translated result into document
const displayResult = (result) => {
  document.getElementById('display').innerHTML = result;
};

const clearInputBox = () => {
  document.getElementById('box').value = '';
}

const englishOption = () => {
  // english to morse selected
  option = 1;
  clearInputBox();
  document.getElementById('arrowSign').innerHTML = '<i class="far fa-arrow-alt-circle-right"></i>';
}

const morseOption = () => {
  // morse to enlgish selected
  option = 2;
  clearInputBox();
  document.getElementById('arrowSign').innerHTML = '<i class="far fa-arrow-alt-circle-left"></i>';
};

const translateIt = () => {

  console.log(option);
  let result = '';
  if (option == 1) {
    let sentance = document.getElementById('box').value;
    sentance = sentance.toLowerCase();
    result = translateAllEtoM(sentance);
  }
  else if (option == 2) {
    let sentance = document.getElementById('box').value;
    result = translateAllMtoE(sentance);
  }
  // console.log
  if (result.includes('-1')) {
    displayResult("invalid input");
  }
  else {
    displayResult(result);
  }
};

document.getElementById('englishLabel').addEventListener("click", englishOption);

document.getElementById('morseLabel').addEventListener("click", morseOption);

// translate
document.getElementById('button').addEventListener("click", translateIt) 