function Queue(){
	var SIZE = 101;
	this.list = new Array(101);
	this.head = -1;
	this.rear = -1;
}

Queue.prototype.enQueue = function(data){
	if(!this.list[(this.rear+1)%this.list.length]){
		if(this.head===-1){
			this.rear = (this.rear+1)%this.list.length;
			this.list[this.rear]=data;
			this.head = this.rear;
		}else{
			this.rear = (this.rear+1)%this.list.length;
			this.list[this.rear]=data;
		}
	}else{
		var arr = new Array(this.list.length);
		this.list.concat(arr);
		console.log('re-sizing queue...')
	}
}


Queue.prototype.deQueue = function(){
	if(this.head!==-1){
		if(this.head===this.rear){
			console.log('the instance is one.')
			this.list[this.head] = null;
			this.head = -1;
			this.rear = -1;
		}else{
			this.list[this.head] = null;
			this.head = (this.list.length + this.head +1)%this.list.length;
		}

	}
}

Queue.prototype.isEmpty = function(){
	if(this.head===-1) return true;
	return false;
}
Queue.prototype.front = function(){
	if(!this.isEmpty()) return this.list[this.head];
}

var a= new Queue();

for(var i =0 ; i<100; i++){
	a.enQueue(i*3)
}
for(var i =0 ; i<99; i++){
	 a.deQueue();
}
a.enQueue('k');
a.enQueue('k');
a.deQueue();
console.log(a);