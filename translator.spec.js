import { expect } from '@jest/globals';
import { clear } from 'console';
import { translateEnglishToMorse, translator, translateMorseToEnglish, splitWord, splitMorseWord, splitSentance, splitMorseSentance, splitSentanceToCharacter, splitMorseSentanceToMorseCharacter,  translateAllEtoM, translateAllMtoE } from './translator.js';
// import { splitSentanceToCharacter } from './script';

// test lots of valid inputs: english to morse
it ('should translate a to .- and 1 to .----', () => {
  const result = translateEnglishToMorse('a');
  const result2 = translateEnglishToMorse('1');
  expect(result).toBe('.-');
  expect(result2).toBe('.----');
})

// test for valid inputs: morse to english
it ('Should translate .- to a and .---- to 1', () => {
  const result = translateMorseToEnglish('.-');
  const result2 = translateMorseToEnglish('.----');
  expect(result).toBe('a');
  expect(result2).toBe('1');
})

// *** invalid tests ***
// should return -1 for invalid tests which script.js function checks for
// 1. check for undefined
it ('Should return -1 if input is undefined', () => {
  const result = translateMorseToEnglish(undefined);
  expect(result).toBe(-1);
})

// 2. check for null
it ('Should return -1 if input is null', () => {
  const result = translateMorseToEnglish(null);
  expect(result).toBe(-1);
})

// 3. check for empty
it ('Should return -1 if input is empty', () => {
  const result = translateMorseToEnglish('');
  expect(result).toBe(-1);
})

// 3. check for invalid characters
it ('Should return -1 if input is !', () => {
  const result = translateMorseToEnglish('!');
  expect(result).toBe(-1);
})

// 4. check for NaN 
it ('Should return -1 if input is NaN', () => {
  const result = translateMorseToEnglish(NaN);
  expect(result).toBe(-1);
})
//  -----------------------
// Test words splitter
it ('Should return [a, a, a] for input aaa', () => {
  const result = splitWord('aaa');
  expect(result).toEqual(['a', 'a', 'a']);
})

// test morse splitter
it ('Should return an array of morse-characters in array from morse-word', () => {
  const result = splitMorseWord('.- .- .-');
  expect(result).toEqual(['.-', '.-', '.-']);
})

// ------------------------
// test for sentances splitter
it ('Should return array of words in order', () => {
  const result = splitSentance('Hello my name is jojo');
  expect(result).toEqual(['Hello', 'my', 'name', 'is', 'jojo']);
})

// test morse-sentance splitter
it ('Should return ', () => {
  const result = splitMorseSentance('.- .- .- / .- / .-');
  expect(result).toEqual(['.- .- .-', '.-', '.-']);
})

// ------------------------
// test split sentance to characters
it ('Should return array of words with array of letters within', () => {
  const result = splitSentanceToCharacter('Hello there');
  expect(result).toEqual([['H', 'e', 'l', 'l', 'o'], ['t', 'h', 'e', 'r', 'e']]);
})

it ('Should return array of words with array of morse-letters within', () => {
  const result = splitMorseSentanceToMorseCharacter('.- .- .- / .- / .-');
  expect(result).toEqual([['.-', '.-', '.-'], ['.-'], ['.-']]);
})
// ------------------------
// test translate sentance to morse
it ('Should return .- .- .- / .- .- / .- from input aaa aa a', () => {
  const result = translateAllEtoM('aaa aa a');
  expect(result).toBe('.- .- .- / .- .- / .-');
})

// test translate morse-sentance to english
it ('Should return aaa aa a from input .- .- .- / .- .- / .-', () => {
  const result = translateAllMtoE('.- .- .- / .- .- / .-');
  expect(result).toBe('aaa aa a');
})