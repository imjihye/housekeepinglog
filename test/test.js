var assert = require('assert');

describe('array test', function(){
	describe('indexOf()', function(){
		it('if empty value, return -1', function(){
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});



describe('hooks test', function(){
	// before(function(){
	// });
	before('before1', () => console.log('before1'));
	after(function(){

	});
	beforeEach(function(){

	});
	afterEach(function(){

	});

	// test suit
	describe('test', function(){
		// unit test
		it('this is a test', function(){
			// logic

		});
	});
});

