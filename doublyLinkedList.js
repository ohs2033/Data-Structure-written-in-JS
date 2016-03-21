function Node(data){
	this.previous = null;
	this.val = data;
	this.next = null;
}

function DoublyLinkedList(){
	this.head = null;
	this.numberOfValues=0;
}

DoublyLinkedList.prototype.add = function(data){
	var node = new Node(data);
	this.numberOfValues++;
	if(this.head===null) {
		this.head = node;
		return ;
	}
	var current = this.head;
	while(current.next){
		current= current.next;
	}
	current.next = node;
	node.previous = current;

}
DoublyLinkedList.prototype.remove = function(data){
	var current = this.head;
	if(current){
		while(current){
			if(current.val===data){
				if(current.previous){
					current.previous.next = current.next //when current is not head.
				}else{
					this.head = current.next;
				}
				if(current.next){
					current.next.previous = current.previous;
				}
				this.numberOfValues--;

			}
		current=current.next
		}
	}

}
DoublyLinkedList.prototype.insertAfter = function(nth,data){
	var number = nth-1;
	var current = this.head;
	if(this.head===null) {
			this.head = new Node(data);
			return ;
		}

	try{
		
		if(number>this.numberOfValues) throw new Error(' number is bigger than list size.')
	}catch(e){
			console.log(e);
			return;
	}
	while(number>0&&current.next){
		current = current.next;
		number--;
	}
	var node = new Node(data);
	node.next = current.next;
	current.next = node;
	node.previous = current;
}
DoublyLinkedList.prototype.print = function(){
	var current = this.head;
	var prev;
	var next;
	console.log('doubly linked list with ' + this.numberOfValues + ' nodes')
	while(current){
		prev = current.previous? current.previous.val : 'head'
		next = current.next? current.next.val: current.next
		console.log('previous: '+prev+ ' this: '+current.val + ' next :'+ next);
		current=current.next;
	}
}

var a = new DoublyLinkedList();
a.add(3)
a.add(4)
a.add(5)
a.add('k');
a.print(4);
a.remove(3)
a.print();
a.insertAfter(1,'f');
a.print();

