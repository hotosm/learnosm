/*
Copyright (c) 2011 jCore - Aymeric Vitte - MIT license
*/

var parser=exports.parser=require('../browser/htmltodom.js').parser,
	//createProxy=require('../proxy/proxy.js').createProxy,
	HTMLDecode=require('../browser/htmlencoding.js').HTMLDecode;

var __cc=function(tmp) {
var node = tmp;
var str = node._nodeValue.toString().replace(/^\s+/g,'').replace(/\s+$/g,'') ;
var reprix0 = /руб|\$|€|£|₤|¥|Ұ|￥|円|元|圓|EUR|USD|CHF/g;
//var reprix0=['руб','$','€','£','₤','¥','Ұ','￥','円','元','圓','EUR','USD','CHF'];
if (str.match(reprix0)){
//for (var n in reprix0) {
	//if (str.indexOf(n)!=-1) {
	return true;
	//}
}

return false;
};

parser.ParseHtml = function(rawHtml,ew,_ewList){
	//modif ew
	var owriteText=this.DefaultHandler.prototype.writeText;
	this.DefaultHandler.prototype.writeText = function DefaultHandler$writeText (element) {
	if (ew==0) {
			if (element.data.trim()!='') {
			element._nodeValue=HTMLDecode(element.data); //adaptation for parser
				if (__cc(element)) {
					_ewList.push(element);
				};
		};
	}
	owriteText.call(this,element);
	}

			var handler = new this.DefaultHandler();
			//var handler = createProxy(new this.DefaultHandler());				
			var parser = new this.Parser(handler);
			
			
				parser.includeLocation = false;
				parser.parseComplete(rawHtml);
				
			return {dom : handler.dom, _ewList : _ewList};
};
