// Constructor Function
var ToDo = function(args){

	this.status = 'open';
	this.name = name;
	this.localId = _.random(1, 9999);
    this.toggleStatus = function () {
      if (this.status === 'open') {
        this.status = 'closed';
      } else {
        this.status = 'open';
      }
    }
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
	list.append('<li id=" ' +  item.localId + ' ">'+ item.name + '</li');
	list.append('<span>' + 'X' + '</span>')
	todos.push(item);
	this.reset();


});

// Toggle Click Complete Item
$('#list-items').on('click', 'li', function(event){
	event.preventDefault();
	$(this).toggleClass('compl');

	var thisTask = event.target;
	var thisTaskID = Number(thisTask.id);
	var thisInstance = _.findWhere(todos, { localId: thisTaskID });

	thisInstance.toggleStatus();
});

// Delete item from To Do List
$('#list-items').on('click', 'span', function(){
	$('li').addClass('hidden');
	$('span').addClass('hidden');
});


