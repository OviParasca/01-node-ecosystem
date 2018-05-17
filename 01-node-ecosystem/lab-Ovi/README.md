![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 01: Node Ecosystem
===

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository (your master to our master)
* Include a travis link and badge in your README
* Submit on canvas a question and observation, how long you spent, the link to your travis build, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.

* **README.md** - contains your documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **lib/** - contains module definitions
* **__test__/** - contains unit tests

## Testing

### Greet Module Tests
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument

### Arithmetic Module Tests
* Test each method for proper use (invoked with number arguments)
* Test each method for inproper use (invoked with one or more non-number arguments)

## Feature Tasks

### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

### Arithmetic Module
Create a NodeJS module in the `lib` directory named `arithmetic.js`. This module exports an object and should have `add` and `sub` methods that implement addition and subtraction.
* The `add` method should have a 2 parameters (airty of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the sum of the 2 numbers
* The `sub` method should have 2 parameters (airty of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the second parameter subtracted from the first parameter

<br />
<br />

## Unit tests

* For the greet.test.js I tested happy-path by using the name "World", and the expected output being "Hello World".
* For the unhappy-path I tested a number (123) for the name and the expected output is null.

* For the arithmetic.test.js I tested happy-path for the addition by adding 2 numbers (2 + 3) and the expected output is 5, and for the subtraction happy-path I subtracted 2 from 5 and got the exptected result of 3.
* For the unhappy-path I tried to add and subtract a number and a letter and got the exptected output of null.

![image](https://travis-ci.com/OviParasca/01-node-ecosystem.svg?branch=master)
