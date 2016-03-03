function LinkedList(newValue){
	this.val= newValue||undefined;
	this.nextNode;
}

LinkedList.prototype.add=function(newValue){
	if(newValue===undefined) throw new Error("no input value.")
	else{	
		if(this.val){
			if(this.nextNode){
				this.nextNode.add(newValue);
			}else{
				this.nextNode = new LinkedList(newValue);
			}

		}else{
			this.val = newValue;
		}
	}
}


var a = new LinkedList(3);
console.log(a);
a.add(4);
console.log(a);
a.add(5);
console.log(a);
a.add(6);

