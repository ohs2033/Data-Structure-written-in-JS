function Stack(){
	this.top = null;
	this.size = 0;
}

function StackNode(data){
	this.val = data;
	this.next = null;
}


Stack.prototype.push= function(data){
	var node = new StackNode(data);
	if(this.top){
		node.next = this.top;
		this.top = node;
	}else{
		this.top = node;
		this.size++;
	}
}

Stack.prototype.pop = function(){
	if(!this.isEmpty()){
		this.top = this.top.next;
	}
}

Stack.prototype.top1 = function(){
	return this.top;
}

Stack.prototype.isEmpty = function(){
	if(this.top){
		return false;
	}
	return true;
}

var st = new Stack();
console.log(st);
console.log(st.isEmpty());
st.push(1)
st.push(2);
console.log(st);
console.log(st.top1());
console.log(st.isEmpty());

