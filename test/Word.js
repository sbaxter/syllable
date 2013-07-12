"use strict";

var assert = require( 'assert' )
  , Word = require( '../lib/Word' );


suite( 'Word', function () {
  var sample = new Word( 'hello' );

  test( 'should count vowels', function () {
    assert.equal( sample.numVowels, 2 );
  });

  test( 'should provide a length', function () {
    assert.equal( sample.length, 5 );
  });

  test( 'should provide original value', function () {
    assert.equal( sample.value, 'hello' );
  });

  test( 'should handle no vowels', function () {
    var x = new Word( 'nmrtb' );

    assert.equal( x.numVowels, 0 );
    assert.equal( x.length, 5 );
    assert.equal( x.value, 'nmrtb' );
  });
});
