var markdown = require( "github-flavored-markdown" );

var markdownCompilerFactory = function( _, anvil ) {
	return anvil.plugin( {
		name: "anvil.markdown",
		
		configure: function( config, command, done ) {
			anvil.addCompiler( ".md", this );
			done();
		},

		compile: function( content, done ) {
			try {
				var compile = markdown.parse( content );
				done( compile({}) );
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
