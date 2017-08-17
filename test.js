'use strict'
function main(arr){
    var resArr = [];
    arr.forEach(function(elem){
        resArr.push(Math.pow(elem,2));
    })
    console.log("origin data:" + arr +"\nResult:" + resArr);
}
var arr = [5,3,7,1];
main(arr);