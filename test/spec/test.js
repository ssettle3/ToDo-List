/* global describe, it */

(function () {
  'use strict';

  describe('About My To-Do List', function () {

  	beforeEach(function(){
  		window.item = new ToDo ();
  	});
    
    describe('Ability to Create Items', function () {
      
      it('Should create instanceof To-Do', function () {
      	expect(item instanceof ToDo).to.equal(true);
      });
      
      it('Should be listed as open', function(){
      	expect(item.status).to.be.equal('open');
      });

      it ('Should have a name', function(){
      	expect(item.name).to.be.equal(item.name);
      	item.name = 'setName';
      	expect(item.name).to.be.equal('setName');
      });
    });

    describe('Ability to Check Complete Items', function (){
    	it('Should be able to get completed', function(){
    		item.checkOff();
    		expect(item.status).to.be.equal('closed');
    	});

    	it('Should be able to Un-Check Items', function(){
    		item.unCheckOff();
    		expect(item.status).to.be.equal('open');
    	});    	
    });

    describe('Ability to Delete Items', function (){
    	it('Should be able to be deleted', function (){
    		item.deleteItem();
    		expect(item.status).to.be.equal('deleted');
    	});
    });

  });

})();
