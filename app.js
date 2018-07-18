
let theBrothers = require('./people.js');
let $ = require('jquery');
require('./style.css')

$.each(theBrothers, (key, value) => {

  $('body').append( '<h1>'+ (key+1) + ". " + theBrothers[key].name+'</h1>');

})

console.log(theBrothers);
