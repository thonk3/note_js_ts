# Functional Programming

So this is an approach in software basing around evaluatio of functions (similar to maths)
Core principles of Functional Programming:
- Functions are independent from state of the programs or global variables. They only depends on the arg to make a calculation
- Functions try to limit change to state of the program, **AVOID** changes to global object holding the data
- Functions have minimal side effects

day1
- functional programming is about
  - **isolated functions** no dependence on state of program(mutable global vars)
  - **pure functions**
  - **limited side effects** any state changes are carefully controlled and limited
- terminology: 
  - **callbacks**
  - first class functions - functions assigned to a var to pass into a function
  - higher order functions - takes function as an arg and returns a function as a value
  - lamda
- hazards of using Imperative code (what the fuck is this part)
- avoid mutations and side effects
- pass args to avoid external dependence in a funciton

day 2
- refactor global vars out of functions
- use `map` to extract data from array
- implementing map on prototype
  - dont really see the point of this if its using forEach
- using `filter`
- implementing filter on prototype
- return part of array using `slice`
- removing elements with `slice` try not to use `splice`

day3

