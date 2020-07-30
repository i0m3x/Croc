function add(x,y){
  return x+y
  
}

function sub (x,y){
  return x-y
}

function mul (x,y){
  return x * y
}

function identity (x){
  return x
}

function identityf(x){
  return function(){
    return x
  }
}

function addf(x){
  return function (y){
  return x +y
  }
}
 //a beautiful and simple way to throw four functions onto a line
const liftf = fn => x => y => fn(x,y)

function curry(fn, x){ //params: binary func + arg
  return liftf(fn)(x) //return func that can take a second arg
// now at 34 specs, 26 failures
}

// const curry = (fn, x) => liftf => fn(x,y) does not work
function twice (fn) {
  return function (x) {
    return fn(x,x)
  }
}