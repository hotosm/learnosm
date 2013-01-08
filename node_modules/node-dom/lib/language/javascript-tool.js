/*
Copyright (c) 2011 Naïs - Aymeric Vitte - MIT license
*/

var vm = require('vm');

exports.javascript = function(element, code, filename) {
    try {
	
		//console.log('script ------------------'+(element._href||'timeout or onload or eval')+' '+code.substr(0,100));
		
this.FunctionExprCount = (function(require, exports) { 

var __undef; 
var __modules = []; 
var __exports = []; 
var __global = this; 

function __require(i, obj) { 
  var e = __exports[i]; 
  
  if (e !== __undef) 
    return e; 
  
  e = __modules[i].call(__global, __exports[i] = (obj || {})); 
  
  if (e !== __undef) 
    __exports[i] = e; 
  
  return __exports[i]; 
} 

__modules[0] = function(exports) {

var Parser = __require(1),
	Util = __require(4),
	BEGIN = { line: 0, col: 0 },
	filter;

var GLOBAL_NAMES = [

	// Keywords
	"true",
	"false",
	"this",
	"null",
	
	// ES5 properties of the global object
	"undefined",
	"Object",
	"Function",
	"Array",
	"String",
	"Boolean",
	"Number",
	"Date",
	"RegExp",
	"Error",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"Math",
	"JSON",
	"Infinity",
	"NaN",
	"eval",
	"isFinite",
	"isNaN",
	"parseInt",
	"parseFloat",
	"setTimeout",
	"clearTimeout",
	"setInterval",
	"clearInterval",
	"encodeURI",
	"decodeURI",
	"encodeURIComponent",
	"decodeURIComponent"
];

function count(tree, totals, scope) {

	totals = totals || { all: 0, single: 0, total: 0, expr: 0, block: 0, objLiteral: 0, fnLength: [0, 0, 0, 0, 0], methods: 0 };
	scope = scope || { thisRef: false, object: false };
	
	if (!Array.isArray(tree))
		return totals;
	
	var i, ret, inObj;
	
	inObj = scope.object;
	
	if (tree[0] === "name" && tree[1] === "this")
		scope.thisRef = true;
	
	if (tree[0] === "function" || tree[0] === "defun")
		scope = { thisRef: false };
	
	if (tree[0] === "object")
		scope.object = true;
		
	for (i = 0; i < tree.length; ++i)
		count(tree[i], totals, scope);

	if (tree[0] === "function" && tree.length === 4) {
		
		totals.all += 1;
		
		if (!scope.thisRef) {
		
			totals.total += 1;
			totals.fnLength[Math.min(tree[2].length, 4)] += 1;
		
			try {
			
				ret = tree[3][0];
				
				if (ret[0] === "return" && ret.length === 2) {
				
					totals.expr += 1;
					
					if (ret[1] && ret[1][0] === "object")
						totals.objLiteral += 1;
				
				} else if (tree[3].length === 1 && tree[3][0][0] === "stat") {
				
					totals.single += 1;
				
				} else {
				
					totals.block += 1;
				
				}
			
			} catch (x) {
			
				totals.block += 1;
			
			}
		
		} else if (inObj) {
		
			totals.methods += 1;
		
		}
	}
	
	return totals;
}

function parse(source) {

	var tree = Parser.parse(source), 
		annotated = false;
	
	return {
	
		ast: tree,
		
		count: function() {
			
			var c = count(tree);
			
			c.pctBTF = c.all > 0 ? (c.total / c.all * 100) : 0;
			c.pctBlock = c.total > 0 ? (c.block / c.total * 100) : 0;
			c.pctExpr = c.total > 0 ? (c.expr / c.total * 100) : 0;
			c.pctSingle = c.total > 0 ? (c.single / c.total * 100) : 0;
			c.pctObjLiteral = c.total > 0 ? (c.objLiteral / c.total * 100) : 0;
			c.fnLength.forEach(function(v, i) { c["pctArgs" + i] = c.total > 0 ? (v / c.total * 100) : 0; });
			
			c.pctMethods = c.all > 0 ? (c.methods / c.all * 100) : 0;
			c.pctMethodsOrBTF = c.all > 0 ? ((c.methods + c.total) / c.all * 100) : 0;
			
			return c;
		}
		
	};
}

return {
	parse: parse,
	count: function(source) { return parse(source).count(); }
};


};

__modules[1] = function(exports) {

var Util = __require(2),
	ParseError = Util.ParseError,
	Lexer = __require(3),
	isToken = Lexer.isToken,
	arrayToMap = Util.arrayToMap,
	hasKey = __require(4).hasKey;

var STATEMENTS_WITH_LABELS = arrayToMap([ "for", "do", "while", "switch" ]);
var ATOMIC_START_TOKEN = arrayToMap([ "atom", "num", "string", "regexp", "name" ]);
var UNARY_POSTFIX = arrayToMap([ "--", "++" ]);

var UNARY_PREFIX = arrayToMap([

	"typeof",
	"void",
	"delete",
	"--",
	"++",
	"!",
	"~",
	"-",
	"+"
]);

var ASSIGNMENT = (function(a, ret, i) {

	var a = ["+=", "-=", "/=", "*=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&="],
		ret = { "=": true },
		i;
	
	for (i = 0; i < a.length; ++i)
		ret[a[i]] = a[i].substr(0, a[i].length - 1);
	
	return ret;

})();

var PRECEDENCE = (function(a, ret) {

	var a = [
	
		["||"],
		["&&"],
		["|"],
		["^"],
		["&"],
		["==", "===", "!=", "!=="],
		["<", ">", "<=", ">=", "in", "instanceof"],
		[">>", "<<", ">>>"],
		["+", "-"],
		["*", "/", "%"]
	];
	
	var ret = {}, b, i, j, n;
	
	for (i = 0, n = 1; i < a.length; ++i, ++n) {
	
		b = a[i];
		
		for (j = 0; j < b.length; ++j) 
			ret[b[j]] = n;
	}
	
	return ret;
	
})();


function NodeWithToken(str, start, end) {

	this.name = str;
	this.start = start;
	this.end = end;
};

NodeWithToken.prototype.toString = function() { return this.name; };


function parse(INPUT, exigentMode) {

	// Forward function variable declarations
	var expression,
		statement,
		labeledStatement,
		simpleStatement,
		topLevel,
		breakCont,
		function_,
		switchBlock_,
		if_,
		var_,
		vardef,
		const_,
		forIn,
		regularFor,
		try_,
		new_,
		exprAtom,
		subscripts,
		array_,
		object_,
		makeUnary,
		exprOp,
		maybeConditional,
		maybeAssign;
	
	var S = {
	
		lexer: Lexer.create(INPUT, true),
		token: null,
		prev: null,
		peeked: null,
		inFunction: 0,
		inLoop: 0,
		labels: [],
		asi: false
	};
		
	function nodeFunction(fn) {
	
		return function(a, b, c, d) {
		
			var start = S.token,
				node = fn(a, b, c, d);
			
			node.start = start;
			node.end = S.prev;
			
			if (!node.asi) 
				node.asi = S.asi;
			
			S.asi = false;
			
			return node;
		};
	}
	
	function is(type, value) {
	
		return isToken(S.token, type, value);
	}
	
	function peek() {
	
		return S.peeked || (S.peeked = S.lexer.nextToken());
	}

	function next() {
	
		S.prev = S.token;
		
		if (S.peeked) {
		
			S.token = S.peeked;
			S.peeked = null;
		
		} else {
		
			S.token = S.lexer.nextToken();
		}
		
		return S.token;
	}

	/*
	function prev() {
	
		return S.prev;
	}
	*/

	function croak(msg, line, col, pos) {
	
		var ctx = S.lexer.getContext();
		
		throw new ParseError(msg,
			line != null ? line : ctx.tokenLine,
			col != null ? col : ctx.tokenCol,
			pos != null ? pos : ctx.tokenPos);
	}

	function tokenError(token, msg) {
	
		croak(msg, token.line, token.col);
	}

	function unexpected(token) {
	
		if (token == null)
			token = S.token;
		
		tokenError(token, "Unexpected token: " + token.type + " (" + token.value + ")");
	}

	function expectToken(type, val) {
	
		if (is(type, val))
			return next();
		
		tokenError(S.token, "Unexpected token " + S.token.type + ", expected " + type);
	}

	function expect(punc) {
	
		return expectToken("punc", punc);
	}

	function canInsertSemicolon() {
	
		return !exigentMode && (S.token.newlineBefore || is("eof") || is("punc", "}"));
	}

	function semicolon() {
	
		if (is("punc", ";")) next();
		else if (!canInsertSemicolon()) unexpected();
		else S.asi = true;
	}
	
	function node() {
	
		var a = slice(arguments);
		a.start = S.token;
		return a;
	}

	function parenthesised() {
	
		expect("(");
		var ex = expression();
		expect(")");
		return ex;
	}

	statement = nodeFunction(function() {
	
		var body;
		
		if (is("operator", "/")) {
		
			S.peeked = null;
			S.token = S.lexer.nextToken(true); // force regexp
		}
		
		switch (S.token.type) {
		
			case "num":
			case "string":
			case "regexp":
			case "operator":
			case "atom":
			
				return simpleStatement();
		
			case "name":
			
				return isToken(peek(), "punc", ":") ?
					labeledStatement(sequence(S.token.value, next, next)) :
					simpleStatement();
		
			case "punc":
				
				switch (S.token.value) {
				
					case "{":
						return node("block", block_());
					case "[":
					case "(":
						return simpleStatement();
					case ";":
						next();
						return node("block");
					default:
						unexpected();
				}
		
			case "keyword":
					
				switch (sequence(S.token.value, next)) {
				
					case "break":
						return breakCont("break");
				
					case "continue":
						return breakCont("continue");
				
					case "debugger":
						semicolon();
						return node("debugger");
				
					case "do":
						body = inLoop(statement);
						expectToken("keyword", "while");
						return node("do", sequence(parenthesised, semicolon), body);
				
					case "for":
						return for_();
				
					case "function":
						return function_(true);
				
					case "if":
						return if_();
				
					case "return":
						
						if (S.inFunction == 0)
							croak("'return' outside of function");
						
						return node("return",
				  			is("punc", ";") ? (next(), null) :
							canInsertSemicolon() ? null : 
							sequence(expression, semicolon));
				
					case "switch":
						return node("switch", parenthesised(), switchBlock_());
				
					case "throw":
						return node("throw", sequence(expression, semicolon));
				
					case "try":
						return try_();
				
					case "var":
						return sequence(var_, semicolon);
				
					case "const":
						return sequence(const_, semicolon);
				
					case "while":
						return node("while", parenthesised(), inLoop(statement));
				
					case "with":
						return node("with", parenthesised(), statement());
				
					default:
						unexpected();
				}
		}
	});

	labeledStatement = nodeFunction(function(label) {
	
		S.labels.push(label);
		
		var start = S.token, stat = statement();

		if (exigentMode && !hasKey(STATEMENTS_WITH_LABELS, stat[0]))
			unexpected(start);
		
		S.labels.pop();
		return node("label", label, stat);
	});

	simpleStatement = nodeFunction(function() {
	
		return node("stat", sequence(expression, semicolon));
	});
	
	breakCont = nodeFunction(function(type) {
	
		var name;
		
		if (!canInsertSemicolon())
			name = is("name") ? S.token.value : null;
		
		if (name != null) {
		
			next();
			
			if (!member(name, S.labels))
				croak("Label " + name + " without matching loop or statement");
		
		} else if (S.inLoop == 0) {
		
			croak(type + " not inside a loop or switch");
		}
		
		semicolon();
		
		return node(type, name);
	});

	function for_() {
	
		var init = null;
		
		expect("(");
		
		if (!is("punc", ";")) {
		
			init = is("keyword", "var") ? 
				(next(), var_(true)) : 
				expression(true, true);
		
			if (is("operator", "in"))
				return forIn(init);
		}
		
		return regularFor(init);
	}

	regularFor = nodeFunction(function(init) {
	
		expect(";");
		var test = is("punc", ";") ? null : expression();
		expect(";");
		var step = is("punc", ")") ? null : expression();
		expect(")");
					
		return node("for", init, test, step, inLoop(statement));
	});

	forIn = nodeFunction(function(init) {
	
		var lhs = init[0] == "var" ? node("name", init[1][0]) : init;
		next();
		var obj = expression();
		expect(")");
		return node("for-in", init, lhs, obj, inLoop(statement));
	});

	function_ = nodeFunction(function(inStatement) {
	
		var name = is("name") ? sequence(S.token.value, next) : null,
			args = [],
			first = true,
			loop = S.inLoop,
			body;
	
		if (inStatement && !name)
			unexpected();
		
		expect("(");
		
		// Arguments
		while (!is("punc", ")")) {
		
			if (first) first = false; 
			else expect(",");
			
			if (!is("name")) 
				unexpected();
			
			args.push(S.token.value);
			next();
		}
		
		next();
		
		// Body
		++S.inFunction;
		S.inLoop = 0;
		body = block_();
		--S.inFunction;
		S.inLoop = loop;
				 
		return node(inStatement ? "defun" : "function", name, args, body);
	});

	if_ = nodeFunction(function() {
	
		var cond = parenthesised(), 
			body = statement(), 
			elseBody;
		
		if (is("keyword", "else")) {
		
			next();
			elseBody = statement();
		}
		
		return node("if", cond, body, elseBody);
	});

	function block_() {
	
		expect("{");
		
		var a = [];
		
		while (!is("punc", "}")) {
		
			if (is("eof")) 
				unexpected();
				
			a.push(statement());
		}
		
		next();
		
		return a;
	}

	switchBlock_ = curry(inLoop, function() {
	
		expect("{");
		
		var a = [], cur = null;
		
		while (!is("punc", "}")) {
		
			if (is("eof")) 
				unexpected();
			
			if (is("keyword", "case")) {
			
				next();
				cur = [];
				a.push([ expression(), cur ]);
				expect(":");
			
			} else if (is("keyword", "default")) {
			
				next();
				expect(":");
				cur = [];
				a.push([ null, cur ]);
			
			} else {
			
				if (!cur) unexpected();
				cur.push(statement());
			}
		}
		
		next();
		return a;
	});

	try_ = nodeFunction(function() {
	
		var body = block_(), catchBody, finallyBody;
		
		if (is("keyword", "catch")) {
		
			next();
			expect("(");
					 
			if (!is("name"))
				croak("Name expected");
		
			var name = S.token.value;
		
			next();
			expect(")");
			catchBody = [ name, block_() ];
		}
		
		if (is("keyword", "finally")) {
		
			next();
			finallyBody = block_();
		}
		
		if (!catchBody && !finallyBody)
			croak("Missing catch/finally blocks");
		
		return node("try", body, catchBody, finallyBody);
	});

	function vardefs(noIn) {
	
		var a = [];
		
		for (;;) {
		
			a.push(vardef(noIn));
		
			if (!is("punc", ","))
				break;
		
			next();
		}
		
		return a;
	}
	
	vardef = nodeFunction(function(noIn) {
	
		if (!is("name"))
			unexpected();
	
		var name = S.token.value;
	
		next();
	
		if (is("operator", "=")) {
		
			next();
			return node(name, expression(false, noIn));
		
		} else {
		
			return node(name);
		}
	});

	var_ = nodeFunction(function(noIn) {
	
		return node("var", vardefs(noIn));
	});

	const_ = nodeFunction(function() {
	
		return node("const", vardefs());
	});

	new_ = nodeFunction(function() {
	
		var newExpr = exprAtom(false), args;
		
		if (is("punc", "(")) {
		
			next();
			args = exprList(")");
		
		} else {
		
			args = [];
		}
		
		return subscripts(node("new", newExpr, args), true);
	});

	exprAtom = nodeFunction(function(allowCalls) {
	
		if (is("operator", "new")) {
		
			next();
			return new_();
		}
		
		if (is("punc")) {
		
			switch (S.token.value) {
			
				case "(":
					next();
					return subscripts(sequence(expression, curry(expect, ")")), allowCalls);
				case "[":
					next();
					return subscripts(array_(), allowCalls);
				case "{":
					next();
					return subscripts(object_(), allowCalls);
			}
			
			unexpected();
		}
		
		if (is("keyword", "function")) {
		
			next();
			return subscripts(function_(false), allowCalls);
		}
		
		if (hasKey(ATOMIC_START_TOKEN, S.token.type)) {
		
			var atom = S.token.type == "regexp" ? 
				node("regexp", S.token.value[0], S.token.value[1]) :
				node(S.token.type, S.token.value);
			
			return subscripts(sequence(atom, next), allowCalls);
		}
		
		unexpected();
	});

	function exprList(closing, allowTrailingComma, allowEmpty) {
	
		var first = true, a = [];
	
		while (!is("punc", closing)) {
		
			if (first) first = false; 
			else expect(",");
			
			if (allowTrailingComma && is("punc", closing)) {
			
				a.trailingComma = true;
				break;
			}
	
			if (is("punc", ",") && allowEmpty)
				a.push([ "atom", "undefined" ]);
			else
				a.push(expression(false));
		}
	
		next();
		return a;
	}

	array_ = nodeFunction(function() {
	
		var a = exprList("]", !exigentMode, true), 
			ret = node("array", a);
	
		ret.trailingComma = a.trailingComma;
		return ret;
	});

	object_ = nodeFunction(function() {
	
		var first = true, 
			a = [], 
			trailing = false,
			type,
			name;
			
		while (!is("punc", "}")) {
		
			if (first) first = false; 
			else expect(",");
			
			if (!exigentMode && is("punc", "}")) {
			
				// allow trailing comma
				trailing = true;
				break;
			}
			
			type = S.token.type;
			name = asPropertyName();
			
			if (type == "name" && (name == "get" || name == "set") && !is("punc", ":")) {
			
				a.push([ asName(), function_(false), name ]);
			
			} else {
			
				expect(":");
				a.push([ name, expression(false) ]);
			}
		}
		
		next();
		
		a = node("object", a);
		a.trailingComma = trailing;
		
		return a;
	});

	function asPropertyName() {
	
		switch (S.token.type) {
		
			case "num":
			case "string":
				return sequence(S.token.value, next);
		}
		
		return asName();
	}

	function asName() {
	
		switch (S.token.type) {
		
			case "name":
			case "operator":
			case "keyword":
			case "atom":
				return sequence(S.token.value, next);
		
			default:
				unexpected();
		}
	}

	subscripts = nodeFunction(function(expr, allowCalls) {
	
		if (is("punc", ".")) {
		
			next();
			return subscripts(node("dot", expr, asName()), allowCalls);
		}
		
		if (is("punc", "[")) {
		
			next();
			return subscripts(node("sub", expr, sequence(expression, curry(expect, "]"))), allowCalls);
		}
		
		if (allowCalls && is("punc", "(")) {
		
			next();
			return subscripts(node("call", expr, exprList(")")), true);
		}
		
		return expr;
	});

	function maybeUnary(allowCalls) {
	
		if (is("operator") && hasKey(UNARY_PREFIX, S.token.value))
			return makeUnary("unary-prefix", sequence(S.token.value, next), maybeUnary(allowCalls));
	
		var val = exprAtom(allowCalls);
	
		while (is("operator") && hasKey(UNARY_POSTFIX, S.token.value) && !S.token.newlineBefore) {
		
			val = makeUnary("unary-postfix", S.token.value, val);
			next();
		}
		
		return val;
	}

	makeUnary = nodeFunction(function(tag, op, expr) {
	
		if ((op == "++" || op == "--") && !isAssignable(expr))
			croak("Invalid use of " + op + " operator");
		
		return node(tag, op, expr);
	});

	exprOp = nodeFunction(function(left, minPrec, noIn) {
	
		var op = is("operator") ? S.token.value : null;
		
		if (op && op == "in" && noIn) 
			op = null;
		
		var prec = op != null ? PRECEDENCE[op] : null;
		
		if (prec != null && prec > minPrec) {
		
			next();
			var right = exprOp(maybeUnary(true), prec, noIn);
			return exprOp(node("binary", op, left, right), minPrec, noIn);
		}
		
		return left;
	});

	function exprOps(noIn) {
	
		return exprOp(maybeUnary(true), 0, noIn);
	}

	maybeConditional = nodeFunction(function(noIn) {
	
		var expr = exprOps(noIn), yes;
		
		if (is("operator", "?")) {
		
			next();
			yes = expression(false);
			expect(":");
			return node("conditional", expr, yes, expression(false, noIn));
		}
		
		return expr;
	});

	function isAssignable(expr) {
	
		if (!exigentMode) 
			return true;
		
		switch (expr[0]) {
		
			case "dot":
			case "sub":
			case "new":
			case "call":
				return true;
			
			case "name":
				return expr[1] != "this";
		}
	}

	maybeAssign = nodeFunction(function(noIn) {
	
		var left = maybeConditional(noIn), 
			val = S.token.value;
		
		if (is("operator") && hasKey(ASSIGNMENT, val)) {
		
			if (isAssignable(left)) {
			
				next();
				return node("assign", ASSIGNMENT[val], left, maybeAssign(noIn));
			}
		
			croak("Invalid assignment");
		}
		
		return left;
	});

	expression = nodeFunction(function(commas, noIn) {
	
		if (typeof commas !== "boolean")
			commas = true;
		
		var expr = maybeAssign(noIn);
		
		if (commas && is("punc", ",")) {
		
			next();
			return node("seq", expr, expression(true, noIn));
		}
		
		return expr;
	});

	function inLoop(cont) {
	
		try {
		
			++S.inLoop;
			return cont();
		
		} finally {
		
			--S.inLoop;
		}
	}
	
	topLevel = nodeFunction(function() {
	
		var a = [];
		
		while (!is("eof"))
			a.push(statement());
		
		return node("toplevel", a);
	});
	
	S.token = next();
	return topLevel();

};


// Utilities

function member(name, array) {

	for (var i = array.length; --i >= 0;)
		if (array[i] === name)
			return true;
	
	return false;
}

function slice(a, start) {

	return Array.prototype.slice.call(a, start == null ? 0 : start);
}

function curry(f) {

	var args = slice(arguments, 1);
	return function() { return f.apply(this, args.concat(slice(arguments))); };
}

function sequence(ret) {

	if (ret instanceof Function)
		ret = ret();
	
	for (var i = 1, n = arguments.length; --n > 0; ++i)
		arguments[i]();
	
	return ret;
}

// API

return { parse: parse };


};

__modules[2] = function(exports) {

function arrayToMap(a) {

	var ret = {};
	
	for (var i = 0; i < a.length; ++i)
		ret[a[i]] = true;
	
	return ret;
}

function ParseError(message, line, col, pos)  {

	this.message = message;
	this.line = line;
	this.col = col;
	this.pos = pos;
}

ParseError.prototype.toString = function() {

	return this.message + " (line: " + (this.line + 1) + ", col: " + this.col + ")";
};

return {
	
	arrayToMap: arrayToMap,
	ParseError: ParseError
	
};


};

__modules[3] = function(exports) {

var Util = __require(2),
	ParseError = Util.ParseError,
	arrayToMap = Util.arrayToMap,
	hasKey = __require(4).hasKey;

var KEYWORDS = arrayToMap([

	"break",
	"case",
	"catch",
	"const",
	"continue",
	"default",
	"delete",
	"do",
	"else",
	"finally",
	"for",
	"function",
	"if",
	"in",
	"instanceof",
	"new",
	"return",
	"switch",
	"throw",
	"try",
	"typeof",
	"var",
	"void",
	"while",
	"with"
]);

/*
[NOT USED]

var RESERVED_WORDS = arrayToMap([

	"abstract",
	"boolean",
	"byte",
	"char",
	"class",
	"debugger",
	"double",
	"enum",
	"export",
	"extends",
	"final",
	"float",
	"goto",
	"implements",
	"import",
	"int",
	"interface",
	"long",
	"native",
	"package",
	"private",
	"protected",
	"public",
	"short",
	"static",
	"super",
	"synchronized",
	"throws",
	"transient",
	"volatile"
]);
*/

var KEYWORDS_BEFORE_EXPRESSION = arrayToMap([

	"return",
	"new",
	"delete",
	"throw",
	"else",
	"case"
]);

var KEYWORDS_ATOM = arrayToMap([

	"false",
	"null",
	"true",
	"undefined"
]);

var UNARY_POSTFIX = arrayToMap([ "--", "++" ]);
var OPERATOR_CHARS = arrayToMap(characters("+-*&%=<>!?|~^"));

var RE_HEX_NUMBER = /^0x[0-9a-f]+$/i;
var RE_OCT_NUMBER = /^0[0-7]+$/;
var RE_DEC_NUMBER = /^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i;

var OPERATORS = arrayToMap([

	"in",
	"instanceof",
	"typeof",
	"new",
	"void",
	"delete",
	"++",
	"--",
	"+",
	"-",
	"!",
	"~",
	"&",
	"|",
	"^",
	"*",
	"/",
	"%",
	">>",
	"<<",
	">>>",
	"<",
	">",
	"<=",
	">=",
	"==",
	"===",
	"!=",
	"!==",
	"?",
	"=",
	"+=",
	"-=",
	"/=",
	"*=",
	"%=",
	">>=",
	"<<=",
	">>>=",
	"|=",
	"^=",
	"&=",
	"&&",
	"||"
]);

var WHITESPACE_CHARS = arrayToMap(characters(" \u00a0\n\r\t\f\v\u200b"));
var PUNC_BEFORE_EXPRESSION = arrayToMap(characters("[{}(,.;:"));
var PUNC_CHARS = arrayToMap(characters("[]{}(),;:"));

// [NOT USED] var REGEXP_MODIFIERS = arrayToMap(characters("gmsiy"));

// regexps adapted from http://xregexp.com/plugins/#unicode
var UNICODE_LETTER = new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971\\u0972\\u097B-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D3D\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8B\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10D0-\\u10FA\\u10FC\\u1100-\\u1159\\u115F-\\u11A2\\u11A8-\\u11F9\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u1676\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19A9\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u2094\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2C6F\\u2C71-\\u2C7D\\u2C80-\\u2CE4\\u2D00-\\u2D25\\u2D30-\\u2D65\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31B7\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FC3\\uA000-\\uA48C\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA65F\\uA662-\\uA66E\\uA67F-\\uA697\\uA717-\\uA71F\\uA722-\\uA788\\uA78B\\uA78C\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA90A-\\uA925\\uA930-\\uA946\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAC00\\uD7A3\\uF900-\\uFA2D\\uFA30-\\uFA6A\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");

// Non-spacing mark
var UNICODE_NSM = new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]");

// Space-combining mark
var UNICODE_SCM = new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]");

// Connecting punctuator
var UNICODE_CP = new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]");

function isLetter(ch) {

	return UNICODE_LETTER.test(ch);
}

function isDigit(ch) {

	ch = ch.charCodeAt(0);
	return ch >= 48 && ch <= 57; // TODO: find out if "UnicodeDigit" means something else than 0..9
}

function isAlphaNumeric(ch) {

	return isDigit(ch) || isLetter(ch);
}

function isUnicodeCombiningMark(ch) {

	return UNICODE_NSM.test(ch) || UNICODE_SCM.test(ch);
}

function isUnicodeConnectorPunctuation(ch) {

	return UNICODE_CP.test(ch);
}

function isIdentifierStart(ch) {

	return ch == "$" || ch == "_" || isLetter(ch);
}

function isIdentifierChar(ch) {

	return isIdentifierStart(ch) ||
		isUnicodeCombiningMark(ch) ||
		isDigit(ch) ||
		isUnicodeConnectorPunctuation(ch) ||
		ch == "\u200c" || // zero-width non-joiner <ZWNJ>
		ch == "\u200d"; // zero-width joiner <ZWJ> (in my ECMA-262 PDF, this is also 200c)
}

function isToken(token, type, val) {

	return token.type == type && (val == null || token.value == val);
}

function parseNumber(num) {

	if (RE_HEX_NUMBER.test(num)) return parseInt(num.substr(2), 16);
	else if (RE_OCT_NUMBER.test(num)) return parseInt(num.substr(1), 8);
	else if (RE_DEC_NUMBER.test(num)) return parseFloat(num);
}

function characters(str) {

	return str.split("");
}

var ERROR_EOF = {};


// Generates a tokenizer function for the specified input
function tokenizer(input) {

	var S = {
	
		text: input.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, ''),
		pos: 0,
		tokenPos: 0,
		line: 0,
		tokenLine: 0,
		col: 0,
		tokenCol: 0,
		newlineBefore: false,
		regexAllowed: false,
		commentsBefore: []
	};
	
	return {
	
		nextToken: nextToken,
		getContext: function() { return S; },
		setContext: function(c) { S = c; }
	};

	function peek() {
	
		return S.text.charAt(S.pos);
	}

	function next(throwEOF) {
	
		var ch = S.text.charAt(S.pos++);
		
		if (throwEOF && !ch)
			throw ERROR_EOF;
		
		if (ch == "\n") {
		
			S.newlineBefore = true;
			++S.line;
			S.col = 0;
		
		} else {
		
			++S.col;
		}
		
		return ch;
	}

	/*
	[NOT USED]
	function eof() {
	
		return !S.peek();
	}
	*/
	
	function find(str, throwEOF) {
	
		var pos = S.text.indexOf(str, S.pos);
	
		if (throwEOF && pos == -1) 
			throw ERROR_EOF;
		
		return pos;
	}
	
	function startToken() {
	
		S.tokenLine = S.line;
		S.tokenCol = S.col;
		S.tokenPos = S.pos;
	}

	function token(type, value, isComment) {
	
		S.regexAllowed = ((type == "operator" && !hasKey(UNARY_POSTFIX, value)) ||
			(type == "keyword" && hasKey(KEYWORDS_BEFORE_EXPRESSION, value)) ||
			(type == "punc" && hasKey(PUNC_BEFORE_EXPRESSION, value)));
	
		var ret = {
		
			type: type,
			value: value,
			line: S.tokenLine,
			col: S.tokenCol,
			pos: S.tokenPos,
			newlineBefore: S.newlineBefore
		};
		
		if (!isComment) {
		
			ret.commentsBefore = S.commentsBefore;
			S.commentsBefore = [];
		}
		
		S.newlineBefore = false;
		return ret;
	}

	function skipWhitespace() {
	
		while (hasKey(WHITESPACE_CHARS, peek()))
			next();
	}
	
	function readWhile(f) {
	
		var ret = "", ch = peek(), i = 0;
	
		while (ch && f(ch, i++)) {
		
			ret += next();
			ch = peek();
		}
		
		return ret;
	}

	function readNumber(prefix) {
	
		var hasE = false, 
			afterE = false, 
			hasX = false, 
			hasDot = (prefix == ".");
			
		var num = readWhile(function(ch, i) {
		
			if (ch == "x" || ch == "X") {
			
				if (hasX) return false;
				else return hasX = true;
			}
			
			if (!hasX && (ch == "E" || ch == "e")) {
			
				if (hasE) return false;
				else return hasE = afterE = true;
			}
			
			if (ch == "-") {
			
				if (afterE || (i == 0 && !prefix)) return true;
				else return false;
			}
			
			if (ch == "+") 
				return afterE;
			
			afterE = false;
			
			if (ch == ".") {
			
				if (!hasDot && !hasX) return hasDot = true;
				else return false;
			}
			
			return isAlphaNumeric(ch);
		});
		
		if (prefix)
			num = prefix + num;
		
		var valid = parseNumber(num);
		
		if (!isNaN(valid)) 
			return token("num", valid);
		
		throw new ParseError("Invalid syntax: " + num);
	}

	function readEscapedChar() {
	
		var ch = next(true);
		
		switch (ch) {
		
			case "n": return "\n";
			case "r": return "\r";
			case "t": return "\t";
			case "b": return "\b";
			case "v": return "\v";
			case "f": return "\f";
			case "0": return "\0";
			case "x": return String.fromCharCode(hexBytes(2));
			case "u": return String.fromCharCode(hexBytes(4));
			case "\n": return "";
			default: return ch;
		}
	}

	function hexBytes(n) {
	
		var num = 0, digit;
		
		for (; n > 0; --n) {
		
			digit = parseInt(next(true), 16);
		
			if (isNaN(digit))
				throw new ParseError("Invalid hex-character pattern in string");
			
			num = (num << 4) | digit;
		}
		
		return num;
	}

	function readString() {
	
		return noEOF("Unterminated string constant", function() {
		
			var quote = next(), ret = "";
			
			for (;;) {
				
				var ch = next(true);
				
				if (ch == "\\") {
				
					// read OctalEscapeSequence (TODO: deprecated if "strict mode")
					// https://github.com/mishoo/UglifyJS/issues/178
					var octalLen = 0, first = null;
					
					ch = readWhile(function(ch) {
					
						if (ch >= "0" && ch <= "7") {
						
							if (!first) {
							
								first = ch;
								return ++octalLen;
							
							} else if (first <= "3" && octalLen <= 2) {
							
								return ++octalLen;
							
							} else if (first >= "4" && octalLen <= 1) {
							
								return ++octalLen;
							}
						}
						
						return false;
					});
					
					if (octalLen > 0) ch = String.fromCharCode(parseInt(ch, 8));
					else ch = readEscapedChar();
				
				} else if (ch == quote) {
				
					break;
				}
				
				ret += ch;
			}
			
			return token("string", ret);
		});
	}

	function readLineComment() {
	
		next();
		
		var i = find("\n"), ret;
		
		if (i == -1) {
		
			ret = S.text.substr(S.pos);
			S.pos = S.text.length;
		
		} else {
		
			ret = S.text.substring(S.pos, i);
			S.pos = i;
		}
	
		return token("comment1", ret, true);
	}

	function readMultilineComment() {
	
		next();
		
		return noEOF("Unterminated multiline comment", function() {
		
			var i = find("*/", true),
				text = S.text.substring(S.pos, i),
				tok = token("comment2", text, true);
			
			S.pos = i + 2;
			S.line += text.split("\n").length - 1;
			S.newlineBefore = text.indexOf("\n") >= 0;
			
			return tok;
		});
	}

	function readName() {
	
		var backslash = false, name = "", ch;
		
		while ((ch = peek()) != null) {
		
			if (!backslash) {
			
				if (ch == "\\") backslash = true, next();
				else if (isIdentifierChar(ch)) name += next();
				else break;
			
			} else {
			
				if (ch != "u") 
					throw new ParseError("Expecting UnicodeEscapeSequence -- uXXXX");
		
				ch = readEscapedChar();
		
				if (!isIdentifierChar(ch)) 
					throw new ParseError("Unicode char: " + ch.charCodeAt(0) + " is not valid in identifier");
		
				name += ch;
				backslash = false;
			}
		}
		
		return name;
	}

	function readRegexp() {
	
		return noEOF("Unterminated regular expression", function() {
		
			var prevBackslash = false, 
				regexp = "", ch, 
				inClass = false;
			
			while ((ch = next(true))) {
			
				if (prevBackslash) {
				
					regexp += "\\" + ch;
					prevBackslash = false;
				
				} else if (ch == "[") {
				
					inClass = true;
					regexp += ch;
				
				} else if (ch == "]" && inClass) {
				
					inClass = false;
					regexp += ch;
				
				} else if (ch == "/" && !inClass) {
				
					break;
				
				} else if (ch == "\\") {
				
					prevBackslash = true;
				
				} else {
				
					regexp += ch;
				}
			}
		
			var mods = readName();
			return token("regexp", [ regexp, mods ]);
		});
	}

	function readOperator(prefix) {
	
		function grow(op) {
		
			if (!peek()) 
				return op;
			
			var bigger = op + peek();
			
			if (hasKey(OPERATORS, bigger)) {
			
				next();
				return grow(bigger);
			
			} else {
			
				return op;
			}
		}
		
		return token("operator", grow(prefix || next()));
	}

	function handleSlash() {
	
		next();
	
		var regexAllowed = S.regexAllowed;
	
		switch (peek()) {
		
			case "/":
				S.commentsBefore.push(readLineComment());
				S.regexAllowed = regexAllowed;
				return nextToken();
	
			case "*":
				S.commentsBefore.push(readMultilineComment());
				S.regexAllowed = regexAllowed;
				return nextToken();
		}
	
		return S.regexAllowed ? readRegexp() : readOperator("/");
	}

	function handleDot() {
	
		next();
		return isDigit(peek()) ? readNumber(".") : token("punc", ".");
	}

	function readWord() {
	
		var word = readName();
		
		return !hasKey(KEYWORDS, word) ? token("name", word) :
			hasKey(OPERATORS, word) ? token("operator", word) :
			hasKey(KEYWORDS_ATOM, word) ? token("atom", word) :
			token("keyword", word);
	}

	function noEOF(msg, cont) {
	
		try {
		
			return cont();
		
		} catch(ex) {
		
			if (ex === ERROR_EOF) throw new ParseError(msg);
			else throw ex;
		}
	}

	// Return the next token from the input stream
	function nextToken(forceRegexp) {
	
		if (forceRegexp)
			return readRegexp();
			
		skipWhitespace();
		startToken();
		
		var ch = peek();
		
		if (!ch) return token("eof");
		if (isDigit(ch)) return readNumber();
		if (ch === '"' || ch == "'") return readString();
		if (hasKey(PUNC_CHARS, ch)) return token("punc", next());
		if (ch === ".") return handleDot();
		if (ch === "/") return handleSlash();
		if (hasKey(OPERATOR_CHARS, ch)) return readOperator();
		if (ch === "\\" || isIdentifierStart(ch)) return readWord();
		
		throw new ParseError("Unexpected character '" + ch + "'");
	}

	/*
	[NOT USED]
	// Get or set the current context
	function context(ctx) {
	
		if (ctx) S = ctx;
		return S;
	}
	*/
	
};

return {
	create: tokenizer,
	isToken: isToken
};


};

__modules[4] = function(exports) {


var Lang = __require(5);

return Lang.setKeys({}, Lang, {

	EventTarget: __require(6),
	Class: __require(7),
	Async: __require(8),
	format: __require(10).format

});


};

__modules[5] = function(exports) {

var keys = Object.keys,
	OP = Object.prototype,
	HOP = OP.hasOwnProperty,
	uid = 1,
	uidPrefix = "jia.khs4473.com/keys/",
	console = this.console;

// Returns the internal class of an object
function getClass(o) {

	if (o === null || o === undefined) return "Object";
	return OP.toString.call(o).slice("[object ".length, -1);
}

// Generates class name/type name test functions
function classTest(c) { return function(o) { return getClass(o) === c; }; }
function typeTest(t) { return function(o) { return typeof o === t; }; }

// Tests whether a value is a function
function isFunction(o) { return typeof o === "function" && o.call && o.apply; }

// Tests whether a value is an object
function isObject(o) { return o && typeof o === "object"; }

// Returns true if the object has a key
function hasKey(o, k) { return HOP.call(o, k); }

// Enumerates over the set of keys defined on the object
function eachKey(o, fn, self) { return keys(o).forEach(fn, self); }

// Sets a collection of keys
function setKeys(o, p, p2)  {

	keys(p).forEach(function(k) { o[k] = p[k]; });
	
	if (p2) for (var i = 2; i < arguments.length; ++i)
		setKeys(o, arguments[i]);
	
	return o;
}

// Sets a collection of keys, if the property is not already set
function addKeys(o, p, p2) {

	keys(p).forEach(function(k) { if (o[k] === undefined) o[k] = p[k]; });
	
	if (p2) for (var i = 2; i < arguments.length; ++i)
		addKeys(o, arguments[i]);
	
	return o;
}

// Returns a unique private key
function uniqueKey() { return uidPrefix + (uid++); }

// Returns a Date object from a string
function parseDate(s) { return new Date(Date.parse(s)); }

// Prints a string to the "console"
function print(obj) {

	if (console && typeof console.log === "function")
		console.log(obj);
}

return {

	// Type checking
	isArray: Array.isArray,
	isObject: isObject,
	isBoolean: typeTest("boolean"),
	isRegExp: classTest("RegExp"),
	isNumber: typeTest("number"),
	isString: typeTest("string"),
	isFunction: isFunction,
	isDate: classTest("Date"),
	
	// Date functions
	parseDate: parseDate,
	
	// Dictionary functions
	hasKey: hasKey,
	eachKey: eachKey,
	uniqueKey: uniqueKey,
	setKeys: setKeys,
	addKeys: addKeys,
	
	print: print

};


};

__modules[6] = function(exports) {
"use strict";

var Class = __require(7);

var CAPTURING = 1,
	AT_TARGET = 2,
	BUBBLING = 3;

function add(type, handler, capture) {

	if (!isHandler(handler))
		throw new Error("Listener is not a function or EventListener object.");
	
	var a = list(this, type, capture), i = a.indexOf(handler);
	if (i === -1) a.push(handler);
}

function remove(type, handler, capture) {

	var a = list(this, type, capture), i = a.indexOf(handler);
	if (i !== -1) a.splice(i, 1);
}

function list(obj, type, capture) {

	var e = obj.eventListeners[type];
	if (!e) e = obj.eventListeners[type] = { capture: [], bubble: [] };
	
	return e[capture ? "capture" : "bubble"];
}

function isHandler(h) {

	return typeof h === "function" || h && typeof h.handleEvent === "function";
}

function fire(obj, type, evt, capture) {

	var a = list(obj, type, capture).slice(0), i, h;
	
	// Add property handler if defined
	if (typeof obj["on" + type] === "function")
		a.unshift(obj["on" + type]);
	
	for (i = 0; i < a.length; ++i) {
	
		h = a[i];
		
		if (h.handleEvent) h.handleEvent(evt);
		else h.call(obj, evt);
	}
}

function dispatch(evt) {

	var cancel = false,
		stop = false,
		action = evt.defaultAction,
		bubble = (typeof evt.bubbles === "boolean" ? evt.bubbles : true),
		path = [],
		i;
	
	evt.target = this;
	evt.timeStamp = Date.now();
	evt.preventDefault = function() { cancel = true; };
	evt.stopPropagation = function() { stop = true; };
	
	// Build event bubble path
	for (i = this.parentEventTarget; i; i = i.parentEventTarget)
		path.push(i);
	
	// Capture phase
	for (evt.eventPhase = CAPTURING, i = path.length; i-- && !stop;)
		fire(evt.currentTarget = path[i], evt.type, evt, true);
	
	if (!stop) {
	
		// At target phase
		evt.eventPhase = AT_TARGET;
		fire(evt.currentTarget = this, evt.type, evt, false);
		if (!bubble) stop = true;
	}
	
	// Bubble phase
	for (evt.eventPhase = BUBBLING, i = 0; i < path.length && !stop; ++i)
		fire(evt.currentTarget = path[i], evt.type, evt, false);
	
	// Call default action
	if (!(cancel && evt.cancelable) && typeof action === "function")
		action.call(evt.currentTarget = this, evt);
	
	// Return defaultPrevented
	return cancel;
}

var EventTarget = new Class({

	_new: function(parent) {
	
		this.eventListeners = {};
		this.parentEventTarget = parent || null;
	},
	
	// EventTarget interface
	addEventListener: add,
	removeEventListener: remove,
	dispatchEvent: dispatch,
	
	// Aliases
	on: add

});

return EventTarget;


};

__modules[7] = function(exports) {
"use strict";

var Lang = __require(5),
	setProps = Lang.setKeys;

// Returns a constructor function
function ctor(base) {
	
	return function() { base && base.apply(this, arguments); };
}

// Returns a static class factory
function create(fn) {

	return function() {
	
		var obj = Object.create(fn.prototype),
			ret = fn.apply(obj, arguments);
		
		if (ret && "object|function".indexOf(typeof ret) >= 0)
			return ret;
		
		return obj;
	};
}

// Creates a "class"
function createClass(def) {

	var base = def._extends || undefined,
		imports,
		proto,
		f;
	
	// Create prototype object
	proto = setProps(Object.create(base ? base.prototype : null), def);
	imports = proto._imports;
	
	// Copy prototype properties from imports
	if (imports) {
	
		if (!Array.isArray(imports))
			imports = [imports];
		
		imports.forEach(function(c) { setProps(proto, c.prototype); });
	}	
	
	// Create constructor if none provided
	f = def._new || ctor(base);
	
	// Add "static" properties to constructor
	if (def._static)
		setProps(f, def._static);

	// Remove "meta" properties
	delete proto._new;
	delete proto._static;
	delete proto._extends;
	delete proto._imports;
	
	// Set constructor's prototype
	proto.constructor = f;
	f.prototype = proto;
	
	// Add class static functions
	return Lang.addKeys(f, { create: create(f) });
}

return createClass;


};

__modules[8] = function(exports) {
"use strict";

var EventLoop = __require(9),
	identity = function(obj) { return obj; },
	freeze = Object.freeze || identity,
	queue = [],
	timer = 0,
	uid = 0,
	undefined;

// Long property names used for duck-typing
var ON_COMPLETE = "__onPromiseComplete",
	IS_REJECTION = "__isPromiseRejection";

var THROW_DELAY = 50;

// Returns a new promise identifier
function newID() { return uid++; }

// Enqueues a message
function dispatch(promise, args) {

	queue.push({ promise: promise, args: args });
	timer = timer || EventLoop.enqueue(flush);
}

// Flushes the message queue
function flush() {

	var msg, count;
	
	timer = 0;

	// Send each message in queue
	for (count = queue.length; count > 0; --count) {
	
		msg = queue.shift();
		msg.promise[ON_COMPLETE].apply(undefined, msg.args);
	}
}

// Returns a cycle error rejection
function cycleError() {

	return rejection("A promise cycle was detected.");
}

// Promise constructor
function Promise(onComplete, isRejection) {

	var me = this;
	
	this[ON_COMPLETE] = onComplete;
	this[IS_REJECTION] = !!isRejection;
	this.then = function(fn) { return when(me, fn); };
	
	freeze(this);
}

// Begins a deferred operation
function defer(onQueue) {

	var id = newID(),
		pending = [],
		throwable = true,
		resolved = null,
		promise;

	promise = new Promise(function(success, error, src) {
	
		var msg = [success, error, src || id];
		
		if (error && throwable)
			throwable = false;
		
		if (pending) {
		
			pending.push(msg);
			
			if (onQueue)
				onQueue(success, error);
		
		} else {
		
			// If a cycle is detected, convert resolution to a rejection
			if (src === id) {
			
				resolved = cycleError();
				maybeThrow();
			}
			
			dispatch(resolved, msg);
		}
	});
	
	return {
		promise: promise,
		resolve: resolve,
		reject: reject
	};
	
	// Resolves the promise
	function resolve(value) {
	
		var i, list;
	
		if (!pending)
			return;
		
		list = pending;
		pending = false;
		
		// Create promise from the resolved value
		resolved = toPromise(value);

		// Send internally queued messages to the resolved value
		for (i = 0; i < list.length; ++i)
			dispatch(resolved, list[i]);
		
		maybeThrow();
	}
	
	// Resolves the promise with a rejection
	function reject(error) {
	
		resolve(rejection(error));
	}
	
	// Throws an error if the promise is rejected and there
	// are no error handlers
	function maybeThrow() {
	
		if (!throwable || !isRejection(resolved))
			return;
		
		setTimeout(function() {
		
			var error = null;
			
			// Get the error value
			resolved[ON_COMPLETE](null, function(val) { error = val; });
			
			// Throw it
			if (error && throwable)
				throw error;
			
		}, THROW_DELAY);
	}
}

// Returns true if an object is a promise
function isPromise(obj) {

	return obj && obj[ON_COMPLETE];
}

// Returns true if a promise is a rejection
function isRejection(obj) {

	return obj && obj[IS_REJECTION] === true;
}

// Converts an object to a promise
function toPromise(obj) {

	if (isPromise(obj))
		return obj;
	
	// Wrap a value in a self-resolving promise
	return new Promise(function(success) { success && success(obj); });
}

// Creates a rejection Promise
function rejection(value) {

	// Convert falsey values to empty string
	value = value || "";
	
	// Convert strings to Error instances
	if (typeof value === "string")
		value = new Error(value);
	
	return new Promise(function(success, error) { error && error(value); }, true);
}

// Registers a callback for completion when a promise is resolved
function when(obj, onComplete) {

	var done = false, 
		d = defer(onQueue),
		f = toPromise(obj),
		onError = null;
	
	var resolve = function(value) { finish(value, onComplete); },
		reject = function(value) { finish(value, onError); };

	// Set default transform
	onComplete = onComplete || identity;
	
	// Wrap error handling transform
	if (onComplete.length > 1)
		onError = function(value) { return onComplete(undefined, value); };
	
	onQueue(onComplete, onError);
	
	return d.promise;
	
	function onQueue(success, error) {
	
		if (success && resolve) {
		
			dispatch(f, [ resolve, null ]);
			resolve = null;
		}
		
		if (error && reject) {
		
			dispatch(f, [ null, reject ]);
			reject = null;
		}
	}
	
	function finish(value, transform) {
	
		if (done) return;
		done = true;
		
		try { d.resolve((transform || rejection)(value)); }
		catch (ex) { d.reject(ex); }
	}
}

// Returns a promise for every resolved value in an array
function whenAll(list, onComplete) {

	var count = list.length,
		d = defer(),
		out = [],
		i;
	
	for (i = 0; i < list.length; ++i)
		waitFor(list[i], i);
	
	if (count === 0)
		d.resolve(out);
	
	return when(d.promise, onComplete);
	
	function waitFor(p, index) {
	
		when(p, function(val, err) {
		
			if (err) d.reject(err);
			else out[index] = val;
			
			if (--count === 0)
				d.resolve(out);
		});
	}
}

// Returns a promise for the first resolved value in an array
function whenAny(list, onComplete) {

	var d = defer(), i;
	
	for (i = 0; i < list.length; ++i)
		waitFor(list[i]);
	
	if (list.length === 0)
		throw new Error("List cannot be empty.");
	
	return when(d.promise, onComplete);
	
	function waitFor(p) {
	
		when(p, function(val, err) {
		
			if (err) d.reject(err);
			else d.resolve(val);
		});
	}
}

return {

	defer: function() { return defer(); },
	begin: function(fn) { return when(null, fn); },
	when: when,
	whenAll: whenAll,
	whenAny: whenAny

};


};

__modules[9] = function(exports) {
"use strict";

var Lang = __require(5),
	msg = Lang.uniqueKey(),
	process = this.process,
	window = this.window,
	msgChannel = null,
	list = [],
	enqueue;

if (process && typeof process.nextTick === "function") {

	// NodeJS
	enqueue = process.nextTick;
}
else if (window && window.addEventListener && window.postMessage) {

	// Modern Browsers
	if (window.MessageChannel) {
	
		msgChannel = new window.MessageChannel();
		msgChannel.port1.onmessage = onmsg;
	
	} else {
	
		window.addEventListener("message", onmsg, true);
	}
	
	enqueue = function(fn) {
	
		list.push(fn);
		
		if (msgChannel !== null)
			msgChannel.port2.postMessage(msg);
		else
			window.postMessage(msg, "*");
		
		return 1;
	};

} else {

	// Legacy
	enqueue = function(fn) { return setTimeout(fn, 0); };
}
	
function onmsg(evt) {

	if (msgChannel || (evt.source === window && evt.data === msg)) {
	
		evt.stopPropagation();
		if (list.length) list.shift()();
	}
}

return {
	enqueue: enqueue
};


};

__modules[10] = function(exports) {
"use strict";

var ITEM_DELIM = /\{\{?|\}\}?/g,
	PROP_DELIM = /[\.\[}]/g,
	INDEX = /^\d+$/;

return {
	format: format
};

function parseItem(text, pos, list) {

	var end, m;
	
	PROP_DELIM.lastIndex = pos;
	
	while (m = PROP_DELIM.exec(text)) {
	
		if (list.length === 0 || pos < m.index)
			list.push(propVal(text.slice(pos, m.index)));
	
		pos = m.index + 1;
		
		if (m[0] === "}")
			return pos;
		
		if (m[0] === "[") {
		
			end = text.indexOf("]", pos);
			
			if (end === -1)
				throw new Error("Invalid format item.");
			
			list.push(text.slice(pos, end));
			pos = PROP_DELIM.lastIndex = end + 1;
		}
	}
	
	throw new Error("Unterminated format item.");
}

function propVal(text) {

	text = text.trim();
	
	if (!text)
		throw new Error("Invalid property name in format expression.");
	
	return INDEX.test(text) ? parseInt(text, 10) : text;
}

function parse(text) {

	var list = [], pos = 0, m, a;
	
	ITEM_DELIM.lastIndex = 0;
	
	while (m = ITEM_DELIM.exec(text)) {
	
		// Add literal text
		if (pos < m.index)
			list.push(text.slice(pos, m.index));
		
		if (m[0] === "}")
			throw new Error("Invalid format item.");
		
		if (m[0].length > 1) {
		
			// Add "escaped" (doubled) curly brace
			list.push(m[0].charAt(0));
			pos = m.index + m[0].length;
		
		} else {
		
			// Add format item
			list.push(a = []);
			pos = ITEM_DELIM.lastIndex = parseItem(text, m.index + 1, a);
		}
	}
	
	// Add literal text
	if (pos < text.length)
		list.push(text.slice(pos));
	
	return list;
}

function format(fmt, arg) {

	var list = parse(fmt), 
		out = "",
		obj,
		i, 
		j,
		a;
	
	for (i = 0; i < list.length; ++i) {
	
		a = list[i];
		
		if (typeof a === "string") {
		
			out += a;
		
		} else {
		
			if (typeof a[0] === "string") {
			
				// Non-integer: interpret as a property of first arg
				obj = arg;
				j = 0;
			
			} else {
			
				// Integer: interpret as an argument index
				obj = arguments[a[0] + 1];
				j = 1;
			}
			
			for (; j < a.length; ++j)
				obj = obj[a[j]];
			
			out += obj;
		}
	}
	
	return out;
}


};

return __require(0, exports);

}

).call(this, null, {});
		
		var c;
		
		var count = this.FunctionExprCount.count;
		
		console.log(count);
		
		try { c = count(code); }
		catch (ee) { console.log('error '+ee.description); return; }
		console.log('---------- script '+element._href);
		console.log("Total Function Expressions*:" + c.total + " " + c.pctBTF.toFixed(2) + "% of "+c.all);
		console.log("Expression Functions**:" + c.expr + " " + c.pctExpr.toFixed(2) + "%");
		console.log("Expression Functions That Return an Object Literal:" + c.objLiteral + " " + c.pctObjLiteral.toFixed(2) + "%");
		console.log("Functions with a single statement: " + c.single + " " + c.pctSingle.toFixed(2) + "%");
		console.log("Block Functions:" + c.block + " " + c.pctBlock.toFixed(2) + "%");
		console.log("Object Literal Methods: " + c.methods + " " + c.pctMethods.toFixed(2) + "%");
		console.log("Object Literal Methods or BTF: " + (c.methods + c.total) + " " + c.pctMethodsOrBTF.toFixed(2) + "%" );
		
		return vm.createScript(code, filename).runInContext(element._document._parentNode);

    } catch(ee) {
		console.log('error script ------------------'+(element._href||'timeout or onload or eval')+' '+code.substr(0,100));
		element._document._queue_err.push(element);
		//console.log(code);
		//console.log(ee.description);
		//console.log((new Error(ee.description)).stack);
    }
};
