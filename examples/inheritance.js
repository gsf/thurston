var validator = function() {
    var rules = [], my = {};

    my.addRule = function(rule) {
        rules.push(rule);
    };

    my.validate = function(instance) {
        ...
    };

    return my;
};

// specificValidator.js
var validator = require('...').validator;

var specificValidator = function() {
    var my = validator();

    my.filter = function(instance) {
        ...
    };
    
    return my;
};

// client.js
var validator = specificValidator();

// Calls function on derived object
validator.filter( { ... } );

// Calls function on base object
validator.validate( { ... } );
