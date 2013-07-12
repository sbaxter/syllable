"use strict";

/**
 * Methods used to scrub app input.
 */
module.exports = {

  /**
   * Our access to the clean functions.
   */
  run: function ( str ) {
    this.setTarget( str );

    this.trim()
        .condenseSpaces()
        .divideWords();

    return this.target;
  }


  /**
   * Set the target.
   */
  , setTarget: function ( str ) {
    this.target = str;

    // store a copy of the original string.
    this.original = str;

    return this;
  }


  /**
   * All consecutive whitespace characters condensed a single space.
   */
  , condenseSpaces: function () {
    this.target = this.target.replace( /\s+/g, ' ' );

    return this;
  }


  /**
   * Divide a string into words, using the single whitespace as the delimiter.
   */
  , divideWords: function () {
    this.target = this.target.split( ' ' );

    return this;
  }


  /**
   * Trim whitespace at the beginning and end of a string
   */
  , trim: function () {
    this.target = this.target.replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' );

    return this;
  }
};
