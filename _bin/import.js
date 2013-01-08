#!/usr/bin/env node

/*
    Desired Command: `node import.js --lang=en`
    Read the contents of `_site` and specify the
    language type in the second argument.
    
    1. Loop through all od the files and write to 
    an array all of the strings matched within <h2> tags
    
    2. With the result of (1) strip out the tags and 
    write out to a json file to be used for search within 
    the site.
*/

var path = require('path');
var fs = require('fs');
var argv = require('optimist').argv;
var md = require('node-markdown').Markdown;
var dom = require('node-dom').dom;

var dir='../_posts/' + argv.lang + '/';
var data={};

fs.readdir(dir, function(err, files) {
    if (err) throw err;
    var c = 0;
    files.forEach(function(file){
        c++;
        fs.readFile(dir + file, 'utf-8',function(err, res) {
            if (err) throw err;
            // data[file] = response;
            if (0 === --c) {
                window = dom(md(res, true, 'h2|h3'));
                document.window = window;
                var h2 = document.getAttribute('h2');
                console.log(h2);
            }
        });
    });
});

// Lastly, print our object to JSON.
// JSON.stringify(data);