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
// function twice (fn) {
//   return function (x) {
//     return fn(x,x)
//   }
// }
// try using lambda!

const twice = fn => x => fn(x,x)

// function reverse(fn){
//   // find last index in array -1 index
//   fn(x,x)
//   return reverse(fn)
// } above is incorrect

const reverse = fn => (x,y) => fn(y,x)
// equivalent below
// function reverse(fn){
//   return function (x,y){
//   return fn (y,x)
//   }
// }

// function composeu(f, g){
  
//   function x {
//     return g(f(x))
//   }
// }
const composeu = (f,g) => x => g(f(x))



function composeb(a,b){
  return function (a,b,c){
    return g(f(a,b), c)
  }

}

// firing off multiple payments

// TEST CASE
// const mulLimited = limit(mul, 3)
// mulLimited(3,4)

// function limit (fn, n){
//   // take adv of a var you can declare outside
//   let count = 0

//   return function (x, y){
//     if (count < n){fw
//       return fn

//     }else {
//       return undefined
//     }
//     // return a binary

//     // restrict it from executing fn n number of times
//   }
// }

// const limit = (add, b) => x if(b<x)
// instructor's solution
function limit (fn,n){
  let count = 0

  return function(x,y){
    if(count < n){
      count++
      return fn(x,y)
    }
    return undefined
  }
}