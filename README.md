Functionality:
1. Object for translator containing the information with each key being a character and the corresponding value being the translated value.
2. User enters a character and a function will check to see whether it is english to morse or vise versa.
3. This function will also check whether it is a valid input (Not a number, undefined, null, character length, character type, spaces used etc..).
4. Once input is confirmed valid, the tranlsator function will be called, passing in the appropriate object and input character. 
  - the function will find the key which matches the input and return the corresponding value.
5. the result is displayed on screen

Objectives:
  1. translate single characters
  2. translate a string of characters (word)
  3. translate a string of words (senatance)

Objective 2: seperate each character with a space in display.
Objective 3: seperate words with a ' / '

Testing:
1. Tests are written in translator.spec.js file. 
2. In terminal for setup: 'npm init' -> 'npm install jest --save-dev', 'npm install @babel/  plugin-transform-modules-commonjs --save-dev'.
3. Testing run using 'npm test' - this runs jest testing
4. Testing for:
  -  Each character is correctly translated from english to morse and vise versa.
  -  Checks for invalid inputs:
    - checks for null, undefined, NaN, Numbers, mixture of characters (morse and letters/symbols), empty
    - checks for length of input and use of spaces 