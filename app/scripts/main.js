// Constructor Function
var ToDo = function(args){

	this.status = 'open';
	this.name = name;
	this.hidden = false;
	this.localId = _.random(1, 9999);
    this.toggleStatus = function () {
      if (this.status === 'open') {
        this.status = 'closed';
      } else {
        this.status = 'open';
      }
    };

	this.toggleDelete = function(){
		if (this.hidden === false){
			this.hidden = true;
			this.status = 'deleted';
		} else {
			this.hidden = false;
		}
	};
};

// Array List of todos to push to
var todos = [];

// Declare Variables
var list = $('#list-items');
var form = $('#todo-form');


// Target Input Element and Add Item to todos array
form.on('submit', function(e){
	e.preventDefault();
	var item = new ToDo();
 	item.name = $('#submit').val();
	list.append('<li id=" ' +  item.localId + ' ">'+ item.name + '<span>' + 'X' + '</span>' + '</li>');
	todos.push(item);
	this.reset();
	
});

// Toggle Open or Closed Item
list.on('click', 'li', function(event){
	event.preventDefault();
	$(this).toggleClass('compl');

	// Reflecting status in DOM
	var thisTask = event.target;
	var thisTaskID = Number(thisTask.id);
	var thisInstance = _.findWhere(todos, { localId: thisTaskID });
	thisInstance.toggleStatus();
});

// Delete item from To Do List
list.on('click', 'span', function(event){
	event.preventDefault();

	// Target
	var dltTask = $(event.target).parent();
	
	// Deletes Item from List
	$(dltTask).addClass('hidden');

	//Reflecting in DOM
	var dltTaskId = Number(dltTask[0].id);
	var taskInstance = _.findWhere(todos, { localId: dltTaskId });
	taskInstance.toggleDelete();

});


