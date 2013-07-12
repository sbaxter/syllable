"use strict";

var assert = require( 'assert' )
  , Response = require( '../lib/Response' );

suite( 'Response', function () {
  var input = '    put it     all   2gether '
    , obj = new Response( { raw: input } );

  test( 'should save the raw input', function () {
    assert.equal( obj.raw, input );
  });

  test( 'should return an array of words', function () {
    assert.deepEqual( obj.wordList, [ 'put', 'it', 'all', '2gether' ]);
  });


  test( 'should return the expected response object', function () {
    var expected = {
      raw: '    put it     all   2gether '
      , wordList: [ 'put', 'it', 'all', '2gether' ]
      , words: [
       { length: 3, value: 'put', numVowels: 1 }
       , { length: 2, value: 'it', numVowels: 1 }
       , { length: 3, value: 'all', numVowels: 1 }
       , { length: 7, value: '2gether', numVowels: 2 }
      ]
    };

    assert.deepEqual( obj, expected );
  });
});
