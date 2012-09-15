var should = require( "should" );
var _ = require( "underscore" );
var Harness = require( "anvil.js" ).PluginHarness;

var harness = new Harness( "anvil.markdown", "./" ),
		tests = [];

harness.addFile( "./src/test.md", "# Test!" );
harness.expectFile( "./lib/test.html", "<h1 id=\"test\">Test!</h1>" );

describe( "when compiling markdown", function() {

	before( function( done ) {
		harness.build(
			function( x, y ) {
				y.should.equal( x );
			},
			function( results ) {
				tests = results;
				done(); 
			}
		);
	} );

	it( "should compile markdown to html", function() {
		_.each( tests, function( test ) {
			test.call();
		} );
	} );

} );
