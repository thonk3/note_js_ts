# ts for js programmers

## intro

- ts offers everything js offers but with an extra *type system*
- js natively offers prinitive type but doesnt check you consistently assign the types

---

## type by inference

- js will auto assign the types as you code
- ts will use the initial value as the type

```ts 
let hey = "string"
let hell: string;
```

## defining types

these are just some example patterns of ts

- object interface and initiate object
```ts
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "hello",
    id: 0,
}
```
- since js uses oop, so does ts. You can use interface declaration with classes
```ts
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccout("Murph", 1);
```
- can use interface to annotate parameters and return value to functions
```ts
// set return value
function getAdminUsers(): User {}

// set parameter type 
function deleteUser(user: User) {}
```
- theres also other interface types in js (`boolean`, `bigint`, `null`, `number`, `string`, `symbol`, `object` and `undefined`)
- ts extends this with a few more 
- `any` allow anything
- `unknown` ensure someone using this type declare what the type is
- `void` returns undefined or has no return value

---

## Composing types

ts can creates complex types by **combining** simple types. Two popular ways of doing so is with `Unions` and `Generics`

### unions

- this is to declare a type can be **one of many types**
```ts
// describe boolean type can be true or false
type MyBool = true | false;
```
- good uscase for union is to describe the set of `string` or `number` literal what a value is **allowed to be**
```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```
- its also useful to handle different types of function args
```ts
// param obj can be both string or string array
function wrapInArray(obj: string | string[]) {
    if(typeof obj === "string")
        return [obj];
    else return obj;
}
```

### generics

> Essentially typecasting

- generics provide variable to types (e.g array)
- An array without generics could contain anything, this is do **define** what the arrays contains
  ```ts
  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjWithNameArray = Array<{ name: string }>;
  ```
- you can declare your own type that uses generic
  ```ts
  interface Backpack<Type> {
      add: (obj: Type) => void;
      get: () => Type;
  }

  // this tells ts theres a const
  // and not worry where it comes from
  declare const backpack: Backpack<string>;

  // object is a string as declared with the conet
  const object = backpack.get();

  // this will throw an error because the type is string
  object.add(20);
  ```

---

## structural type system

a ts core principle is type checking focuses on the shape that values have (duck typing/ structural typing)

- so if 2 obj have the same shape, theyre considered to be of the same type

```ts
interface Point {
    y: number;
    x: number;
}

function logPoint(p: Point) {
    console.log(`${p.x} , ${p.y}`);
}

// logs 12, 26
// dint set interface but same as Point
const point = { x: 12, y: 26 };
logPoint(point)


/*
    point here was never declared as POINT type
    but ts compare the shape of point to Point in the type check
    so it passes
*/
```

shape matching only requires a **subset** of the objects field to match

```ts
// OK
const p3 = { x: 12, y: 26, z: 89 }
// OK
const rec = { x: 10, y: 30, width: 20, length: 5 };
// BAD
const color = { hex: "#4444" }
```

no difference between how class or obj conforms to shapes.
If the obj or classes has all the required properties ts will say they match regardless of other implementation detail.

---

> should go through
> - handbook - the rest of ts content
> - tooling - how to use and compile ts
> but for the react rewrite lets just use regular js