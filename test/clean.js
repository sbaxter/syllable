"use strict";

var assert = require( 'assert' )
  , clean  = require( '../lib/clean' );

suite( 'clean', function () {

  suite( 'condenseSpaces', function () {
    var cases = [
      { target: 'pull       together', result: 'pull together'
        , message: 'should collapse white space' }
    ];

    cases.forEach( function ( obj ) {
      test( obj.message, function () {
        clean.target = obj.target;
        clean.condenseSpaces();

        assert.equal( obj.result, clean.target );
      });
    });
  });


  suite( 'divide words', function () {
    var cases = [
      { target: 'two words'
        , result: [ 'two', 'words' ]
        , message: 'create an array of words' }
      , { target: 'a string with more than two words'
        , result: [ 'a', 'string', 'with', 'more', 'than', 'two', 'words' ]
        , message: 'create an array of words' }
    ];

    cases.forEach( function ( obj ) {
      test( obj.message, function () {
        clean.target = obj.target;
        clean.divideWords();

        assert.deepEqual( obj.result, clean.target );
      });
    });
  });

  suite( 'trim', function () {
    var cases = [
      { target: '  leading', result: 'leading'
        , message: 'should trim leading white spaces' }
      , { target: 'trailing  ', result: 'trailing'
        , message: 'should trim trailing white spaces' }
      , { target: '  multi leading', result: 'multi leading'
        , message: 'should trim leading white spaces' }
      , { target: 'multi trailing  ', result: 'multi trailing'
        , message: 'should trim trailing white spaces' }
      , { target: '  both  ', result: 'both'
        , message: 'should trim both trailing and leading white spaces' }
    ];

    cases.forEach( function ( obj ) {
      test( obj.message, function () {
        clean.target = obj.target;
        clean.trim();

        assert.equal( obj.result, clean.target );
      });
    });
  });

  suite( 'run', function () {
    test( 'should return an array of words', function () {
      var challenge = '    put it     all   2gether '
        , check = clean.run( challenge );

      assert.deepEqual( check, [ 'put', 'it', 'all', '2gether' ] );
      assert.equal( clean.original, challenge );
    });
  });
});
