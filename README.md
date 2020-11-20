# automata

Write a function in solution.js which takes some text as an argument and returns an array containing first word of each text line. Empty lines should be ignored.

* Lines are separated with \n
* In any part of the text there can be any amount of spaces
* text should be iterated over character by character
* Solution should be written using automata-based concept (no regexes)

```
const text = '  what who   \nhellomy\n hello who are you\n';
const result = solution(text);
// [
//   'what',
//   'hellomy',
//   'hello',
// ];

```

took from hexlet.io