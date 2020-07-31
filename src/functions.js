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

// generate

// what does 'from' return?

// VS

// what does 'index' return?

// what is index?

// index is a function to increment the counter


// function from(start){
//   count = 0
//   for(let i =0; i<start.length-1 ; i++)
//   return i
// }

// function from(start){
//   return function (){ // think about signature of the function

//   }
// }

function from(start) {
  return function(){
    return start++
  }
}

// const g = to(from(5), 10)

// function from(start){
//   let counter = -1
//   return function(){
//     counter++
//     return start + counter
//   }
// }

//should take a generator and an end value, and return a generator that will produce numbers up to that limit
function to(generator, endVal){
  return function () {
    let count = generator()

    if(count < endVal){
      return count
    }
  }
}

// const to = (gen, end) => () => {
//   const x = gen()
// }

//should return a generator that will produce values in a range
const fromTo = (start, end){
  let counter = -1 //gotta increment up
  return function () { //now operate!
    counter++ // incrementwihtout for loop
    if(start + counter < end){
      return start + counter //simple addition
    }
  }

}
//should take an array and a generator and return a generator that will produce elements from the array
//second argument should be optional. If a generator is not provided, then each of the elements of the array will be produced
function element(arr, gen){
  if(gen){
    return() => arr[gen()]
  }else{
    let counter = -1
    return function (){
      counter++
      return arr[counter]
    }
  }

}

//"should take a generator and an array, and return a function that will collect the results in the array.", function() {
  
function collect(gen, array){ //should take a generator and an array
  return function () { 
    let index = gen()
    if(index != undefined){
      array.push(index)
      return index
    }
  }
}
