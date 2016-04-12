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


//2. binary Search Tree.
//
//



function BstNode(data){
	this.val = data;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
	this.root = null;

} 

BinarySearchTree.prototype.insert = function(data){
	var node = new BstNode(data); 
	var tree = this;
	if(!tree.root) tree.root = node;
	else{
		var current = tree.root;
	}
}

BinarySearchTree.prototype.insertRecursive = function(data){
	var node = new BstNode(data);
	if(!this.root) {
		this.root = node; 
		return;
	}

	var recursiveInsert = function(current){
		if(current.val<data){
			if(current.right===null){
				current.right = node;
			}else{
				recursiveInsert(current.right);
			}
		}else{
			if(current.left===null){
				current.left = node;
			}else{
				recursiveInsert(current.left);
			}

		}
	}
	recursiveInsert(this.root);
}

BinarySearchTree.prototype.search = function(data){
	var current = this.root;
	var num = 0;
	while(current){
		if(current.val === data) return [current.val,num];
		if(current.val>data) current = current.left;
		else current = current.right;
		num++;
	}
	return false;

}


BinarySearchTree.prototype.print = function(){
	var line = '';
	if(!this.root) return;
	function print1(current){
			if(current.right!==null&&current.left!==null){
				print1(current.right);
				print1(current.left);
			}else if(current.right!==null){
				print1(current.right);
			}else if(current.left!==null){
				print1(current.left);
			}
			if(current.right===null&&current.left===null){
				console.log('i\'m leaf.');
			}
			console.log(current.val);
			return;
	}
	print1(this.root);

}


BinarySearchTree.prototype.findHeight = function(){
	var root = this.root;
	function recursiveHeight (node) {
		if(node===null) return -1;
		return Math.max(recursiveHeight(node.left),recursiveHeight(node.right))+1;
	}
	return recursiveHeight(root);
}


BinarySearchTree.prototype.levelSearch = function(){
	var Q = new Queue();
	// function recursiveLevelSearch(node){
	Q.push(this.root);
	while(Q.head){
		 var current = Q.pop();
		 console.log('current is ' +current.val);
		 if(current.left) Q.push(current.left);
			if(current.right) Q.push(current.right)
	}
	// }
	// recursiveLevelSearch(this.root);
}





var a = new BinarySearchTree();
for(var i = 1; i<50;i++){
	a.insertRecursive(30+2*i);
	a.insertRecursive(30-i);
	a.insertRecursive(30+i);
}

a.levelSearch();



