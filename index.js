function receivesAFunction (callback) {
    return callback();
  }
  
function returnsANamedFunction(){
    return function namedDC(){

    };
}
function returnsAnAnonymousFunction(){
    
    return function(){

    };
}