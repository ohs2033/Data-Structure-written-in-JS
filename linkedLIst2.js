function LinkedList(){
	this.head = null;
}

LinkedList.prototype.add = function(value){
	var node = {
		value : value,
		next :null
	}
	if(this.head===null){
		this.head = node;
	}else{
		var last = this.head;
		while(last.next){
			last = last.next
		}
		last.next = node;
	}
	node=undefined;	
}

LinkedList.prototype.remove = function(index){
	var last = this.head;
	var count = index;
	if(count===0){
		console.log("WHAT THE FUCK");
		this.head = last.next;
	}else if(count>0){
			while(count > 0 && last.next){
				if(last.next.next ===null || count===1) {
					last.next=last.next.next;
					count--;
				}else{
				last = last.next;
				count--;
				}
			}
	}else{
		if(last.next===null) this.head = null;
		else{
			while(last.next){
				if(last.next.next) last=last.next;
				else last.next = null;
			}
		}
	}
}

LinkedList.prototype.insert = function(value,index){

}

