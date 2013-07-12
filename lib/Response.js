"use strict";
var clean = require( './clean' )
  , Word = require( './Word' );


// Export the Response constructor.
module.exports = function ( input ) {
  this.raw = input.raw || '';

  this.wordList = clean.run( input.raw );

  this.words = [];

  this.wordList.forEach( function ( str ) {
    this.words.push( new Word( str ) );
  }, this );
};
