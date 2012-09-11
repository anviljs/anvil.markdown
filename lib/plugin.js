/*
	anvil.markdown - Markdown compiler plugin for anvil.js
	version: 0.0.2
	author: Mike Hostetler <mike.hostetler@gmail.com> (http://mike-hostetler.com)
	copyright: 2012
	license: Dual licensed 
			 MIT (http://www.opensource.org/licenses/mit-license)
			 GPL (http://www.opensource.org/licenses/gpl-license)
*/
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
