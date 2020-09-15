const Hello = require('./hello.js');
const $=require('jquery');

const hello = new Hello('neko');
$('body').append(hello.sayHello());
