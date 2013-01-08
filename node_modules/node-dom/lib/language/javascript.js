/*
Copyright (c) 2011 jCore - Aymeric Vitte - MIT license
*/

var vm = require('vm');

exports.javascript = function(element, code, filename) {
    try {

		//console.log('script ------------------'+(element._href||'timeout or onload or eval')+' '+code.substr(0,100));

		return vm.createScript(code, filename).runInContext(element._document._parentNode);

    } catch(ee) {
		console.log('error script ------------------'+(element._href||'timeout or onload or eval')+' '+code.substr(0,100));
		element._document._queue_err.push(element);
		//console.log(code);
		//console.log(ee.description);
		//console.log((new Error(ee.description)).stack);
    }
};
