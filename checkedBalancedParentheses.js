var CheckForBalancedParentheses = function(string){
	var balance  = new Stack();
	for(var i =0; i <string.length; i ++){
		if(string[i]==='('||string[i]==='['||string[i]==='{') balance.push(string[i]);
		if(string[i]===')'||string[i]===']'||string[i]==='}'){
			if (balance.top1()===null) return false;
			else if(isPair(string[i],balance.top1())){
				 balance.pop();
			}
		}
	}	
	if (balance.top === null) return true;
	console.log(balance)
	return false;
}

function isPair(a,b){
	if(a===')'&&b==='(') return true;
	if(a==='}'&&b==='{') return true;
	if(a===']'&&b==='[') return true;
	return false;
}

//we need stack for this function

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
		this.size--;
	}
}
Stack.prototype.top1 = function(){
	return this.top? this.top.val:null;
}
Stack.prototype.isEmpty = function(){
	if(this.top){
		return false;
	}
	return true;
}


var a= new Stack();
a.push(3);
a.pop();
console.log(a.top1());

console.log(CheckForBalancedParentheses('{}'));
