# Softuni-JS-Backend

## Intro to Node.js

JavaScript is created to run on a browser. Node is a runtime environment for JavaScript that runs on the server.
"Node.js is an open-source, cross-platform Javascript runtime environment"

[About Node](https://nodejs.org/en/about/)

Who is the creator of Node?

V8 engine is the engine that runs the code on the server. Chromium engine.

Advantages:

- It is _Asynchronous_ and _Event_ Driven
- One language for server and client
- Very _fast_
- Efficient _package manager_

## Environment Setup

- From the _terminal_ using _REPL_
- Interpret code from a file

## NPM Packages

Node projects are usually set up as _NPM packages_
We initialise a project with this command:

```
npm init [-y to bypass questions]
```

A _package.json_ file will be created with initial configuration

## Event Loop

Order of completion of asynchronous tasks is _not guaranteed_.

- Stack calls

What is a stack? Every function has a context (execution context) that are piled up
on top of the call stack.

_Interview question_ What is a stack? What is a queue?

A stack is a datastructure commonly described as plates stacked one on top of the other. The order of execution is first we execute the last function and then all other funcitons until we reach the initial function.

Local Scope for funcitons.

Garbage Collector.

Stack and Heap?

There is no DOM by default in Node.js.

Stack and Browser APIs

Message queues.

When a user clicks a button and performs and event. The handles is added to the message queue and then is added on the stack one by one. First in, first out.

- Event Callback
- Message queue

## Modules

ES6 modules and Common modules

- Allows larger _apps_ to be _split_ and _organized_
- Each module has its _own context_
  - It _cannot pollute_ the _global scope_
- Node.js includes _three types_ of modules

  - _Core_ Modules

These modules do not require imports. They are the core modules that node gives us.
Examples are: Path, OS, Query String, FS, HTTP, Crypto, URL, etc.

- _Local_ Modules

Modules that we define ourselves in order to split functionality and organize files.

- _Third-Party_ Modules

  4.1. _Local Modules_

- Created _locally_ in the Node.js application
- Include _different functionalities_ in _separate_ folders
- Use _module.exports_ to expose a _function, obect or variable_

```javascript
module.exports = myModule;
```

- Loaded using the _require()_ function

```javascript
const myModule = require("./myModule.js");
```

## Node.js Web Server

Creating an http server with node js.

- What is a web server? All _physical_ servers have _hardware_.
- _Web servers_ are _software_ products that use the operating systme to _handle web requests_.
  They serve web content.

### Request and Response Wrappers

_The Request Wrapper_

It used to handle incoming http requests.
It has several properties, such as:

- httpVersion - 1.1 / 1.0
- headers - object for request headers
- method - "GET", "POST"
- ulr - the Url of the request

### Additional resources:

- [About Node](https://nodejs.org/en/about/)
- [Overview of Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
- [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

### Homework:

- Learn about the Event Loop
- Learn about HTTP: requests, responses, etc.
- Learn about asynchronous programming
- Implement a Stack and learn about stack as a data structure.
- Implement a Queue and learn about queue as a data structure.
- Check the documentation for FS core module.
