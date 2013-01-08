//Harmony proxy, to be used once implemented in v8

Function.prototype.De=function(obj,_name,_node) {
var f=this;
if (typeof(_name)=="undefined")
{
	return function() {
	return f.apply(obj,arguments);
}
} else {
//wrap example to access node element when it exists
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

var createProxy = exports.createProxy = function(handlers) {

      return Proxy.create({
	  
	  get: function (receiver, name){

		if (!(name in handlers)) {
            return false;
          } else  {
		  if (handlers[name]!=null) {
				if (typeof(handlers[name].__get)!='undefined')	{ //define getter
						return handlers[name].__get.apply(handlers,arguments);
					} else {
						return (handlers[name]|| false);
					}
				} else {
			return null;
			}	
		  }
        },
	  
      set: function (receiver, name, val){
		  
			if ((name=='dom')||(name=='_tagStack')) //dom for parser handler
			{
			if (name=='_tagStack') {
			handlers[name]={last : handlers[name].last};
					// remove array
					// parser handler becomes {'0','1',..,push,last,...} where '0','1',... are elements
					// set parentNode
			} else {
			handlers[name]={}; //dom type
			}
			handlers[name].name=name;
			handlers[name].length=0;
			handlers[name].push=function() {
				//define parentNode
				var tmp=arguments[0];
				if (this.name=='dom') {
				tmp._parentNode=this; //parent = document this.dom
				}
				tmp.__name='node'; //not standard
				
				this[this.length] = createProxy(tmp); //create a proxy for each element to define setters and getters
				this.length++;
				tmp.prototype=NODE.prototype; //set node properties
			};
			handlers[name].pop=function() {
				this[this.length-1]=null;
				this.length--;
			}
		  } else {
		  
		  if (name in handlers) {
			if (typeof(handlers[name].__set)!="undefined")  { //define setter
			handlers[name].__set.call(handlers,val);
			return true;
			}  
		  }
		  
		  if (typeof(val)=="function")  {
			handlers[name]=val.De(handlers);
			} else if (name=='prototype') { //TODO handle super: probably handlers['prototype']=createProxy({ parent : handlers})
					for (var n in val) {
						//super: probably while (handlers['prototype']) {handlers=handlers.parent}
						if (typeof(val[n])=="function")
							{
								handlers[n]=val[n].De(handlers); //could be val[n] alone
							} else {
								handlers[n]=val[n];
								}
					}
		  } else {
			handlers[name]=val;
			
		  }
		  }
		  
          return true;
        }
      });
 }
 
 
//var dom2={length:0};

//for (var i=0;i<tmp.dom.length;i++) {
	//dom2[dom2.length] = createProxy(tmp.dom[i]); //create a proxy for each element to define setters and getters
	//dom2.length++;
	//dom2[dom2.length-1]._parentNode=dom2;
	//dom2[dom2.length-1].prototype=NODE.prototype;
	//tmp.dom[i]._parentNode=tmp.dom;
	//tmp.dom[i]._document=document;
	//tmp.dom[i].__proto__=NODE.prototype;
	//setTree(tmp.dom[i]);
//};

//var	document = createProxy(dom2);

//var window=createProxy({});