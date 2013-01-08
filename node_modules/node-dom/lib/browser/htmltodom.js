/* Modified from tmpvar/jsdom (MIT license) */

var parser=exports.parser=null;
	//createProxy=require('../proxy.js').createProxy;

try {
parser = require('htmlparser');
console.log('htmlparser');
} catch (ee) {
	try {
		parser = require('node-htmlparser/lib/node-htmlparser');
	} catch (ee2) {	}
};
		
if (parser.ParseHtml) {
// davglass/node-htmlparser
} else if (parser.DefaultHandler){
// tautologistics/node-htmlparser

parser.ParseHtml = function(rawHtml){
			var handler = new this.DefaultHandler();
			//var handler = createProxy(new this.DefaultHandler());				
			var parser = new this.Parser(handler);
			
			
				parser.includeLocation = false;
				parser.parseComplete(rawHtml);
				
			return handler;
			};
}

var HtmlToDom=function(val) {
return parser.ParseHtml(val);
};

exports.parser=parser;