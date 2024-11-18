# ch01 values, types and operators

> overal this seems to be just theroretical stuff, not much on syntax yet

- [ch01 values, types and operators](#ch01-values-types-and-operators)
  - [numbers](#numbers)
  - [arithmetic](#arithmetic)
  - [special numbers](#special-numbers)
  - [string](#string)
  - [unary operators](#unary-operators)
  - [boolean value](#boolean-value)
    - [logical operators](#logical-operators)
  - [empty values](#empty-values)
  - [automatic type conversion](#automatic-type-conversion)
    - [short circuting of logical operators](#short-circuting-of-logical-operators)
- [summary](#summary)

## numbers

- js uses 64 bit numbers, singed 64 bit numbers
- can also be a non-whole floating point number
- keep in mind that floating point numbers are very prone to precision errors

## arithmetic

- intro to operators
- precedence of operators. order of operation

## special numbers

there are 3 types of special numbers in js.

- `Infinity` and `-Infinity`
- `NaN`

they are considered numbers but are not actual numbers

`NaN`: Not a Number. usually a result of an operation which doesnt result in a meaningful result

## string

- strings in js based on `unicode` standard
- strings cant be divided, multiplied, substracted BUT can be used with `+` for **concatination**
- special string formatting using backtick
    ```js
    `half of 100 is ${100/50}`
    ```


## unary operators

so not all operators are symbols. this section only talks about `typeof`

- this is often used in pair with debugging
- used to get the string of what the value type is of the variable/value

> binary operators (math symbols) takes into 2 value

> unary operator takes in 1 parameter

## boolean value

- yep just `true` and `false`
- only `NaN` compare with it self will return a `false`
    ```js
    console.log(NaN === NaN);
    ```

### logical operators

- introduce to `&&` (and operator) and `||` (or operator)
- also briefly introduced to `tenary oparator` 
    ```js
    console.log(true ? 1 : 2);  // 1
    console.log(false ? 1 : 2); // 2
    ```

## empty values

- `null` and `undefined` denotes the absence of a meaningful value.
- they carry no information
- difference between the two is an accident of js design. they are basically **interchangeable**

## automatic type conversion

- since js is super relaxed(weird) and accepts almost everything you do
- when an operator is appied to the *wrong* type of value, js will quietly change it for you
  - using rules you might not want/ expect
- Ok so for comparrisons `==` and `!=` will try to convert data type if unmatched
- to **prevent** auto conversion, use `===` and `!==`

### short circuting of logical operators

- `&&` and `||` handles different value types differently
- they will
  - convert left/right handside to boolean type to decide on what to do
  - then depends on the result of the operation, returns the default value of rh/lf

for `||`
- will return the value to its left when that can be converted to true. or returl right if otherwise
- useful toset a default value if you have a value that might be empty
- `let a = var_set || 12`

---
# summary

- so far so good
- i do like that it doenst go too much in depth of too many things
- good introduction and revision
- i got more clarity on
  - special numbers
  - automatic type conversion
  - short circuiting of logical operators