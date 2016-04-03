var calculateMinimumHP = function(dg) {

    [

// var m=dg.length - 1;
// var n=dg[0].length - 1;
// var cache = new Array(m);
// for(var i =0; i<=m;i++){
//     cache[i] = new Array(n+1);
// }
// for(var i =0; i<=m;i++){
//     for(var k =0 ; k<=m;k++){
//     cache[i][k] =[];    
//     }
// }
// for(var k =0 ; k<=m;k++){
//     console.log(cache[k])    
// }

//  function ar ( a,b){


//     if(a===0&&b===0) cache[a][b]
 }

// console.log(cache);
//     function energy(m,n,sum){
//         cache[m,n] = 
//     }
   /* function energySum (m,n,sum){
        sum += dg[m][n];
        if(dg[m+1]!==undefined) energySum(m+1,n,sum);
        if(dg[m][n+1]!==undefined) energySum(m,n+1,sum);
        else if(dg[m+1]===undefined) energy.push(sum);
    }
    energySum(0,0,0);
    energy.sort(function(a,b){
        if(a>0) return 1;
        if(b>0) return -1;
        if(a<0&&b<0){
            if(a<b) return 1;
        }
    });
    return energy[0]*(-1)+1;*/

};


var dg = [
        [-2,-3,3],
        [-5,-10,1],
        [10,30,-5]
    ];
    
console.log(calculateMinimumHP(dg));