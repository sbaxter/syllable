"use strict";

/**
 * Count the number of vowels in a string (excluding `y`).
 */
function countVowels( str ) {
  var vowels = str.match( /[aeiou]/gi );

  return vowels ? vowels.length : 0;
}


// Export the Word constructor.
module.exports = function ( str ) {
  this.length = str.length;
  this.value = str;
  this.numVowels = countVowels( str );
};
