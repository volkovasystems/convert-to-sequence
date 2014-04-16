var include = require( "requirejs" );
include( [ "./convert-to-sequence.js" ],
	function(  ){
		var util = require( "util" );
		var convertToSequence = include( "convertToSequence" );
		console.log( util.inspect( convertToSequence ) );
	} );