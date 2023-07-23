# Everyday Types

Exploring common types of values in JS and ways to describe then in TS

starting with the 3 most common primitives `string`, `number` and `boolean`.
you know this

## Arrays

to specify an array of a type use the syntax as so for example number `number[]`.
this work for any type.

You can also write as `Array<number>` bit this will be covered more when learning about **Generics**

> `[number]` is a different thing. see [tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

## `any`

use sparingly when you want a value to not cause a type-checking error

> also remember the `noImplicitAny` tsc config option. it flags every `any` implicit as an error

## Types annotation on variables

explicitly annotate a variable on declaration.
with out the annotation, TS will automatically infer the type based on its initialization.

```ts
let myName: string = "egg";
```

## Functions

You can pretty much do the same type annotation in functions in both parameter and return types

```ts
function greet(name: string): string {
    return `Hello ther ${name}`;
}
```

for **anonymous functions**, its is kind of different,
TS can automatically infer the type basing on where it is used

## Object types

most common type you encounter beside primitives are **object types**.
to define an object type just list its properties and their types.

The property types are optional, itll be asumed assumed to `any` if not specified

```ts
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

### Optional props

object types can also specify that some or al of their properties are optional, add a `?` after the prop name

```ts
function printName(obj: { first: string, last?: string}) { /* ... */ };
```

## Union types

basically combining types. allowing named values to be many different types

But this could cause runtime errors along the line. Luckily TS would only allow an operation if **every** member of the type union is handled.
such as

```ts
function printId(id: number | string) {
    if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
    } else {
    // Here, id is of type 'number'
    console.log(id);
    }
}
```

## Type aliases

oh so you can give types a name, not just an object type

> this seems weird but not sure if ill use this

```ts
type ID = number | string;
```

## INTERFACES

> An interface declaration is another way to name an object type: **what**

> I need to review the concepts of **interfaces** if not see how it is in TS

ah ok so Interfaces is introduced by TS. the main difference with type alias is
- interface is extendable
- type cannot be re-opened to add new props

```ts
// extending interface
interface Animal {
    name: string
}
interface Bear extends Animal {
    honey: boolean
}
// adding new field
interface Animal {
    legs: string
}
```

> more will be covered for interface later

## Type assertions

sometimes you will have more info about the types that TS doesnt know about
- i.e a function will always return a specific type in a specific context
- you can use assertion to specify a more specific type

> rare use i think

## Literal types

Constants, generally its more useful to use this as part of union types

```ts
// i.e function options
function printText(s: string, alignment: "left" | "right" | "center") {}

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
```

### Literal inference

when initializing an object, TS assumes the prop might change value later

OK what I understand
- on object initialization, the type of its props are mainly infered
- so when assigning literals on the props
  - the props are under the assumption that they will change (not a literal)
- use assumption to fix this 

## `null` and `undefined`

these are primitives used to signal absent / uninit values.
TS has 2 corresponding types by same name but behaves differently depending on if you have `strictNullCheck` option toggled

Off
- these values can still be accessed normally
- can be reassign to a prop of any type
- recommend to turn `on`

On
- will need to test or handled the case if the value is null
- see `narrowing`

Non-null assertion operator(postfix `!`)
- used to remove `null` and `undefined` 
- just like assertion, this doesnt change runtime behavior of code
- only use `!` when you knwo that value cant be `null` or `undefined`

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
// test / run this
```

## Other primitives

- [Enums](https://www.typescriptlang.org/docs/handbook/enums.html) introduced By ts
- [bigint](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint) new type introduced in ES2020 js
- [`symbol()`](https://www.typescriptlang.org/docs/handbook/symbols.html)