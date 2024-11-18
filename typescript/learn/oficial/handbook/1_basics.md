# TS basics

> [first page of the handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

OK so far this is more or less a read through rather than explaining every thing

Dot points 

- JS rely so much on the system trying to "guess" what you want to do regarding types
- it is very easy to write error prone code because of its abstraction
- yes sure you could test if the code runs or not, this is not realistic in bigger code bases
- here comes TS introducing `static type-checking` to make predictions what each part of code expects before it runs

## Static type-checking

Essentially its a tool to find typing bugs before the code is compiled then run.
Ensuring less bugs, and faster development

## Non-Exception failures

- So this is saying base JS have some dangerous effects
  - accessing a prop that doesnt exist returns undefined instead of throwing an error

> Just re-iterating the fact that stricter rules is beneficial for any codebase

## Types for Tooling

- Additionally from catching early bugs, TS **prevents** mistakes early on
- TS tooling for your editor wins

## `tsc` compiler

Introducing the `tsc` compiler which would also throw errors if it detects any

## Emitting with Errors

This is more on `tsc` how the js output file will be compiled as it assumes that you always know better than the compiler.

It runs under the assumption that youre migrating working JS code, hence why stop when it is already working

So to enforce strict mode, add in the compiler option [noEmitOnError](https://www.typescriptlang.org/tsconfig#noEmitOnError) 
to stop the compilation if an error is detected

## Explicit types

Add type annotation to explicitly set the types of variables and objects

TS can still infer the type on assignment

## Erased Types

The explicit type annotation will be removed in the compiled JS files as it is
- not part JS, no browser runs Ts out-of-the-box

## Downleveling

TSC has the ability to rewrite ES6 to older ecmascript standards
- by default it downlevels to ES3 (as most supported by most browsers)
- can add the `--target` flag to set which version to down level to

## Strictness

People look for different things in TS. the strictness setting is more like a dial
2 biggest strictness you should know are

### noImplicitAny

using implicit `any` annotation type defeats the purpose of TS (might as well stay with js then)

### strictNullChecks

by default `null` and `undefined` are assignable to any other types.
This flag allows you to handle `null` and `undefined` more explicit, saving pain in the long run

[DIS BADDD](https://www.youtube.com/watch?v=ybrQvs4x0Ps)


> pretty interesting background info but still basic concepts 