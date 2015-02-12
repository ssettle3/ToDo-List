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
var total = $('.total');
var complete = $('.complete');
var incomplete = $('.incomplete');


// Adding Todos
form.on('submit', function(e){
	e.preventDefault();
	var item = new ToDo();
 	item.name = $('#submit').val();
	
	// Append Todo to Page
	list.append('<li id=" ' +  item.localId + ' ">'+ item.name + '<span>' + 'X' + '</span>' + '</li>');
	
	// Push Item to Array
	todos.push(item);
	
	// Reset Form
	this.reset();
	
	// Track All ToDos except for Deleted Todos
	var totItem = todos.filter(function(status){
		return item.hidden === false;
	});

	// Apply to Total And to Incomplete Count
	total.empty().append(totItem.length);
	incomplete.empty().append(totItem.length);

});

// Toggle Open or Closed Todos
list.on('click', 'li', function(event){
	event.preventDefault();
	$(this).toggleClass('compl');

	// Reflecting status in DOM
	var thisTask = event.target;
	var thisTaskID = Number(thisTask.id);
	var thisInstance = _.findWhere(todos, { localId: thisTaskID });
	thisInstance.toggleStatus();

	// Track Incomplete Todos
	var inComp = todos.filter(function(item){
		return item.status === 'open';
	});
	incomplete.empty().append(inComp.length);

	// Track Completed Todos
	var comp = todos.filter(function(item){
		return item.status === 'closed';
	});
	complete.empty().append(comp.length);


});

// Delete Todo from To Do List
list.on('click', 'span', function(event){
	event.preventDefault();

	// Target
	var dltTask = $(event.target).parent();
	
	// Deletes Todo from List
	$(dltTask).addClass('hidden');

	//Reflecting in DOM
	var dltTaskId = Number(dltTask[0].id);
	var taskInstance = _.findWhere(todos, { localId: dltTaskId });
	taskInstance.toggleDelete();

	//Take Deleted Todos Off The Count
	var deleted = todos.filter(function(item){
		return item.hidden === false;
	});
	total.empty().append(deleted.length);
	incomplete.empty().append(deleted.length);
});


