---
title: Arity Polymorphism in Javascript Functions
lang: en-US
date: 2030-12-29 12:00:00
excerpt: An example of ad-hoc polymorphic functions in JS
type: post
blog: true
tags:
    - Functional
    - JavaScript
    - TypeScript
meta:
  - name: description
    content: stuff
  - name: keywords
    content: things
---


#### Jamie Vaughn, Date

Ad-hoc polymorphism is one term used to describe functions that execute different logic depending on the arity, or the number of parameters passed to it. It is also called a variable-arity function. Sometimes it is called function-overloading, mostly by detractors of this pattern. But this is a feature in many languages, especially functional paradigm languages, like Elixir and Scheme and even Python supports it.

While Javascript does not have this as a first-class capability, I'll demonstrate how to work within Javascript's constraints to creat an ad-hoc polymorphic function.

## Example Use Case
Let's imagine we want to implement a function that logs client events for us, but we want it to be able to log a simple message or a message with a priority rating or log to our server, depending on how many arguments are provided. We could define three different functions to accomplish this, and there isn't anything necessarily wrong with that. 

However, encapsulating all of this logging functionality inside one function also makes sense since it is all related behavior. It should improve maintainability by keeping the definition of all logging behavior co-located. This way one fix automatically propogates to all invocations within the app. Let's take a look at what our ad-hoc polymorphic function (we'll call it `polyLog`) might look like:

```js
// We have some library/service that logs to a server via API call
const serverObj = {
	log: (msg) => Server.log(msg + ' ...Logged to Server API.')
}

// here is our ad-hoc polymorphic function
function polyLog (msg, priority, dest) {
  return [
    () => console.log(msg),
    () => console.log(`[${priority}] ${msg}`),
    () => dest.log(`[${priority}] ${msg}`),
  ][arguments.length - 1]()
}

// you can call it 3 ways for 3 different results
polyLog('msg')
polyLog('msg', 5)
polyLog('msg', 5, serverObj)
```
So you can see we've leveraged a Javascript array and the fact that the number of parameters passed to a function is exposed via the `arguments` keyword within the function body. The number of arguments is accessed with `arguments.length - 1` and used to access the index of the array that contains the associated sub-function. The order of the sub-functions in the array must be carefully chosen to correspond with the arguments they need. That part is up the developer to ensure.

The above is the crux of the story and accomplishes our goal of ad-hoc polymorphism, but let's see if we can clean up or improve this code at all.

# Some Refactoring
The first way we can improve this basic idea somewhat is to use function expressions instead of defining the functions inside the returned array. So lets define our logging functions above our `polyLog` function like so:
```js
const simpleLog = (msg) => console.log(msg)
const priorityLog = (msg, priority) => console.log(`[${priority}] ${msg}`)
const serverLog = (msg, priority, dest) => dest.log(`[${priority}] ${msg}`)
```
You'll notice one other change to the sub-functions: We are passing the parameters through now, since they won't be available from the parent scope anymore.

We can also make a small memory optimization by defining our array of functions externally and referencing it in our Polymorphic `polyLog` function:
```js

// this external array becomes our function-arity map
const polymorphs =  [simpleLog, priorityLog, serverLog] 

// Now 
const polyLog = function(msg, priority, dest) {
  return polymorphs[arguments.length - 1](msg, priority, dest)
}

```
So now the array of sub-functions is defined once instead of each time `polyLog` is invoked, which saves on memory.

## Arrow Functions

It's important to note, this technique cannot work with arrow functions as they do not contain a reference to `arguments` in their function body. However, there is a hacky workaround by using the spread operator, although this should be avoided as the parameters necessarily will lose all or most of their semantic meaning.
```js
const polymorphs =  [simpleLog, priorityLog, serverLog]
const polyLog = (...args) => polymorphs[args.length - 1](...args)
// Because we spread on args, we don't know what each parameter is called anymore
```
## Error Handling

So far we've used `polyLog` under the "Happy Path" scenarios only. So let's think about the "Sad Path" and error handling a bit. Sometimes `polyLog` might be called with no parameters or maybe even with more than three parameters. Let's add some more structure to the function-arity map array so that it can safely handle such situations:
```js
// The sub-functions are back in an internal array in this example
function polyLog (msg, priority, dest) {
  const args = arguments.length
  return [
    () => console.log('Error: polyLog was invoked with no arguments'),
    () => console.log(msg),
    () => console.log(`[${priority}] ${msg}`),
    () => dest.log(`[${priority}] ${msg}`),
    () => console.log('Error: polyLog was invoked with too many arguments: ' + args),
  ][args > 3 ? 4 : args]()
}
```

We've changed how we are accessing the array index now to use the value of `arguments.length` without substracting `1` because now we've added a new sub-function that will execute when no parameters are passed. We also save a reference to `arguments.length` in the constant `args` since we now access that value twice. Finally, we perform a quick comparison on `args` to catch the scenario where more than 3 parameters are passed. In such a case we pass a value of 4 so that a default function will be invoked for handling such errors. The sub-functions at positions 0 and 4 can be customized to handle those class of errors in the way best suited for your use case.

If you absolutely want to remove the harded coded numbers 3 & 4, then there's a change you can make to do so which uses the functions `.length` property. `.length` references the number of parameters that are in the function definition. So we can define a `const len` that takes that value and use that to compare against the number of parameters that were actually passed in `args`.
```js
function polyLog (msg, priority, dest) {
  const args = arguments.length
  const len = polyLog.length
  return [
    () => console.log('Error: polyLog was invoked with no arguments'),
    () => console.log(msg),
    () => console.log(`[${priority}] ${msg}`),
    () => dest.log(`[${priority}] ${msg}`),
    () => console.log('Error: polyLog was invoked with too many arguments: '+args),
  ][args > len ? len + 1 : args]()
}
```

## Typescript


In Typescript we can extend this to get terse type checking as well:

```ts
interface ServerpolyLog {
    log: (msg: string): void
}

function polyLog (
    msg: String, 
    priority: Number | undefined, 
    dest: ServerpolyLog | undefined
  ): void {
	return [
        () => console.log(msg),
        () => console.log(`[${priority}] ${msg}`),
        () => dest.log(`[${priority}] ${msg}`),
    ][arguments.length - 1]()
}
```


Could there be a generalized function that takes an array of functions and returns this polymorphic pattern?
```js
function polymorph(array, ...args) {
    return (args) => array[args.length -1]
}
```