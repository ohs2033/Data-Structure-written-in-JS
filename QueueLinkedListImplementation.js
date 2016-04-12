//1.Queue Push,pop,print.

function Queue(){
	this.head = null;
	this.rear = null;
}

function QueueNode(data) {
	this.val = data;
	this.next= null;
}

Queue.prototype.push = function (data){
	var node = new QueueNode(data);
	var current = this.head;
	if(!current){
		this.head = node;
		this.rear = node;
	}else{
		this.rear.next = node;
		this.rear = node;
	}

}

Queue.prototype.pop = function() {
	var returnValue;
	if(!this.head) return;
	returnValue =  this.head.val;
	this.head = this.head.next;
	return returnValue;
}

Queue.prototype.isEmpty = function () {
	if(!this.head) return true;
	return false;
}

Queue.prototype.front = function() {
	if(this.head) return this.head.val;
	return;

}
Queue.prototype.print = function(){
	var current = this.head;
	while(current){
		if(this.head===current)
			console.log('head: '+ current.val);
		else if(this.rear===current)
			console.log('rear: '+ current.val);
		else 
			console.log(current.val);
		
			current= current.next;
	}
}

