---
title: Currying in Javascript
lang: en-US
date: 2030-12-29 12:00:00
excerpt: Some example implementations of curried functions in javascript
type: post
blog: true
tags:
    - JavaScript
meta:
  - name: description
    content: Some example implementations of curried functions in javascript
  - name: keywords
    content: currying
---
https://codepen.io/heliocrat/pen/wyjXPo
https://codepen.io/heliocrat/pen/veKQqb?editors=1010


```js
// strict curry
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function nest(N, args) {
    return (x) => {
      if (N - 1 === 0) {
        return fn(...args, x);
      }

      return nest(N - 1, [...args, x]);
    };
  }

  return nest(fn.length, []);
}


// variadic curry
function curry(fn) {
  function nest(N, args) {
    return (...xs) => {
      if (xs.length === 0) {
        throw Error('EMPTY INVOCATION');
      }

      if (N - xs.length <= 0) {
        return fn(...args, ...xs);
      }

      return nest(N - xs.length, [...args, ...xs]);
    };
  }

  return nest(fn.length, []);
}


// parial application
function curry(fn) {
  return (...xs) => {
    if (xs.length === 0) {
      throw Error('EMPTY INVOCATION');
    }

    if (xs.length >= fn.length) {
      return fn(...xs);
    }

    return curry(fn.bind(null, ...xs));
  };
}

const sum3 = curry((x, y, z) => x + y + z);
console.log(
  sum3(1, 2, 3),
  sum3(1, 2)(3),
  sum3(1)(2, 3),
  sum3(1)(2)(3),
);



///////////////
function add(a, b){
  return a + b;
}
var curryAdd = curry(add);

var add5 = curryAdd(5);

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function(a) {
        return curried(...[...args, a]);
      };
    }
  };
}

console.log(add5(1));
console.log(add5(3));
console.log(add5(5));
console.log(curryAdd(6,12));

///////////

//default currying with arrow functions
var fn = x => y => x + y;
var n = fn(3)
console.log(n(4))

/////////////////////////////////////
// Partial Application or Currying //
/////////////////////////////////////

function add(x, y) {
  return x + y
}

function partiallyApply(fn, x) {
  return function(y) {
    return fn(x, y)
  }
}

const add5 = partiallyApply(add, 5)
console.log(add5(2))

function addThrice(x, y, z) {
  return x + y + z;
}

function curryAnyArity( fn, ...first) {
    return function (...second) {
        return fn(...first, ...second);
    }
}

const addAnyArity = curryAnyArity(addThrice, 2)
console.log(addAnyArity(3));


fetch('https://en.wikipedia.org/w/api.php?action=opensearch&search=capybara&format=json').then(r=>r.json()).then(d => console.log(d))
fetch('https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Pet_door&prop=wikitext&formatversion=2').then(r=>r.json()).then(d => console.log(d))
```