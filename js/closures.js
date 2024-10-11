
function hello(a){
    let sum =10;
    let result = sum+a;
    var child = (params)=> {
            return params;
    }
    return function finzlized(input){
        return result;
    }
}

hello(1);

/***
 * 
 *  f [nativereturn function finzlized(input){
        return result+input;
    }
 */


