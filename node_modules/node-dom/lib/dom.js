/*
Copyright (c) 2011 jCore - Aymeric Vitte - MIT license
*/

var	URL = require('url'),
	Context = process.binding('evals').Context,
	WINDOW=exports.WINDOW=require('./browser/index.js').WINDOW,
	DOCUMENT=exports.DOCUMENT=require('./browser/index.js').DOCUMENT,
	NODE=exports.NODE=require('./browser/index.js').NODE,
	CORE=exports.CORE=require('./browser/index.js').CORE,
	vm  = require('vm');
	
// standard case
var	parser = require('./browser/htmltodom.js').parser;
//

var dom = exports.dom = function(page,level,options) {

	var tmpdom=[],
		url=options.url,
		ini=options.ini||0,
		features=options.features,
		ew=typeof(features.ew)=="undefined"?'':features.ew;

	//if (ew!=='') {
	//	parser=require('./ew/ew.js').parser;
	//};

	var document=new DOCUMENT(parser,options);
	
	var	window=new WINDOW(document);
	
	window = vm.createContext(window); //Turn window into a context
	
	window.window=window; //assign window global var to window context
	
	var onl=function(fn) {
		CORE.onload.call(window,fn);
	};
	
	Object.defineProperty(window, 'onload', {get : function() {}, set : onl}); 	//define here - setters and getters destroyed by context
	
	//See "bug" #1770 bnoordhuis answer

	window.setTimeout = setTimeout;
	
	vm.runInContext('                                       	\
	  setTimeout = (function(setTimeout_) {                 	\
		return function(cb, timeout) {							\
		  if (typeof cb !== "function") cb = Function(cb);		\
		  var db=function() {try {cb()} catch(ee) {console.log("timeout error")}};	\
		  return setTimeout_(db, timeout);                  	\
		};                                                  	\
	  })(setTimeout)', window);
	  
	window.setInterval = setInterval;
	
	vm.runInContext('                                       	\
	  setInterval = (function(setInterval_) {                 	\
		return function(cb, timeout) {                      	\
		  if (typeof cb !== "function") cb = Function(cb);  	\
		  var db=function() {try {cb()} catch(ee) {console.log("interval error")}};	\
		  return setInterval_(db, timeout);                  	\
		};                                                  	\
	  })(setInterval)', window);
	
	document._parentNode=window;
	
	document._ew=ew;

	var tmpi=new Date().valueOf()-ini;

	console.log('calling parser'+tmpi);

	var tmp=CORE.HtmlToDom(page,document);

	var tmpi=new Date().valueOf()-ini;

	console.log('end parser '+tmpi);

	var d=tmp.dom;

	for (var n in d) {
		var el=d[n];
		if  ((el.type!='directive')&&(el.type!='comment')) {//dont care about doctype or comments
			tmpdom.push(el);
		};
		
	};
	
	//TODO: reorganize the DOM to get <html><head></head><body></body>
	//Or at least head and body
	
	document.children=tmpdom;

	document.setTree();
	
	delete document.children;

	var tmpi=new Date().valueOf()-ini;

	document.close(); 	//resume resources, readystate complete, fires onload for elements
						//fire timers (not used)
			
	return window;
			
};

