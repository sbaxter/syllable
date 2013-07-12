"use strict";

var prompt = require( 'prompt' )
, Response = require( './lib/response' )
, schema = {
  properties: {
    raw: {
      description: 'give me a word:'
      , required: true
    }
  }
};

// Prompt config.
prompt.message = '';
prompt.delimiter = '';
prompt.start();


// UI.
console.log( '\nSyllable v0.0.0 \n-----------------------' );

prompt.get( schema, function ( err, input ) {
  console.dir( new Response( input ) );
  console.log( '--- end ---' );
});
