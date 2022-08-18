function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log(namedFunction);
    };
}
function returnsAnAnonymousFunction(){
    return function () {
        return 0; 
    }
}