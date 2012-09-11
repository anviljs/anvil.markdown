/*
	anvil.markdown - Markdown compiler plugin for anvil.js
	version: 0.0.2
	author: Mike Hostetler <mike.hostetler@gmail.com> (http://mike-hostetler.com)
	copyright: 2012
	license: Dual licensed 
			 MIT (http://www.opensource.org/licenses/mit-license)
			 GPL (http://www.opensource.org/licenses/gpl-license)
*/
var showdown = require( "showdown" );
var converter = new showdown.converter();

module.exports = converter.makeHtml;