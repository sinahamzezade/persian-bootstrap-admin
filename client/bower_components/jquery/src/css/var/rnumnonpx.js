define([
	"clientclientvar/pnum"
], function( pnum ) {
	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
});
