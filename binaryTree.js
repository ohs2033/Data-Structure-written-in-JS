//1. binary tree implementation using Array.
//2. specification
//2-1. dynamically created nodes.
//2-2. it have to be complete node.(filled from the left.)

function BinaryTree(){
//1. array size = 101;
//2. push node value from the top, and from the left.
//3. first node of every line is 2^(n-1)-1
	var MAX_SIZE = 101;
	this.array = new Array(MAX_SIZE);

}

BinaryTree.prototype.push = function(data){
	for(var i =0;i<this.array.length;i++){
		if(this.array[i]===undefined){
			this.array[i] = data;
			return;
		}
	}
}

BinaryTree.prototype.findDepth = function(index){
	return this.findLevel(index);
}

BinaryTree.prototype.findHeight= function(index){
	return this.findLevel()-this.findLevel(index);
	//level of tree - level of this node 

}

BinaryTree.prototype.findLevel = function(index){
	if(index===undefined){
		for (var i =0; i<this.array.length;i++){
			if(this.array[i]===undefined){
				index = this.array[i-1];
				break;
			}
		}
	}
	if(index===undefined) return -1;
	for(var i = 0 ;;i++){
		if(index>=Math.pow(2,i)-1 &&index<Math.pow(2,i+1)-1)
		return i;
	}
}
BinaryTree.prototype.findChildren= function(index){
	var level = this.findLevel(index);
	var thisLevelNodeNumber = index-(Math.pow(2,level)-2);
	var mod = thisLevelNodeNumber%(Math.pow(2,level));
	var childrenIndex1 = Math.pow(2,level+1)-2 + mod*2 - 1;
	var childrenindex2 = childrenIndex1 + 1;

	return [this.array[childrenIndex1],this.array[childrenindex2]]

}
BinaryTree.prototype.print = function(index){
	var level = this.findLevel();
	var eachLine = '';
	for(var i =0;i<=level;i++){
		eachLine = 'new Level : ';
		for(var k=0; k <(Math.pow(2,level)-Math.pow(2,i))/2;k++){
			eachLine += '  ';
		}
		for(var j=0; j <= Math.pow(2,level);j++){
			if(j>=Math.pow(2,i)-1&&j<Math.pow(2,i+1)-1){
				if(j.toString().length===1) eachLine += ' ';
				eachLine += this.array[j]+ ' ' ;
			}
		}
		for(var k=0; k <=(Math.pow(2,level)-Math.pow(2,i))/2;k++){
			eachLine += ' ';
		}
		console.log(eachLine);

	}
}
var a = new BinaryTree();
for(var i =0; i<50;i++){
	a.push(i);
}
console.log(a)
console.log(a.findLevel());
console.log(a.findHeight(12));
console.log(a.findChildren(12));
a.print();