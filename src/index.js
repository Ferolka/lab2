console.log('Hello!');
console.log(`The time is ${new Date()}`);
import './scss/main.scss';



console.log(`The time is ${new Date()}`);

require('./modules/hello')('NIT');
var _foo = require('./modules/hello');
_foo('user1');
_foo('user2');

// import 'bootstrap';	// with JS!!
// import 'bootstrap/dist/css/bootstrap.min.css';	// only minified CSS

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

let _productBag = require('./modules/_productInBag');
let _productBig = require('./modules/productBig');
let _makeProduct = require('./modules/product-html');
var products = [];
jQuery.ajax({
	url: 'https://nit.tron.net.ua/api/product/list',
	method: 'get',
	dataType: 'json',
	success: function(json){
		console.log('Loaded via AJAX!');
		// console.log(json);
		console.table(json);
        json.forEach(product => $('.choosen').append(_productBag(product)));
		json.forEach(product => $('.product-grid').append(_makeProduct(product)));
        json.forEach(product => $('.single').append(_productBig(product)));
		console.log('Added to grid');

        // $.each(json, function(id){
        //     products.push('<li id="' + id + '">' + id + '</li>');
        // });
        // for (var i = 0; i < products.length; i++) {
        //     var counter = products[i];
        //     console.log(counter);
        // }

	},
	error: function(xhr){
		alert("An error occured: " + xhr.status + " " + xhr.statusText);
	},
});


