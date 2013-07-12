"use strict";

/**
 * Count the number of vowels in a string
 *   Note: we aren't giving `y` full credit, so this is not to be
 *   considered a `true` vowel count.
 */
function countVowels( str ) {
  var vowels = str.match( /[aeiou]/gi )
    , count = vowels ? vowels.length : 0;

  return count + sometimesY( str );
}


/**
 * Add Y to our vowel count.
 */
function sometimesY( str ) {
  var test = str.match( /y/gi )
    , count
    , dipthong
    , lead
    , sandwich;

  // no ys, get out.
  if ( !test ) { return 0; }

  count = test.length;

  // Is it a dipthong? Technically it is a vowel, but we don't need to
  //   count it for our purposes.
  dipthong = str.match( /[aeiou]y[^aeiou]/gi );
  count = dipthong ? count - dipthong.length : count;

  // Does it lead a vowel?
  lead = str.match( /[^aeiou]y[aeiou]/gi );
  count = lead ? count - lead.length : count;

  // Is it sandwiched?
  sandwich = str.match( /[aeiou]y[aeiou]/gi );
  count = sandwich ? count - sandwich.length : count;

  // All others must be vowels.
  return count;
}


// Export the Word constructor.
module.exports = function ( str ) {
  this.length = str.length;
  this.value = str;
  this.numVowels = countVowels( str );
};
