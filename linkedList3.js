function LinkedList(){
	this.head = null;
	this.numberOfValues = 0;
}
function Node(data){
	this.val = data;
	this.next = null;
}


LinkedList.prototype.add = function(data){
	var lastNode;
	if(this.head){
		lastNode=this.head
		while(lastNode.next){
			lastNode=lastNode.next
		}
		lastNode.next= new Node(data);
	}else{
		this.head = new Node(data);
	}
	this.numberOfValues++;
	delete lastNode;

}

LinkedList.prototype.remove=function(data){
	var current=this.head;
	var previous=this.head;
	if(this.head===null) return;
	do{	
		if(current.val===data){
			this.numberOfValues--;
			if(current===this.head){
				this.head = this.head.next
				return;
			}else{
				previous.next = current.next
				return;
			}
		}
		previous=current;
		current=current.next
	}while(current)
}

LinkedList.prototype.insertAfter=function(data, toNodeData){
	if(this.head===null) this.head = new Node(data);
	var insertAfter= this.head;
	var insertNext=this.head;
	while(insertNext){
		insertNext=insertNext.next;
		if(insertAfter.val===toNodeData){
			insertAfter.next= new Node(data);
			insertAfter.next.next = insertNext;
		this.numberOfValues++;
		}
	insertAfter=insertNext;
	}
}




var a = new LinkedList();
a.add(3);
a.add(4);
a.add(5);
console.log(a);
a.remove(4);
a.insertAfter(5);
console.log(a);