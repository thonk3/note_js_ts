# narrowing

as js is loosely typed **narrowing** is a way to write functions 
to handle different argument types via `typeof` and conditional statements

## types of guards
- "string"
- "number"
- "bigint"
- "boolean"
- "symbol"
- "undefined"
- "object"
- "function"

`typeof` is a type guard.
TS encodes how `typeof` operates on different values 

> not sure how to summarize this part but its a nice feature

## truthiness of narrowing

> this talks about how ts/js do type inferance in conditionals

## equality of narrowing

## `in` operator narrowing

this a js operator,

test if an object contains a property

can use in ts to test if it belongs in a union type also

## assignment

OK for value assignment in TS, 
it looks at the right side of the assignment and narrows the left side if needed

## control flow analysis



## using type predicates

## discriminated unions

## `never` type

> no code example 

When narrowing you can reduce the options of a union to a point where you have removed all possibilities and have nothing left.
In that case, ts will use a `never` type to represent a state that shouldnt exist

## exhaustiveness checking

`never` type is assignable to every type.
**NO** type is assignable to `never`

> you can use narrowing and `never` to do exhaustive checking in switch statement


---

> the bulk of this chapter was just read through