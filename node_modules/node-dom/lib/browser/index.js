/*
Copyright (c) 2011 jCore - Aymeric Vitte - MIT license
Some parts inspired from tmpvar/jsdom (MIT license)
*/

var domToHtml	= require('./domtohtml.js').domToHtml,
	HTMLDecode  = require('./htmlencoding').HTMLDecode,
	URL			= require('url'),
	im		  	= require('imagemagick'),
	http      	= require('http'),
    https     	= require('https'),
	default_style = require('./style.js').default_style;

var nbloop=0;

Function.prototype.De=function(obj,_name,_node) {
	var f=this;
	if (typeof(_name)=="undefined")	{
		return function() {
		return f.apply(obj,arguments);
		}
	} else {
	//wrap example
		return function() {
			if (_name=='example') {
				var args = Array.prototype.slice.call(arguments);
				args.unshift(_node);
				return f.apply(obj,args);
			} else {
				return f.apply(obj,arguments);
			}
		}
	}
};


//Some sites do forget to encode the url
//Ex: http://www.carrefour.fr
//TODO: nodejs modification request
//Probably to remove
var fixURI=function(url) {
//return url;
	var re=/%253B|%252C|%252F%253F|%253A|%2540|%2526|%253D|%252B|%2524|%2523/g;
	if (url) {
		url=encodeURI(decodeURI(url));
			/*Example : http://www.google.com/jsapi?autoload=%7B%22modules%22%3A%5B%7B%22name%22%3A%22search%22%2C%22version%22%3A%221%22%2C%22callback%22%3A%22getTradTags%22%2C%22language%22%3A%22"+mylang+"%22%2C%22nocss%22%3A%22true%22%7D%5D%7D
			decodeURIComponent --> http://www.google.com/jsapi?autoload={"modules":[{"name":"search","version":"1","callback":"getTradTags","language":""+mylang+"","nocss":"true"}]}
			decodeURI --> http://www.google.com/jsapi?autoload={"modules"%3A[{"name"%3A"search"%2C"version"%3A"1"%2C"callback"%3A"getTradTags"%2C"language"%3A""+mylang+""%2C"nocss"%3A"true"}]}
			==> does not decode what would become a reserved/score character
			==> but the reverse does not apply encodeURI will encode %
			==> http://www.google.com/jsapi?autoload=%22modules%22%3A%22%3Fsearch%22
			==> decodeURIComponent --> http://www.google.com/jsapi?autoload="modules":"?search"
			==> encodeURI --> http://www.google.com/jsapi?autoload=%2522modules%2522%253A%2522%253Fsearch%252 --> NOK
			==> use encodeURI(decodeURI and replace %253A by %3A, etc
			reserved -> ; , / ? : @ & = + $
			unescape : alphabetic, decimal digits, - _ . ! ~ * ' ( )
			score -> #
			*/
			
		url=url.replace(re,function(val) {return val.replace(/25/,'')});

	}
	return url;
};

var pixel=function(size,SIZE) {
	//simplification
	var re=/%|em/;
	if (!re.test(size)) {
		return parseInt(size);
	} else {
		return parseInt(size)*SIZE/100;
	}
};

var uncanon = function(str, letter) {
    return '-' + letter.toLowerCase();
};

//Taken from jQuery camelCase
var canon=function(attr){ //border-color --> borderColor
	return attr.replace(/-\D/g,function(match){return match.charAt(1).toUpperCase();});
};

var __cc=function(node,regexp) {
	var str = node.__data.toString().replace(/^\s+/g,'').replace(/\s+$/g,'') ;
	if (regexp.test(str)){
		return true;
	};
	return false;
};

var NOT_IMPLEMENTED=function(val) {return function() {return val}};

var NOSTYLE={script:'',style:'',head:'',meta:'',title:'',link:'',base:'',noscript:''};

var NOCONT={script:'',style:'',br:'',head:'',meta:'',title:'',html:'',link:'',base:'',noscript:'',object:'',embed:'',frame:'',iframe:'',applet:'',select:'',textarea:'',button:'',option:''};

var core={};

core.prototype={};

core.findParent = function(element, parent) {
	while (element._parentNode) {
		if (parent==element._parentNode) {
		return true;
		}
		element=element._parentNode;
	}
	return false;
};

core.HtmlToDom = function(page,elt) {
	var doc=elt._document;
	//if (doc._ew!=='') {
	//	return doc._parser.ParseHtml(page,doc._ew, doc._ewList);
	//} else {
		return doc._parser.ParseHtml(page);
	//};
};

core.HtmlToStyle = function(data) {//data= border-width:3px !important
	var priority=data.split('!'); // !important
	var dat=priority[0].toLowerCase().trim();
		if (priority.length>1) {
			priority=true;
		} else {
			priority=false;
		};
	dat=dat.split(':');
	var attr=dat[0];
	var attr2=canon(attr);
	dat.shift();
	var val=dat.join(':').toLowerCase().trim();
	return {attr:attr,attr2:attr2,priority:priority,val:val}; //{attr:'border-width',attr2:'borderWidth',priority:true,val:3px}
};

core.loadedImages=function() {
	this.length=0;
};

core.loadedImages.prototype={
	push: function(val) {
		var i=this.loaded(val[0]);
			if (!i.val[0]) {
				this[this.length]=val;
				this.length++;
			} else {
				if (val[1]!=0) {
					this[i.index][1]=val[1];
					this[i.index][2]=val[2];
				};
			};
	},
	loaded: function(xvalue) {
		var l=this.length;
		for (var i=0; i < l; i++) {
			if (this[i][0] === xvalue){
			return {val:this[i],index:i};
			}
		}
		return {val:[false,0,0],index:0};
	}
};

core.onload=function(fn) {
	//handle onload event
	//try {console.log(this.__name+' '+fn.toString());} catch(ee) {this.__name+' '+console.log(fn);};
	if (fn) {
				if (typeof(fn)=='string') {
					var code=fn;
					//if we do fn=new Function(code) then it will execute in the global context, not window
					var win=this.__name=='window'?this:this._document._parentNode;
					win._onl++;
					win['__elem'+win._onl]=this; //define __elem+number global var in window context
					this._code=code;
					this.___onload=code;//used for outer/innerhtml
					core.languageProcessors['javascript'](this,'__elem'+win._onl+'.onload=new Function(__elem'+win._onl+'._code)','');
					return;
					//this will then refer to element
				};
					//fn is defined in the window context on script evaluation
					//fn does execute in the window context and this refers to the element
				if ((this.___data!='nothing')&&(this._document.readyState=='complete')) { //if already loaded and document complete
					fn.apply(this,arguments);
				} else {
					if (this._document.readyState=='complete') {
						//fn.apply(this,arguments); too early, wait for resources loading
						if ((this.__name=='script')||(this.__name=='img')||(this.__name=='link')||(this._isimage)) {
							if (this.__name in this._document._features['FetchExternalResources']) { //load resources
								var self=this;
								this.__onload=function() {return fn.apply(self,arguments);};
							}
						} else { //nothing to load - execute onload
							fn.apply(this,arguments);
						}
					} else {
						var self=this;
						this._document._onload.push({fn:function() {return fn.apply(self,arguments);},element:self});
					}
				}
			}

};

core.languageProcessors = {
  javascript : require("../language/javascript").javascript
};

core.resourceLoader = {
	base: 	function(document) {
				var base = document._base;
				var baseURI = document.URL;

				if (base.length > 0) {
					//baseURI = base.item(0).__href;
					baseURI=base;
				};
				
				return baseURI;
			
			},
	load: 	function(element) {
				var src='';
				switch(element.__name) {
					case 'script': src=element.src?this.resolve(element._document,element.src):'';break;
					case 'link': src=element.href?this.resolve(element._document,element.href):'';break;
					case 'img': src=element.src?this.resolve(element._document,element.src):'';break;
					case 'input'&&(element.type=='image'): src=element.src?this.resolve(element._document,element.src):'';break;
					case 'style': src='';break;
					default : return;
				};

				if (src) {
					element._href=src;
					src = URL.parse(src);
					element.___data='nothing';//empty data
					element.____data='nothing';
					this.download(src,element);
				} else {
					if ((element.__name=='script'||element.__name=='style')) {
						element._href='inline';
						element.___data='inline';//fill data later
						element.____data='inline';
						this.enqueue(element);
					}
				}
			},
	resolve: function(document, path) {
				return path ? URL.resolve(this.base(document), fixURI(path)):''; //some sites do forget to encode URI
			},
	download: function(url,element) {
				var doc = element._document;
				var name = element.__name;
				var self=this;
				
				//console.log('download '+name+' '+url.href);
								
				if ((name=='script')||(name=='link')) {
						var path = url.pathname + (url.search || ''),
						//options = {'method': 'GET', 'host': url.hostname, 'path': url.pathname, 'headers': {
						//	'Connection':'keep-alive'
						//}},
						options = {'method': 'GET', 'host': url.hostname, 'path': path},
						request;
	
					this.enqueue(element);
					
					if (url.protocol == 'https:') {
					  options.port = url.port || 443;
					  request = https.request(options);
					} else {
					  options.port = url.port || 80;
					  request = http.request(options);
					};
					
					request.on('response', function (response) {
					//console.log('response');
					  response.setEncoding('utf8');
					  var data = '';
					  response.on('data', function (chunk) {
						data += chunk.toString();
					  });
					  response.on('end', function() {
					  //console.log(response.statusCode+' '+url.href);
						if ([301, 302, 303, 307].indexOf(response.statusCode) > -1) {
						  var redirect = URL.resolve(url, response.headers["location"])
						  core.resourceLoader.download(URL.parse(redirect), element);
						} else if ((response.statusCode==400)||(response.statusCode==408)) {
							element.___data='error'; //fill data
							if (doc.readyState=='complete') {//Execute right away once queue empty
									self.execute(element);
							}
						} else {
							element.___data=data; //fill data
							if (doc.readyState=='complete') {//Execute right away once queue empty
									self.execute(element);
							}
						}
					  });
					});

					request.on('error', function(err) {element.___data='error';});
					
					request.end();
				};
				
				
				
				if ((name=='img')||((name=='input')&&(element.type=='image'))||(element._isimage)) {
				
					element._isimage=true;
				
					var win=element._document._parentNode;
					
					if ((element.offsetWidth!=win.screen.width)||(element.offsetHeight!=win.screen.height)) { //Size known do not load
						element.___data='data'; //to fire onload if defined later
						if ((element._document.readyState=='complete')&&(element.__onload)) { //fire onload
							element.__onload();
						};
						return;
					};

					//this.enqueue(element);
					//do not queue images

					//console.log(url.href);

					var tmp=doc._downloadedImages.loaded(url.href);
					
					//console.log(doc._downloadedImages);
					
					//console.log(tmp.val[1]);
					
						if (!tmp.val[1]) {
						//If not already in downloadedImages or in downloadedImages but size not known
							if (!tmp.val[0]) {//if url not in loadedimages load it
									doc._downloadedImages.push([url.href,0,0,[]]);

									im.identify(['-format', '%wx%h', url.href], function(err, output){
										if (!err) {
												var res=output.replace('\n','');
												doc._downloadedImages.push([url.href,res.split('x')[0],res.split('x')[1]]);
												element.___data=res;
													//if (doc.readyState=='complete') {//Execute right away once queue empty
														self.execute(element);
													//}
										}
									});
							} else { //queue img
								//console.log('queue '+tmp.index);
								doc._downloadedImages[tmp.index][3].unshift(element);
							};
						} else {
							//Size known
								element.___data=tmp.val[1]+'x'+tmp.val[2];
									//if (doc.readyState=='complete') {//Execute right away once queue empty
										self.execute(element);
									//}
						}
					}
			},
	enqueue: function(element) {
				var doc = element._document;
				if (((doc._queue.length==0)&&(element.___data=='end'))||(doc.readyState=='complete')) {
					if (element.___data!='nothing') {
						if (element.__name!='script') { 
						//do not execute inline scripts after readyState complete
						//example : innerHTML
							this.action(element);
						}
					} else { //readyState complete, do not queue
						//var self=this;
						//var wait=function() {self.action(element);};
						//setTimeout(wait,100); //not nice, to see later
					}
				} else { //readyState not complete, queue and serialize resources
					doc._queue.push(element);
				}
			},
	action:	function(element) {
				var name=element.__name;
				
				//console.log('action '+name+' '+element._href+' '+element.___data.substr(0,100));
				
				//console.log('action '+name+' '+element._href);
				
				if (name=='document') {
					element.readyState = 'complete';
					console.log('Document complete');
						var onload=element._onload;
						for (var i=0;i<onload.length;i++) {
							//onload can be queued before readyState complete while element is not queued yet
							//do not fire onload if resources not executed								
							if (onload[i].element.___data!='nothing') {	
								try {onload[i].fn();} catch(ee) {console.log('onload error');};//if resource loaded fire onload
							} else {
								onload[i].element.__onload=onload[i].fn;//if not wait for resource loaded
							}
						};
						element._onload=[];
						
						//Not used
						//Fire timers
						var tt=element._parentNode._ttimers;
						var l=tt.length;
						//console.log('timer length '+l);
						for (var i=0;i<l;i++) {;
							setTimeout(tt[i][0],tt[i][1]);
						};
						
						var tt=element._parentNode._itimers;
						var l=tt.length;
						for (var i=0;i<l;i++) {
							//setInterval(tt[i][0],tt[i][1]);
						};
												
				};

				if (name=='script') {
				
					this.write(element);
					
					if (element.___data=='inline') {
						element.___data=this.code(element);
					};
					
					//console.log('action2 '+name+' '+element._href+' '+element.outerHTML.substr(0,500));
					
					core.languageProcessors['javascript'](element,element.___data,'');
				
					//fire onload if readystate complete
					if ((element._document.readyState=='complete')&&(element.__onload)) {
						element.__onload();
					};
				};
				
				if (name=='link') {
				//TODO Stylesheets
				};

				if ((name=='img')||((name=='input')&&(element.type=='image'))||(element._isimage)) {
				
					var doc=element._document,
						h=core.resourceLoader.resolve(element._document,element.src),
						size=element.___data.split('x'), win=doc._parentNode,
						width=win.screen.width,height=win.screen.height,
						tmp=doc._downloadedImages.loaded(h),
						queue=doc._downloadedImages[tmp.index][3];
					
					queue.unshift(element);
					
					var l=queue.length;
					
					while (queue.length) { //resume queue for same image
						var elem=queue[0];
						if (elem.style.getPropertyValue('width')==width) {
							elem.style['width']=size[0]+'px';
						};
						if (elem.style.getPropertyValue('height')==height) {
							elem.style['height']=size[1]+'px';
						};
						
						if ((elem._document.readyState=='complete')&&(elem.__onload)) {
							try {elem.__onload()} catch(ee) {console.log('onload error')};
						};
						
						queue.shift();
					}
					
				};
				//console.log('end action');
			},
	execute: function(element) {
				//console.log('execute');
				if (((!(Object.getOwnPropertyDescriptor(element,'___data').set))||(element._pass))||(element._isimage)) { //if not in queue or image
					var doc=element._document;
					var d=doc._queue;
						if (!element._isimage) {
							for (var n in d) {
								if (d[n]==element) {return;} //rare but can happen do not execute twice
							};
						}

						if ((doc._queue.length!=0)&&(!element._isimage)) {
							var self=this;
							var wait=function() {self.execute(element);};
							setTimeout(wait,100); 	//wait for queue empty - TODO : do this in a nicer way but should be rarely called
						} else {
							if ((element.__name in element._document._features['ProcessExternalResources'])||(element.___data=='end')||(('img' in element._document._features['ProcessExternalResources'])&&(element._isimage))) {
								this.action(element);//execute action
							};
						}
				}
			},
	resume : function(doc) {
				//console.log('resume');
				var d=doc._queue;
				if (d.length>0) {
					var el=d[0];
						if (el.___data=='error') {
						//console.log('error');
							d.shift();
							this.resume(doc);
						} else if (el.___data=='nothing') {
							var self=this;
						//console.log("noth "+el._href);
						
							this.wait(el);
							
							var pass=function() {
								el._pass=true;
								d.shift();
								self.resume(doc);
							};
							
							el._tt=setTimeout(pass,1000); 	//if http request takes more than 1s, do not wait, continue
															//and execute after complete when data available
															//if not it blocks the queue
															//TODO : see how to put a timeout on http request
															
						} else {
							if ((el.__name in el._document._features['ProcessExternalResources'])||(el.___data=='end')||(('img' in el._document._features['ProcessExternalResources'])&&(el._isimage))) {
								this.action(el);//execute action
							};
							//console.log("shift"+d.length);
							d.shift(); //clear executed element
							this.resume(doc);//execute next
						}
				} else {
				//console.log("Retry scripts "+doc._queue_err.length);
					/*When queue empty, retry to execute failed scripts
					Example : script insertion with document.write immediately followed by code related to the script which is not yet loaded,
					so script execution fails
					*/
					var self=this;
						var f=function() {
						var d=doc._queue_err;
						var l=d.length;
							for (var i=0;i<l;i++) {
								//console.log('retry '+d[i]._href+' '+(d[i].___data||'').substr(0,100));
								self.action(d[i]);
							};
						}
					setTimeout(f,5000); //Not nice - TODO : ameliorate
				}
			},
	wait : function(el) {
				var self=this;
				var wait=function(val) {
					if (el._tt) {
						clearTimeout(el._tt);
					};
					this.____data=val;
					//console.log('wait '+el.__name+' '+el._href);
					if (!this._pass) {
						if (el._isimage) { //if image, execute
							self.execute(el);
						} else {
							self.resume(el._document);
						}
					} else { //when passed and data becomes available
						self.execute(el);
					}
				};
				var fn=function() {return this.____data;};
				
				Object.defineProperty(el,'___data', {set:wait,get:fn}); //wait for data availability
	},
	write : function(element) {
					//overwrite document.write
					//before complete execute write in a dummy div attached to the lastChild
					//approximation but covers most of cases
					element._document.write=function(text) {
						if (this.readyState === "loading") {
								var dummydiv=this.createElement('div');
								element.parentNode.appendChild(dummydiv);
								dummydiv.innerHTML=text;
						} else {
							this.innerHTML=text;
						};
					};

	},
	code : function(element) {
					var code=[];
					var children=element.__children;
					if (children) {
						var l=children.length;
						for (var i=0;i<l;i++) {
								code.push(children[i].data);
						};
						return code.join(''); //fill data for inline scripts
					};
					return '';
	}
};

core.NodeList=function() { //NodeList is an array - make item not enumerable
	var d=Object.getPrototypeOf(this);
	Object.defineProperty(d,'item', {value : function(i) {return this[i];},writable : true,enumerable : false,configurable : true});
};

core.NodeList.prototype=Array.prototype;

core.Attr=function() { //dummy Attr interface
	this.name='';
	this.value='';
};

core.EventTarget=function() {}; //dummy eventtarget interface

core.EventTarget.prototype={
	addEventListener : function() {},
	removeEventListener : function() {},
	dispatchEvent : function() {}
};

core.Event=function() {}; //dummy event interface

core.Event.prototype={
	CAPTURING_PHASE : 1,
	AT_TARGET : 2,
	BUBBLING_PHASE : 3,
	get type() {return 'HTMLEvents'},
	get target() {return new core.EventTarget()},
	get currentTarget() {return new core.EventTarget()},
	get eventPhase() {return this.CAPTURING_PHASE},
	get bubbles() {return true},
	get cancelable() {return false;},
	get timeStamp() {return 0},
	stopPropagation : function() {},
	preventDefault : function() {},
	initEvent : function() {},
	stopImmediatePropagation : function() {},
	get defaultPrevented() {return false},
	get isTrusted() {return true}
};

core.Node={};

core.Node.prototype={
	ELEMENT_NODE                : 1,
	ATTRIBUTE_NODE              : 2, //not used
	TEXT_NODE                   : 3,
	CDATA_SECTION_NODE          : 4, //not used
	ENTITY_REFERENCE_NODE       : 5, //not used
	ENTITY_NODE                 : 6, //not used
	PROCESSING_INSTRUCTION_NODE : 7 , //not used 
	COMMENT_NODE                : 8,
	DOCUMENT_NODE               : 9,
	DOCUMENT_TYPE_NODE          : 10, //not used
	DOCUMENT_FRAGMENT_NODE      : 11,
	NOTATION_NODE               : 12, //not used
	get document() {return this._document},
	get nodeValue() {return HTMLDecode(this.__data)},
	get parentNode() {return this._parentNode},
	get parentElement() {return this._parentNode},
	get nodeName() {return this.__name.indexOf('#')==-1?this.__name.toUpperCase():this.__name},
	get firstChild() {
		var l=this.__children.length;
		return l>0?this.__children[0]:null;
	},
	get lastChild() {
		var l=this.__children.length;
		return l>0?this.__children[l-1]:null;
	},
	get childNodes () {return this.__children},
	get _childNodes() {return this.__children},
	get nextSibling() {
		var children=this._parentNode.__children;
		var l=children.length;
		for (var i=0;i<l;i++) {
			if (children[i]==this) {
			return children[i+1] || null;	
			}
		};
		return null;
	},
	get previousSibling() {
		var children=this._parentNode.__children;

		var l=children.length;
		for (var i=0;i<l;i++) {
			if (children[i]==this) {
			return children[i-1] || null;	
			}
		};
		return null;
	},
	attributes:NOT_IMPLEMENTED(new core.Attr()),
	get ownerDocument() {
		if (this.nodeName=='#document') {return null;};
		return this._document;
	},
	insertBefore :  function(node,before) {

		var children=this.__children;

		if (before!=null) {
		
			var ind=children.indexOf(before);
			
			if (ind>=0) {
				children.splice(ind,0,node);
			}
		} else {
			children.push(node);
		};

		node._parentNode=this;
		
		if (node.__name in node._document._features['FetchExternalResources']) { //load resources
			core.resourceLoader.load(node);
		};

		if (this.__dom) { //if parent in Dom Tree
			if (node.__type=='tag') { //if tag, not document/text/document-fragment
				this.addToDom(node);
			}
		};
		
		if ((node.__type=='text')&&(this._document.readyState!='complete')) {
			if ((!(this.__name in NOCONT))&&(node._document._regexp)) {
				if (__cc(node,node._document._regexp)) {
						this._document._parentNode._ewList.push(node);
					};
			};
		};

		return node;
	},
	replaceChild : function(node,before) {
		this.insertBefore(node,before);
		this.removeChild(before);
		return node;
	},
	removeChild : function(node) {
		var children=this.__children;
		var ind=children.indexOf(node);
	
			if (ind>=0) {
				children.splice(ind,1);
			};
			
			//if ((node.__type=='tag')&&(node.__name!='body')) { //delete from tag list
			//	try {
			//		delete this._document['_'+node.__name][node._elid];
			//	} catch(ee) {}
			//};
			
			//if ((node.__type=='tag')&&(node.__name!='body')) { //delete from name list
			//	try {
			//		delete this._document._names['__'+node.__name][node._elna];
			//	} catch(ee) {}
			//};
			
			//if (node.id) {
			//	try {
			//		delete this._document._ids[node.id]; //delete from id list
			//	} catch(ee) {};
			//};
		if (node.__type=='tag') {	
			this.removeFromDom(node); //mark node and children not in dom tree
		};
	
		node._parentNode=null;
		
		return node;
	},
	appendChild : function(node) {
		if (node._parentNode!=null) {
			node._parentNode.removeChild(node);
		};
		
		if (node.__type=='document-fragment') {
			var children=node.__children;
			var l=children.length;
				for (var i=0;i<l;i++) {
					this.insertBefore(children[i],null)
				}
			return node;
		} else {
			return this.insertBefore(node,null);
		}
	},
	hasChildNodes : function() {
		if (this._children.length>0) {
			return true;
		} else {
		
		}	return false
	},
	cloneNode : function(bool) {
		if (this.__type=='document-fragment') {
			var fragment=this._document.createDocumentFragment();
			if (bool) {
				var children=this.__children;
				var l=children.length;
				for (var i=0;i<l;i++) {
					var tmp=this._document.createElement('div'); //dummy div
					fragment.appendChild(tmp);
					tmp.outerHTML=children[i].outerHTML;
				};
			}
			return fragment;
		} else {
			if (!bool) {
				//console.log('cloneNode false');
				var clone=this._document.createElement(this.__name);
				var prop=Object.keys(this);
				var l=prop.length;
				for (var i=0;i<l;i++) {
					var p=prop[i];
					clone.setAttribute(p,this[p]);
				};

				if (this.style) {
					prop=Object.keys(this.style);
					l=prop.length;
					for (var i=0;i<l;i++) {
						p=prop[i];
						clone.style[p]=this.style[p];
					}
				}
				return clone;
			} else {
			//TODO : optimization
				//console.log('cloneNode true');
				var div=this._document.createElement('div'); //dummy div
				div.innerHTML=this.outerHTML;
				div=div.firstChild;
				return div;
				//var clone=this.cloneNode(false);
				//var recurse=function(node,parent) {
				//	var children=node.__children;
				//	var l=children.length;
				//	for (var i=0;i<l;i++) {
				//		var child=children[i];
				//		var clone_=child.cloneNode(false);
				//		if (parent) {
				//			parent.appendChild(clone_);
				//		};
				//		recurse(child,clone_)
				//	}
				//};
				//recurse(this,clone);
				//return clone;
			}
		}
	},
	cloneStyle : function(style) { //not w3c
		var prop=Object.keys(style);
		var l=prop.length;
		for (var i=0;i<l;i++) {
			var st=prop[i];
			this.style[st]=style[st];
		}
	},
	//normalize : NOT_IMPLEMENTED(),
	//isSupported : NOT_IMPLEMENTED(true),
	//namespaceURI : '',
	//prefix : '',
	//localName: '',
	//hasAttributes : function() {
	//	return this.attributes;
	//},
	get textContent() {
		if (this.nodeType === this.TEXT_NODE || this.nodeType === this.COMMENT_NODE || this.nodeType === this.ATTRIBUTE_NODE || this.nodeType === this.CDATA_SECTION_NODE) {
			return this.nodeValue;
		} else if (this.nodeType === this.ELEMENT_NODE || this.nodeType === this.DOCUMENT_FRAGMENT_NODE) {
			var out = '';
			for (var i = 0 ; i < this.childNodes.length ; i += 1) {
			  out += this.childNodes[i].textContent || '';
			}
			return out;
		} else {
			return null;
		};
	},
	get nodeType() {
	switch(this.__type) {
		case "text": return this.TEXT_NODE;
		//case "directive": return 0;
		//case "comment": return this.COMMENT_NODE;
		//case "script": return this.ELEMENT_NODE;
		//case "style": return this.ELEMENT_NODE;
		case "tag": return this.ELEMENT_NODE;
		case "document": return this.DOCUMENT_NODE;
		case "document-fragment": return this.DOCUMENT_FRAGMENT_NODE;
		};
	return 0;
	},
	get baseURI() {
		return core.resourceLoader.base(this._document);
	},
	DOCUMENT_POSITION_DISCONNECTED : 0x01,
	DOCUMENT_POSITION_PRECEDING    : 0x02,
	DOCUMENT_POSITION_FOLLOWING    : 0x04,
	DOCUMENT_POSITION_CONTAINS     : 0x08,
	DOCUMENT_POSITION_CONTAINED_BY : 0x10,
	DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : 0x20,
	compareDocumentPosition: function(node) { //TODO ??
		return this.DOCUMENT_POSITION_DISCONNECTED;
	},
	contains: NOT_IMPLEMENTED(false),
	isSameNode: function(node) {
		return this===node?true:false;
	},
	lookupPrefix:NOT_IMPLEMENTED(''),
	//isDefaultNamespace:NOT_IMPLEMENTED(true),
	lookupNamespaceURI:NOT_IMPLEMENTED(''),
	isEqualNode:NOT_IMPLEMENTED(false),
	//getFeature:NOT_IMPLEMENTED({}),
	//setUserData:NOT_IMPLEMENTED(''),
	//getUserData:NOT_IMPLEMENTED(null),
	isDefaultNamespace: NOT_IMPLEMENTED(false),
	set onload(fn) { 
		core.onload.call(this,fn);
	},
	addEventListener: function(type, listener, useCapture) {
		this['on'+type.toLowerCase()]=listener; //simplification
	},
	removeEventListener: function(type, listener, useCapture) {
		delete this['on'+type.toLowerCase()]; //simplification
	},
	dispatchEvent : NOT_IMPLEMENTED(false),
	_Enum : function(prop,bool,def) {
		Object.defineProperty(this,prop,{value:this[prop]||(typeof(def)=="undefined"?'':def),enumerable:bool,configurable:true,writable:true});
	},
	addToDom : function(node) {
		node.__dom=true;
		if (node._id) {
			node.id=node._id; //set id in document._ids list for getElementById when adding the node to DOM tree
		};
		this.updateNode(node); //update Nodelists
		var children=node.__children;
		var l=children.length;
			for (var i=0;i<l;i++) {
				this.addToDom(children[i]);
			}
	},
	removeFromDom : function(node) {
		node.__dom=false;
		this.updateNode(node); //update Nodelists
		var children=node.__children;
		var l=children.length;
			for (var i=0;i<l;i++) {
				this.removeFromDom(children[i]);
			}
	},
	updateNode : function(node) {
		if ('_'+node.__name in this._document._Tnodelists) {
			this._document.updateNL(this._document['_'+node.__name],'_'+node.__name,this._document._Tnodelists);
		};
		if (node._name) {
			if (node._name in this._document._Nnodelists) {
				this._document.updateNL(this._document._names[node._name],node._name,this._document._Nnodelists);
			}
		};
		if (node._class) {
			var classes=node._class.split(' ');
			var l=classes.length;
			for (var i=0;i<l;i++) {
				if (classes[i]) {
					if (classes[i] in this._document._Cnodelists) {
						this._document.updateNL(this._document._class[classes[i]],classes[i],this._document._Cnodelists);
					}
				}
			}
		}
	}
};

core.Text=function(doc) {
	this.__name='#text';
	this.__children=[];
	this._document=doc;
	this.__dom=false; //node not in dom tree at creation
};

core.Text.prototype={
	__proto__ : core.Node.prototype,
	get data() {return this.__data;},
	get length() {return this.__data.length;},
	appendData : NOT_IMPLEMENTED(null),
	insertData : NOT_IMPLEMENTED(null),
	deleteData : NOT_IMPLEMENTED(null),
	replaceData : NOT_IMPLEMENTED(null),
	substringData : NOT_IMPLEMENTED('')
};

core.DocumentFragment=function(doc) {
	this.__name='#document-fragment';
	this.__children=[];
	this._document=doc;
	this.__dom=false;
};

core.DocumentFragment.prototype.__proto__ = core.Node.prototype;

core.BarProp = function() {
	this.visible=true;
};

core.Element={};

core.Element.prototype = {
//not w3c
//Handle tag element, text and document fragment
	__proto__ : core.Node.prototype,
	get tagName() {
		switch(this.__type) {
			case 'tag' : return this.__name.toUpperCase();
			//case 'text' : return 'TEXT'; //not w3c
			//case 'document-fragment' : return 'FRAGMENT'; //not w3c
			//case 'comment' : return '';
			//case 'script' : return 'SCRIPT';
			//case 'style' : return 'STYLE';
			//case 'directive' : return '';
		}
		return '';
	},
	getAttribute : function(attr) {
	
		if (attr=='href') {
		return this.href || '';
		};
		
		if (attr=='src') {
		return this.src || '';
		}
		
		if (attr!='style') {
			return this[attr];
		};
		return '';
	},
	setAttribute : function(attr,val) {
		if (attr!='style') {
			this[attr]=val;
		}
	},
	removeAttribute : function(attr) {
		delete this[attr];
	},
	//getAttributeNode : NOT_IMPLEMENTED(new core.Attr()),
	//setAttributeNode : NOT_IMPLEMENTED(new core.Attr()),
	//removeAttributeNode : NOT_IMPLEMENTED(new core.Attr()),
	getElementsByTagName : function(Name) { //normally in HTMLElement, keep here for now
	//Unlike document's nodeLists this one is not updated dynamically
	//Because node may not be in dom tree, so let's not put some efforts on useless things
	//Anyway, not important, rarely used
	//Just scan the node to retrieve the result
		var name=Name.toLowerCase();
		var list=new core.NodeList();
		var recurse=function() {
			if ((this.__name==name)||(name=='*')) {
				list.push(this);
			};
			var children=this.__children;
			var l=children.length;
				for (var i=0;i<l;i++) {
					if (children[i].__type=='tag') {
						recurse.call(children[i]);
					}
				}
		};
		
		if (this.__type=='tag') {
			recurse.call(this);
		};
		
		//console.log('tagname '+Name+' '+list.length);
		
		return list;
	},
	getElementsByClassName : function(name) {
		var names=name.trim().split(' ').sort();
		var list=new core.NodeList();
		
		var recurse=function() {
			if (this._hasclasses(names)) {
				list.push(this);
			};
			var children=this.__children;
			var l=children.length;
				for (var i=0;i<l;i++) {
					if (children[i].__type=='tag') {
						recurse.call(children[i]);
					}
				}
		};
		
		if (this.__type=='tag') {
			recurse.call(this);
		};
	
		return list;
	},
	getAttributeNS : NOT_IMPLEMENTED(''),
	setAttributeNS : NOT_IMPLEMENTED(null),
	removeAttributeNS : NOT_IMPLEMENTED(null),
	getAttributeNodeNS : NOT_IMPLEMENTED(new core.Attr()),
	setAttributeNodeNS : NOT_IMPLEMENTED(new core.Attr()),
	getElementsByTagNameNS : NOT_IMPLEMENTED(new core.NodeList()),
	hasAttribute : function(val) {
		return this.getAttribute(val)?true:false;
	},
	hasAttributeNS : NOT_IMPLEMENTED(false),
	//setIdAttribute: NOT_IMPLEMENTED(''),
	//setIdAttributeNS: NOT_IMPLEMENTED(''),
	//setIdAttributeNode: NOT_IMPLEMENTED('')
	//get children() {return this.__children;}, //do not use, conflict with parser children
	firstElementChild : null,
	lastElementChild : null,
	previousElementSibling : null,
	nextElementSibling : null,
	childElementCount : 0
};

core.Document={};

core.Document.prototype = {
	__proto__: core.Node.prototype,
	doctype:'',
	implementation: {hasFeature:function() {return false;}},
	get documentElement() {
		if (this.__documentElement) {
			  return this.__documentElement;
		} else {
		  var children = this.__children;
		  var l=children.length;
			  for (var i=0;i<l;i++) {
				if (children[i].nodeType === this.ELEMENT_NODE) {
				  this.__documentElement = children[i];
				  return children[i];
				}
			  }
			return null;
		}
	},
	nodeName: '#document',
	compatMode : 'CSS1Compat',
	charset : 'UTF-8',
	characterSet : 'UTF-8',
	defaultCharset : 'UTF-8',
	contentType : 'application/xml',
	lastModified : '',
	//tagName: null,
	//nodeValue: null,
	//ownerDocument: null,
	//readonly:NOT_IMPLEMENTED(),
	createElement: function(tag) {
	//Nodelist are created even if element not appended in dom tree
	//__dom property is set when element is appended
	//Once getElementsByTagName is called for example, an object nodelist is created and then dynamically updated
	//see addToDom, removeFromDom and upadteNL/Node
	//console.log(tag);
		var tagp=tag.toLowerCase();
		
		var node=new NODE(tagp,this);
		
		node.__type='tag';
		
		if (!this['_'+tagp]) {this['_'+tagp]={};}; //prepare lists for tag names
		
		if (!this['_*']) {this['_*']={};};
		
		this._elid++;
		node._elid=this._elid; // assign element id to avoid nodelist manipulations
		this['_'+tagp][this._elid]=node;
		this['_*'][this._elid]=node;
		
		/* Some sites do define several html, body, head tags
		Ex: http://www.ooshop.com */
		
		if (tagp=='html') {
			if (!this.html) {
				this.html=node;
			}
		};
		
		if (tagp=='head') {
			if (!this.head) {
				this.head=node;
			}
		};
		
		if (tagp=='body') {
			if (!this.body) {
				this.body=node;
			}
		};
		
		var notattrib={__name:'',__children:[],_document:{},__type:'',_elid:0,__data:'',_parentNode:null,_href:'',___data:'',__onload:'',_elna:0,_elca:0,children:[],__dom:false,__form:{},__tHead:{},__tFoot:{},__tBody:{},__caption:{},__options:{},__elements:{},__tr:{},__cells:{},__td:{},____data:'',_pass:false,_tt:'',_isimage:false,_code:'',_parsed:false,__loaded:false};
		
		for (var n in notattrib) {
			node._Enum(n,false,notattrib[n]);
		};
		
		return node;
	}, 
	createDocumentFragment: function() {
		var node = new FRAGMENT(this);
		node.__type='document-fragment';
		return node;
	},
	createTextNode: function(text) {
		var node = new TEXT(this);
		node.__data=text;
		node.__type='text';
		return node;
	},
	createComment: function(text) { //creates fake comment
		return this.createTextNode('');
	},
	//createCDATASection: function() {this.createComment();}, //fake CDATA
	createProcessingInstruction: function() {this.createComment();}, //fake PI
	//createAttribute: NOT_IMPLEMENTED(new core.Attr()),
	//createEntityReference: function() {this.createComment();}, //fake
	//createEntityNode : function() {this.createComment();}, //fake
	//createNotationNode : function() {this.createComment();}, //fake
	getElementsByTagName : function(Name) {
		var name=Name.toLowerCase();
		if ('_'+name in this._Tnodelists) {
			return this._Tnodelists['_'+name];
		} else {
			return this.updateNL(this['_'+name],'_'+name,this._Tnodelists);
		}	
	},
	getElementsByName : function(name) { //normally in HTMLDocument - keep here
		if (name in this._Nnodelists) {
			return this._Nnodelists[name];
		} else {
			return this.updateNL(this._names[name],name,this._Nnodelists);
		}
	},
	getElementsByClassName : function(name) { //normally in HTMLDocument and HTMLElement keep here too
	//this one is not updated dynamically for more than one class
		var names=name.trim().split(' ').sort();
		var l=names.length;
		var res=new core.NodeList();
		for (var i=0;i<l;i++) {
			if (names[i]) {
				if (names[i] in this._Cnodelists) {
					var tmp=this._Cnodelists[names[i]];
					var l2=tmp.length;
					if (l==1) {
						return tmp; //dynamically updated
					} else {
						for (var j=0;j<l2;j++) {
							if (tmp[j]._hasclasses(names)) { //if object has all requested classes
								if (res.indexOf(tmp[j])==-1) { //if node not already in res
									res.push(tmp[j]);
								}
							}
						}
					}
				} else {
					var tmp=this.updateNL(this._class[names[i]],names[i],this._Cnodelists);
					var l2=tmp.length;
					if (l==1) {
						return tmp; //dynamically updated
					} else {
						for (var j=0;j<l2;j++) {
							if (tmp[j]._hasclasses(names)) { //if object has all requested classes
								if (res.indexOf(tmp[j])==-1) { //if node not already in res
									res.push(tmp[j]);
								}
							}
						}
					}
				}
			}
		}
		return res;
	},
	importNode : function(node,pr) {return node;}, //not implemented
	createElementNS : function(ns,tag) {return this.createElement(tag);}, //not implemented
	//createAttributeNS : function(ns,attr) {return this.createAttribute(attr);}, //not implemented
	getElementByTagNameNS : function(ns,name) {return this.getElementsByTagName(name);}, //not implemented
	getElementById:function(id) {
		if (this._ids[id]) {
			if (this._ids[id].__dom) { //if in dom tree
				return this._ids[id];
			}
		};
		return null;
	},
	//inputEncoding :'utf-8',
	//xmlEncoding :'utf-8',
	//xmlStandalone : false,
	//xmlVersion : null,
	//strictErrorChecking : true,
	get documentURI() {return this.baseURI;},
	adoptNode : function(node) {return node;}, //not implemented
	//domConfig : NOT_IMPLEMENTED({}),
	//normalizeDocument : NOT_IMPLEMENTED(null),
	//renameNode : function(node,ns,name) { //not implemented, simplification
	//	node.__name=name;
	//	return node;
	//}
	createEvent : function() {return new core.Event()},
	createNodeIterator : NOT_IMPLEMENTED({}),
	createTreeWalker : NOT_IMPLEMENTED({})
};

core.HTMLElement = function() {};

core.HTMLElement.prototype = {
	__proto__: core.Element.prototype,
	get innerHTML() {
		return domToHtml(this.__children,this._document._features.removeScript);
	},
	get outerHTML() {
	
		var res=domToHtml(this,this._document._features.removeScript);
				
		return res;
	},
	set innerHTML(val) {
		//See performance issue with CSSStyleDeclaration
		var _node=core.HtmlToDom(val,this);
		var tmpdom=_node.dom;
		var l=tmpdom.length;
		this.children=[];
			for (var i=0;i<l;i++) {
				this.children.push(tmpdom[i]);
			};
		this._document.setTree.call(this,null);
	},
	set outerHTML(val) {
		var _node=core.HtmlToDom(val,this);
		var tmpdom=_node.dom;
		var dummy=new NODE('div',this._document);
		dummy.children=[];
		dummy.__dom=this.__dom;
		for (var n in tmpdom) {
			dummy.children.push(tmpdom[n]);
		};
		
		this._document.setTree.call(dummy,null);
			if (this._parentNode) {
			this._parentNode.insertBefore(dummy.firstChild,this);
			this._parentNode.removeChild(this);
			} else {
			//rare case
			//do nothing for now
			}
	},	
	get offsetWidth() {
		if (this.__type=='tag') {
			return this._document._parentNode.getComputedStyle(this).getPropertyValue('width');
		};
		return 0;
	},
	get offsetHeight() {
		if (this.__type=='tag') {
		return this._document._parentNode.getComputedStyle(this).getPropertyValue('height');
		};
		return 0;
	},
	set id(val) {
		for (var n in this._document._ids) {
			if (this._document._ids[n]==this) {
				delete this._document._ids[n];
			}
		};
		this._id=val;
		this._document._addid(this,val);
	},
	get id(val) {
		return this._id;
	},
	set name(val) {
		if (this._name) {
			if (this._name.trim()) {
				//delete from global list
				delete this._document._names[this._name][this._elna];
			};
			//delete from nodelist
			if (this._name in this._document._Nnodelists) {
				var list=this._document._Nnodelists[this._name];
				var ind=list.indexOf(this);
				if (ind>=0) {
					list.splice(ind,1);
				};
			};
		};
		this._name=val;//do not mix with __name/nodeName/tagName of node
		this._document._addname(this,val);
	},
	get name() {
		return this._name;
	},
	set className(val) {
		if (this._class) {
			var classes=this._class.trim().split(' '); //split classes
			var l=classes.length;
			for (var i=0;i<l;i++) {
				if (classes[i].trim()) {
					//delete from global list
					delete this._document._class[classes[i]][this._elca];
					//delete from nodelist
					if (classes[i] in this._document._Cnodelists) {
						var list=this._document._Cnodelists[classes[i]];
						var ind=list.indexOf(this);
						if (ind>=0) {
							list.splice(ind,1);
						};
					};
				}
			};
		};

		this._class=val; //class='test try' --> _class='test try'
		this._document._addclass(this,val); //add node to classes 'test' and 'try'
	},
	get className() {
		return this._class;
	},
	_hasclasses : function(name) {
		if (this._class) {
			var val=this._class.trim().split(' ');
			var l=name.length;
			for (var i=0;i<l;i++) {
				if (val.indexOf(name[i])==-1) {
					return false;
				}
			};
			return true;
		};
		return false;
	},
	classList : [], //simplification
	clientHeight : 0,
	clientLeft : 0,
	clientTop : 0,
	clientWidth : 0,
	contentEditable : 'false',
	dataset : '',
	dir : '',
	lang : '',
	title : '',
	isContentEditable : false,
	offsetLeft : 0,
	get offsetParent() {return this._parentNode}, //not implemented
	offsetTop : 0,
	scrollHeight : 0,
	scrollLeft : 0,
	scrollTop : 0,
	scrollWidth : 0,
	click : NOT_IMPLEMENTED(null),
	focus : NOT_IMPLEMENTED(null),
	blur : NOT_IMPLEMENTED(null),
	//scrollIntoView : NOT_IMPLEMENTED(null),
	//setCapture : NOT_IMPLEMENTED(null)
	itemScope : false,
	itemType : '',
	itemId : '',
	itemref : {},
	itemProp : {},
	properties : {},
	itemValue : {},
	hidden : false,
	tabIndex : 0,
	accessKey : '',
	accessKeyLabel : '',
	draggable : false,
	dropzone : {},
	contextMenu : {},
	spellcheck : false,
	commandType : '',
	commandLabel : '',
	commandIcon : '',
	commandHidden : false,
	commandDisabled : false,
	commandChecked : false
};

core.CSSStyleDeclaration=function(element) {
//Our own CSSOM CSSStyleDeclaration
//Unlike CSSStyleDeclaration, pass element to retrieve attributes width height and modifications
//TODO : huge performance issue while calling getPropertyValue, this[style] suspected to be too long - to investigate
//TODO (??) : use harmony proxy in v8 so element.style.test does not return undefined if test is not set
	Object.defineProperty(this,'node',{value:element,enumerable:false,configurable:true,writable:true});
	Object.defineProperty(this,'_importants',{value:{},enumerable:false,configurable:true,writable:true});
	Object.defineProperty(this,'length',{value:0,enumerable:false,configurable:true,writable:true});

//Set default styles - might be involved in performance issue
//Appears to be faster to do it here rather than in prototype	
	for (var n in default_style) {
		this[n]='';
	};
//TODO (??) : does not handle length now
};

core.CSSStyleDeclaration.prototype={
	get cssText() {
		var css='';
		var prop=Object.keys(this);
		var l=prop.length;
		for (var i=0;i<l;i++) {
			var style=prop[i];
			if (this[style]!='') { //if not default style
				if (style=='_backgroundImage') {style='backgroundImage'};
				var sep=';';
				if (this._importants[style]) {
					sep=' !important;';
				};
				
				css +=style.replace(/([A-Z])/g, uncanon)+':'+this[style]+sep;
			}
		};
		return css;
	},
	set cssText(text) {
		if (text) {
			var data=text.split(';');
			if (this.node._parsed) { //do not clear style on tree creation (_parsed undefined)
				var prop=Object.keys(this);
				var l=prop.length;
				for (var i=0;i<l;i++) { //remove all styles except width/height
					if (style=='_backgroundImage') {style='backgroundImage'};
					if ((style!='width')&&(style!='height')) {
						this[style]='';
					}
				};
			};
			for (var i=0;i<data.length;i++) {
				try { //catch errors in case of strange declaration
					var tmp=core.HtmlToStyle(data[i]);
					var name=tmp.attr2;
					var priority=tmp.priority;//true if !important, false if not
					var value=tmp.val;
					this.setProperty(name,value,priority);
				} catch(ee) {};
			}
		}
	},
	getPropertyValue : function(style) {
	//Ex: style = 'border-right'
	//Simplification for now
	//Mainly interested by width/height
		nbloop++;
		var win=this.node._document._parentNode;
		var camel=canon(style);
		var prop=Object.keys(this);
		var self=this;
		
		if (prop.indexOf(camel)!=-1) { //ex: border-right --> borderRight
			switch(style) {
				case 'width' : return pixel(this[style],win.screen.width);
				case 'height' : return pixel(this[style],win.screen.height);
			}
			return this[camel];//this['borderRight']
		};
		
		prop=Object.keys(this.node);
		if (prop.indexOf(camel)!=-1) {
			switch (style) {
				case 'width' : return pixel(this.node[style],win.screen.width);
				case 'height' : return pixel(this.node[style],win.screen.height);
				return this.node[style];
			}
		};
		switch(style) { //default values
			case 'width' : return win.screen.width;
			case 'height' : return win.screen.height;
			case 'background-image' : return 'none';
			case 'background-color' : return '';
			case 'visibility' : return 'visible';
			case 'display' : return '';
			case 'font-size' : return '12px';
			case 'text-decoration' : return 'none';
		return '';
		}
	},
	setProperty: function(name, value, priority) {
		//Unlike normal CSSStyleDeclaration
		//Handle properties in "borderRight" format
		//So if modified in js it will work
		//Does not set the "border-right" property
		this[name]=value; //ex: borderRight
		this._importants[name]=priority;
	},
	set backgroundImage(bg) {
	
		if ((!this['backgroundRepeat'])&&(bg!='none')&&(bg)) {
		
			if ('img' in this.node._document._features['FetchExternalResources']) {
			
				var win=this.node._document._parentNode;
			
				var z_b = new RegExp("url\\((.[^)]*?)\\)","gi");
				
				var href =  z_b.exec(bg)[1].replace(/'|"/g,'');
				
				//console.log(href);
						
				if (!((this.node.offsetWidth!=win.screen.width)||(this.node.offsetHeight!=win.screen.height))) { //Size not known
					var src=core.resourceLoader.resolve(this.node._document,href);
					
					if (src) {
						this.node._isimage=true;
						this.node._href=src;
						
						//console.log('href-----------'+this.node._href+' '+bg);
						
						this.node.___data='nothing';
						this.node.____data='nothing';
						//console.log('bgimage----------');
						core.resourceLoader.download(URL.parse(this.node._href),this.node);
					}
				}
			
			}
		};
		
		this['_backgroundImage']=bg;
	},
	get backgroundImage() {
		return this['_backgroundImage'];
	}
};

core.NamedHTMLElement=function(name,doc) {
	this.__name=name;
	this.__children=[];
	this.__loaded=false;
	this._document=doc;
	var self=this;
	if (!(this.__name in NOSTYLE)) {
		var g=function() {
			//if (!this.__style) {
			//	this.__style=new core.CSSStyleDeclaration(this);
			//};
			//return this.__style;
			delete self.style;
			self.style=new core.CSSStyleDeclaration(self);
			return self.style;
		};
		
		var s=function() {};
		
		//Object.defineProperty(this,'style',{get : g, set : s, enumerable:true, configurable:true}); 	//lazy creation of style
																										//removed, this is slower than direct creation
	
		this.style=new core.CSSStyleDeclaration(this); 		//define element.style
															
	};
	this._class='';
	this.__dom=false; //node not in dom tree at creation
	
	//Extend
	//TODO : check for performances if it is better to extend prototype instead
	var html=HTML(name.toUpperCase());
	//var proto=Object.getPrototypeOf(this);
	for (var n in html) {
		var tmp=Object.getOwnPropertyDescriptor(html,n);
		tmp.enumerable=false;
		Object.defineProperty(this,n,tmp);
	};
	
};

core.NamedHTMLElement.prototype = core.HTMLElement.prototype;

try {
	var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
} catch(ee) {
	//dummy XMLHttpRequest
	var XMLHttpRequest = function() {};
	XMLHttpRequest.prototype = {
		open : function() {},
		send : function() {},
		abort : function() {},
		setRequestHeader : function() {},
		get responseText() {return '';}
	}
};

var DOMWindow=function(document) {
	//nodejs bug #1674
	var ttimers=[];
	var itimers=[];
	//
	this._parentNode=false;
	this.__name='window';		
	this._document=document;
	this._ttimers=ttimers; //queue settimeout before readystate complete - not used
	this._itimers=itimers; //queue setinterval before readystate complete - not used
	//this.window=this;
	this._onl=0;
	this.location = document._options.url;
		if (!this.location.port) {
			if (this.location.protocol=='https') {
			this.location.port=443;
			};
			this.location.port=80;
		};
		if (!this.location.hash) {
			this.location.hash='';
		}
		if (!this.location.search) {
			this.location.search='';
		};
	this.location.assign = NOT_IMPLEMENTED();
    this.location.reload = NOT_IMPLEMENTED();
    this.location.replace = NOT_IMPLEMENTED();
    this.location.toString = function() {return this.href;};
	document._parentNode=this;
	this.Image = function() { //See nodejs bug #1674 can not be defined in prototype

		var img=document.createElement('img');
		
		img.__src='';
		
		var fn = function(val) {
			this.__src=core.resourceLoader.resolve(this._document, val);
				if ('img' in document._features['FetchExternalResources']) { //load img
					core.resourceLoader.load(this);
					//load img
					//img not appended to dom (no specs about this), onload will be executed after image loading or right away if image already loaded
				};
		};
		
		var fn2 = function () {
			  return core.resourceLoader.resolve(this._document, this.__src);
		};
	
		Object.defineProperty(img, 'src', {get : fn2, set : fn});
		
		return img;
	};
	
	//idem see nodejs bug #1674
	var self=this;
	
	//removed - see dom.js
	//this.setTimeout = function(a,b) {
		//if (document.readyState=='complete')
		//{
			//Nodejs bug #550 - strings are not admitted
			//Doing fn=new Function(a) and calling setTimeout is not enough
			//Because new Function(a) will execute in global context, not in window context
			//See "bug" #1770 (normal in fact)
			//So we can do :
		//	if (typeof(a)=='string') {
		//		var fn=function() {return core.languageProcessors['javascript'](self,a,'')};
		//		return setTimeout(fn,b);
		//	} else {return setTimeout(a,b)};
		//} else {
		//	ttimers.push([a,b]);
		//	return setTimeout(function() {},1);
		//}
	//};//TODO : check memory leaks issues
	
	//this.setInterval = function(a,b) {
		//if (document.readyState=='complete')
		//{
			//Nodejs bug #550 - strings are not admitted
			//Doing fn=new Function(a) and calling setInterva is not enough
			//Because new Function(a) will execute in global context, not in window context
			//See "bug" #1770 (normal in fact)
			//So we can do :
			//if (typeof(a)=='string') {
			//	var fn=function() {return core.languageProcessors['javascript'](self,a,'')};
			//	return setInterval(fn,b);
			//} else {return setInterval(a,b)};
		//} else {
		//	itimers.push([a,b]);
		//	return setInterval(function() {},1);
		//}
	//};//TODO : check memory leaks issues
	//
	
	this.XMLHttpRequest = function() {
		var xhr=new XMLHttpRequest();
		//Modification
		//Take baseURI into account
		//cross-domain allowed
		var oopen=xhr.open;
		xhr.open=function(method, xurl, async, user, password) {
			var href=core.resourceLoader.resolve(document,xurl);
			console.log('xhr '+href);
			oopen.call(this,method,href,async,user,password);
		};
		var osetRequestHeader=xhr.setRequestHeader;
		xhr.setRequestHeader=function(header,val) {	//correct case sensitive mistakes (3.6.2-5 w3c) see #15 node-xmlhttprequest
													//Example : http://www.blimpme.com/mobile :-)
			var tmp=header.replace(/^.|(-\D)/g,function(match){return match.toUpperCase();});
			osetRequestHeader.call(this,tmp,val);
		};
		var osend=xhr.send;
		xhr.send=function(data) { //catch errors for onreadystatechange - crash testcastorama to investigate
			if (this.onreadystatechange) {
				var o=this.onreadystatechange;
				this.onreadystatechange=function() {try {o.call(this)} catch(ee) {console.log('onreadystatechange error');}};
			};
			osend.call(this,data);
		};
		
		return xhr;
	};
	
	this.DOMParser=function() {
		this.parseFromString=function(string) {
			var doc=new DOCUMENT({},{}); //dummy doc for tests
			return doc;
		}
	};
	
	this.eval=function(str) {	//Make sure eval does execute in window context (xhr result for example)
		if (typeof(str)!='string') {
			return str;
		} else {
			return core.languageProcessors['javascript'](self,str,'');
		}
	};
	this.parentNode=this;
	this.document=this._document;
	this.frames=[this];
	this.contentWindow=this;
	this.self=this;
	this.top=this;
	this._ewList=[];
};

DOMWindow.prototype = {
	//__proto__ : core.prototype,
	//get parentNode() {return this._parentNode},
	//get document() {return this._document},
	//get frames() {return [this]},
	//get contentWindow() {return this},
	//get window() {return this},
	//get self() {return this},
    addEventListener : NOT_IMPLEMENTED(),
	removeEventListener : NOT_IMPLEMENTED(),
	dispatchEvent : NOT_IMPLEMENTED(),
    getComputedStyle: function(obj) { //TODO
	return obj.style;
	},
    navigator: {
      userAgent: 'Node.js node-dom webkit (' + process.platform + '; U; rv:' + process.version + ')',//add webkit in case the site does refuse unknow UA - TODO : ameliorate
      appName: 'Node.js NodeDom',
      platform: process.platform,
      appVersion: process.version,
	  javaEnabled: NOT_IMPLEMENTED(false)
    },
	HTMLElement: core.HTMLElement, //not standard, used by browsers
    clearInterval: clearInterval,
    clearTimeout: clearTimeout,
    name: 'nodejs',
    innerWidth: 320,
    innerHeight: 480,
    length: 1,
    outerWidth: 320,
    outerHeight: 480,
    pageXOffset: 0,
    pageYOffset: 0,
    screenX: 0,
    screenY: 0,
    screenLeft: 0,
    screenTop: 0,
    scrollX: 0,
    scrollY: 0,
    scrollTop: 0,
    scrollLeft: 0,
    alert: NOT_IMPLEMENTED(null),
    blur: NOT_IMPLEMENTED(null),
    close: NOT_IMPLEMENTED(null),
    confirm: NOT_IMPLEMENTED(null),
    createPopup: NOT_IMPLEMENTED(null),
    focus: NOT_IMPLEMENTED(null),
    moveBy: NOT_IMPLEMENTED(null),
    moveTo: NOT_IMPLEMENTED(null),
    open: NOT_IMPLEMENTED(null),
    print: NOT_IMPLEMENTED(null),
    prompt: NOT_IMPLEMENTED(null),
    resizeBy: NOT_IMPLEMENTED(null),
    resizeTo: NOT_IMPLEMENTED(null),
    scroll: NOT_IMPLEMENTED(null),
    scrollBy: NOT_IMPLEMENTED(null),
    scrollTo: NOT_IMPLEMENTED(null),
	stop: NOT_IMPLEMENTED(null),
    screen : {
      width : 320,
      height : 480,
	  availTop : 0,
	  availLeft : 0,
	  availHeight : 480,
	  availWidth : 320,
	  colorDepth : 24,
	  left : 0,
	  pixelDepth : 24,
	  top : 0
    },
    postMessage : NOT_IMPLEMENTED(null),
	console : {
		//log : function(txt) {console.log('Log '+txt);}
		log : function(txt) {console.log(txt);}
	},
	applicationCache : {},
	get content() {return this},
	closed : false,
	controllers : {},
	crypto : {},
	defaultStatus : '',
	dialogArguments : {},
	directories : {},
	frameElement : null,
	fullScreen : true,
	history : {
		back : NOT_IMPLEMENTED(null),
		forward : NOT_IMPLEMENTED(null),
		Go : NOT_IMPLEMENTED(null),
	},
	innerHeight : 480,
	innerWidth : 320,
	locationbar : NOT_IMPLEMENTED(new core.BarProp())(),
	menubar : NOT_IMPLEMENTED(new core.BarProp())(), 
	get parent() {return this}, //not implemented
	personalbar : NOT_IMPLEMENTED(new core.BarProp())(),
	returnValue : NOT_IMPLEMENTED(new core.BarProp())(),
	screenX : 0,
	screenY : 0,
	scrollbars : NOT_IMPLEMENTED(new core.BarProp())(),
	scrollMaxX : 320,
	scrollMaxY : 480,
	sidebar : NOT_IMPLEMENTED(new core.BarProp())(),
	status : '',
	statusbar : NOT_IMPLEMENTED(new core.BarProp())(),
	toolbar : NOT_IMPLEMENTED(new core.BarProp())(),
	top : 0,
	back : NOT_IMPLEMENTED(null),
	captureEvents : NOT_IMPLEMENTED(null),
	close : NOT_IMPLEMENTED(null),
	dump : NOT_IMPLEMENTED(null),
	find : NOT_IMPLEMENTED(null),
	forward : NOT_IMPLEMENTED(null),
	getAttention : NOT_IMPLEMENTED(null),
	getSelection : NOT_IMPLEMENTED(null),
	home : NOT_IMPLEMENTED(null),
	moveBy : NOT_IMPLEMENTED(null),
	moveTo : NOT_IMPLEMENTED(null),
	openDialog : NOT_IMPLEMENTED(null),
	prompt : NOT_IMPLEMENTED(null),
	releaseEvents : NOT_IMPLEMENTED(null),
	resizeBy : NOT_IMPLEMENTED(null),
	resizeTo : NOT_IMPLEMENTED(null),
	scrollByLines : NOT_IMPLEMENTED(null),
	scrollByPages : NOT_IMPLEMENTED(null),
	showModalDialog : NOT_IMPLEMENTED(null),
	sizeToContent : NOT_IMPLEMENTED(null),
	updateCommands : NOT_IMPLEMENTED(null),
	XMLSerializer : {}
};

core.HTMLDocument=function(parser,options) {
	this._elid=0; //element id for NodeList
	this._elna=0; //index for name list
	this._elca=0; //index for class list
	this.__name='document';
	this.__type='document';
	this.__children=[];
	this._parser=parser;
	this._document=this;
	this.html=false;
	this.body=false;
	this.head=false;
	this._base='';
	this._options=options;
	this._features=options.features||{FetchExternalResources:{},ProcessExternalResources:{},removeScript:false,regexp:''};
	this._regexp=this._features.regexp?new RegExp(this._features.regexp,"g"):'';//double \ if included in regexp
	this._URL=options.url.href||'';
	this._queue=[];
	this._queueimg=[];
	this._queue_err=[];
	this.title='';
	this.readyState='loading';
	this._downloadedImages=new core.loadedImages();
	this._onload=[];
	this._cookie=options.cookie||{setCookiesForUrl:function() {},cookiesForUrl:function(){return ''}};
	this._Tnodelists={}; //tag nodelists
	this._Nnodelists={}; //name nodelists
	this._Cnodelists={}; //class nodelists
	this.__dom=true; //document is in dom tree!!
};

core.HTMLDocument.prototype = {
	__proto__ : core.Document.prototype,
	get referrer() {
		return 'http://node.dom';
	},
	get domain() {
		return this.location.hostname; //To check
	},
	get URL() {
		return this._URL;
	},
	get location() {
		return this._parentNode.location;
	},
	get images() {
		return this.getElementsByTagName('IMG');
	},
	get embeds() {
		return this.getElementsByTagName('APPLET').concat(this.getElementsByTagName('OBJECT'));
	},
	get plugins() {
		return this.embeds;
	},
	get links() {
		return this.getElementsByTagName('A').concat(this.getElementsByTagName('AREA'));
	},
	get forms() {
		return this.getElementsByTagName('FORM');
	},
	get anchors() {
		return this.getElementsByTagName('A');
	},
	get scripts() {
		return this.getElementsByTagName('SCRIPT');
	},
	open  : function() {
	},
	close : function() {
		this.___data='end';
		core.resourceLoader.enqueue(this);
		core.resourceLoader.resume(this);
	},
	write : function(text) {
		//write is overwrited during resources execution to get the correct lastChild
	},
	writeln : function(text) {
		this.write(text + '\n');
	},
	set title(val) { //do nothing
	},
	dir :'',
	get defaultView() {return this._parentNode},
	get activeElement() {return this.body},
	hasFocus : function() {return true},
	designMode : 'off',
	_ids : [],
	_names : {},
	_class : {},
	setTree : function(Element) {
		
		if (Element) {
		
				var element, attribs=Element.attribs;
		
				if ((Element.type=='tag')||(Element.type=='script')||(Element.type=='style')) {
					element=this.createElement(Element.name?Element.name:Element.type);
					element.___data='data'; //allow onload to fire if set as a property in tag
					element.____data='data';
				} else if (Element.type=='text') {
					element=this.createTextNode(Element.data)
				} else {
				return;
				};
				
				if (element.__name=='title') {
				this.title=Element.__data;
				};
			
				if (attribs) {
				
					if ('style' in attribs) {
						element.style.cssText=attribs['style'];
					};
					
					delete attribs['style'];

					for (var n in attribs) { //assign properties
						var m=n.toLowerCase();
						if ((m=='href')&&(element.__name=='base')) {element._document._base=attribs[m];};
						if (m=='class') {m='className';} else if (m=='href') {m='__href';} else if (m=='src') {m='__src'};
						element.setAttribute(m,attribs[n]);
					};
				};
				
				//element._parsed=Element;
				
				if (Element._parentNode) {
					Element._parentNode.appendChild(element);
				};
				
				Element._parsed=element; //keep reference to the initial dom

				//specific real time price comparer
				if (this._options.forms) {
					if (element.__name=='input') {
					element.type=element.type?element.type:'text';
					console.log('nnn '+element.type);
						if ((element.type=='text')||(element.type=='search')) {
							var iname=element.name;
							var iurl='';
							var ireq='';
							var el=element;
							core.languageProcessors['javascript']=function() {};//do not execute scripts
							this.setTree=function() {}; //stop building the DOM
							while(el._parentNode) {
								if (el._parentNode.__name=='form') {
								console.log(el._parentNode.submit.toString());
									iurl=el._parentNode.action;
									ireq=el._parentNode.type?el._parentNode.type:'POST';
									this._options.forms={action:iurl,name:iname,req:ireq};
									break;
								}
								el=el._parentNode
							}
							console.log(this._options.forms);
						}
					};
				};
				//end specific real time price comparer
			
			} else {
			Element=this; //called by document Element=document or innerHTML/outerHTML
			var element=Element;
			}; 

			if (Element.children) {
			var children=Element.children;
			var l=children.length;
				for (var n=0;n<l;n++) {
					//element.children[n]=createProxy(element.children[n]);
					var el=children[n];
					el._parentNode=element;
					this._document.setTree(el); //this refers to element for innerHTML/outerHTML
				}
			}
	},
	_addid : function(element,attr) {
		if (element.__dom) { //if in dom tree
			this._ids[attr]=element; //id list
		}
	},
	_addname : function(element,attr) {
		if (attr) {
			this._elna++;
			element._elna=this._elna;
			if (attr.trim()) {
				if (!this._names[attr]) {this._names[attr]={};};
				this._names[attr][this._elna]=element;
			}
		}
	},
	_addclass : function(element,attr) {
		if (attr) {
			this._elca++;
			element._elca=this._elca;
			var classes=attr.trim().split(' '); //split classes
			var l=classes.length;
			for (var i=0;i<l;i++) {
				if (classes[i].trim()) {
					if (!this._class[classes[i]]) {this._class[classes[i]]={};};
					this._class[classes[i]][this._elca]=element; //add node in each class list
				}
			}
		}
	},
	get cookie() { return this._cookie.cookiesForUrl(); },
	set cookie(val) { this._cookie.setCookiesForUrl([val]); },
	updateNL : function(val,name,nodelist) {
		var list=new core.NodeList();
		var listname=val;
			for (var n in listname) {
				if (listname[n].__dom) {
					list.push(listname[n]);
				}
			};
			if (!nodelist[name]) { //create nodelist
				nodelist[name]=list;
			} else { 
				//update nodelist
				//unlike w3c specifies, nodeLists are unordered here
				var nl=nodelist[name];
					while (nl.length) {
						nl.pop();
					};
					var l=list.length;
					for (var i=0;i<l;i++) {
						nl.push(list[i]);
					}
				//TODO : there might exist a clever way to do this...
			};
		
		return list;
	}
};

var WINDOW=exports.WINDOW=DOMWindow,
	DOCUMENT=exports.DOCUMENT=core.HTMLDocument,
	NODE=exports.NODE=core.NamedHTMLElement,
	TEXT=exports.TEXT=core.Text,
	FRAGMENT=exports.FRAGMENT=core.DocumentFragment,
	CORE=exports.CORE=core,
	HTML = require('./html.js').HTML;;