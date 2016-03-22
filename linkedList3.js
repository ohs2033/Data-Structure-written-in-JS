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

LinkedList.prototype.reverseByIteation=function(){
 	var current;
 	var temp = this.head;
 	this.head= null;
 	while(temp){
 		current = temp;
 		temp = current.next
 		current.next = this.head;
 		this.head = current;
 	}
}
 LinkedList.prototype.reverseByRecursion = function(){
 	var current = this.head;
 	var before = this.head;
 	var list = this;
 	function reverse(node,nodeBefore){
 		if(node===nodeBefore){
 			reverse(node.next,nodeBefore);
 			node.next=null;
 		}else{
	 		if(node.next){
	 			reverse(node.next,nodeBefore.next);
	 		}else{
	 			list.head=node;
	 		}
	 	node.next = nodeBefore;
 		}
 	}
 	reverse(current,before); 
 }
	
LinkedList.prototype.print=function(){
	console.log('-----start-----')
	var current = this.head;
	var number = this.numberOfValues
	while(current){
		if(current===this.head)
		{ console.log('head is : ' + current.val)
		}else{
		console.log(number+'th value is ' + current.val)	
		}
		number--;
		current=current.next
	}
	console.log('------end------');
}

LinkedList.prototype.reversePrint=function(){
	var current = this.head;
	function recursivePrint(node){
		if(node.next) recursivePrint(node.next);
		console.log(node.val);
	}
	recursivePrint(current);
}



var a = new LinkedList();
var b = new LinkedList();
var c = new LinkedList();
a.add(1);
a.add(2);
a.add(3);
a.add(4);
a.add(5);
a.reversePrint();

a.print();
for(var i =6; i<100;i++){
	a.add(i);
}
a.reverseByRecursion();
b.add(1);
a.print();
b.reverseByIteation();
c.reverseByIteation();
