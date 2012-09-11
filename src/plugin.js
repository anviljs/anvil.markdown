var marked = require( "./marked" );
var showdown = require( "./showdown" );

var markdownCompilerFactory = function( _, anvil ) {
	var compile = _.compose( marked, showdown );

	return anvil.plugin( {
		name: "anvil.markdown",
		
		configure: function( config, command, done ) {
			anvil.addCompiler( ".md", this );
			done();
		},

		compile: function( content, done ) {
			try {
				var compiled = compile( content );
				done( compiled );
			} catch ( error ) {
				done( "", error );
			}
		},

		rename: function( name ) {
			return name.replace( ".md", ".html" );
		}
	} );
};

module.exports = markdownCompilerFactory;
