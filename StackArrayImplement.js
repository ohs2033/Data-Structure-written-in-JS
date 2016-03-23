// we are gonna implement Stack with javascript array.
// we assume that javascript array is equals datastructure array.
function Stack(){
	var maxSize = 101;
	this.top = -1;
	this.arr = new Array(maxSize);

}

Stack.prototype.push= function(data){
	if(this.top === this.arr.length-1){
		console.log('Stack is getting bigger...')
		var newArr = new Array(this.arr.length)
		this.arr= this.arr.concat(newArr);
	}
	this.arr[++this.top] = data;
}

Stack.prototype.pop= function(){
	if(this.top===-1){
		return;
	}else{
		this.arr[this.top] = undefined;
		this.top--;
	}

}

Stack.prototype.topUp = function(){
		if(this.top===-1){
		return;
	}else{
		return this.arr[this.top] ;
	}

}

Stack.prototype.isEmpty = function(){
	if(this.top ===-1) return true;
	return false;

}

Stack.prototype.print = function(){

	for(var i =0; i<=this.top;i++){
		console.log( i +'th value is : '+this.arr[i]+' and maximum size is ' + this.arr.length);
	}
}



var a = new Stack();
console.log(a.arr.length)
for(var i =0; i<300;i++){
 console.log('Stack size is : '+a.arr.length + "  "+ a.top +'th value is '+ a.arr[a.top])
 a.push(2*i+3);
}
