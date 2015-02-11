// Constructor Function
var ToDo = function(args){

	this.status = 'open';
	this.name = name;
	this.checkOff = function(){
		this.status = 'closed';
	};
	this.unCheckOff = function(){
		this.status = 'open';
	};
	this.deleteItem = function(){
		this.status = 'deleted';
	}; 

};

// Array List of todos to push to
var todos = [];

// Declare Variables
var list = $('#list-items');

// Target Input Element and Add Item to todos array
$('#todo-form').on('submit', function(e){
	e.preventDefault();
	var item = new ToDo();
 	item.name = $('#submit').val();
	list.append('<li id=a' + todos.length + '>' + item.name + '</li');
	list.append('<span id=b' + todos.length + '>' + 'X' + '</span>')
	todos.push(item);
	this.reset();


});

// Toggle Click Complete Item
$('#list-items').on('click', 'li', function(){
	$(this).toggleClass('compl');

});

// Delete item from To Do List


