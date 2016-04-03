function recursiveFebo(n){
	if( n===1 || n===2) return 1;
	else{
		return recursiveFebo(n-1) + recursiveFebo(n-2);
	}
}


var cache = [0,1,1];


function dynamicFebo(n){	
	if(cache[n]!==undefined) {
		return cache[n]
	}else{
	var answer = dynamicFebo(n-1) + dynamicFebo(n-2)
	cache[n] = answer;
	return answer
	}
}



	//console.log(recursiveFebo(50));




	console.log(dynamicFebo(50));
