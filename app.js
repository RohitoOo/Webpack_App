
let theBrothers = require('./people.js');
let $ = require('jquery');

$('body').append('<h1>'+ theBrothers[0].name+'</h1>');

console.log(theBrothers);
