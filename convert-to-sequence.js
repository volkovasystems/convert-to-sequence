( function module( ){
	var window = window || null;
	var exports = exports || { };
	var base = window || exports;
	if( typeof define != "function" ){ var define = require( "amdefine" )( module ); }
	var include = require( "requirejs" );
	include.config( {
		"paths": {
			"convertToSequence": "./convert-to-sequence",
			"work": "./work/work"
		},
		"nodeRequire": require
	} );
	define( "convertToSequence",
		[
			"fs",
			"work"
		],
		function construct( fs ){
			var convertToSequence = function convertToSequence( sequence, dictionary, separator, callback ){
			};

			return convertToSequence;
		} );
	include( "convertToSequence" );
} )( );