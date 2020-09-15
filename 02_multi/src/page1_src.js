const hello = require('./hello.js');
const $=require('jquery');

$('#main').append(hello.sayHello());
