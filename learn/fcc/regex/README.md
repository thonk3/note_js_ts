# regex

hooray regex + js stuff, yikes

day 1
- `test()` methods
  - so in js you can create a regex variable by enclosing your rules value with `/rule/`
- use `ruleVar.test(testVar)` to get result
- use `|` to search multiple literal rules
- ignore case with `/match/i`
- extract matching values with `match()`
  - `string.match(regex)` get single match
- to get multiple matches, add `g` at the end of the regex rule
- period wildcard `.`
- match single char with many possibilities using `[]`
- match range of chars
- match range of numbers

day 2
- exclude matching using `[^match]`
- match char one or more time `+`
- match char 0 or more time `*`
- lazy matching, will match the shortest possible part that satisfy the rules.
  - regex is greedy by default
  - use `?` to change character to do lazy matching
- finding criminals challange

day 3
- 