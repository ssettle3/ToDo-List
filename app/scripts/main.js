var ToDo= function(args){

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

var todos = [];

