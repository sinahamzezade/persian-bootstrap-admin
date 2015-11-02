define([
	"clientvar/support"
], function( support ) {

support.focusinBubbles = "onfocusin" in window;

return support;

});
