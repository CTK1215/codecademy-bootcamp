# Password Security Analyzer

A small JavaScript program that takes a password and tells you how strong it is. Built one function at a time for the Codecademy Full-Stack Developer bootcamp (Week 3, functions challenge).

The point of the exercise was not the password checker itself. It was learning to break a problem into small functions and then build bigger functions out of the smaller ones, so nothing gets written twice.

## What it does

Run it and you get a report for each test password:

```text
Password Security Report
--------------------------
Password: *********
Password length: 9
Length rating: good
Numbers: 3
Uppercase Letters: 1
Special characters: 1
Security score: 4 /5
Strength: Strong
```

## How to run it

You need Node installed.

```bash
node passwordAnalyzer.js
```

The test calls are at the bottom of `passwordAnalyzer.js`. Add your own `analyzePassword("...")` line to try a different password.

## How the score works

A password starts at 0 and earns one point for each of these:

| Check | Point |
| --- | --- |
| 8 or more characters | +1 |
| Contains a number | +1 |
| Contains an uppercase letter | +1 |
| Contains a special character (`! @ # $ % & *`) | +1 |
| 16 or more characters | +1 |
| Same character three times in a row | -1 |

The score never drops below 0. Then the score maps to a strength:

| Score | Strength |
| --- | --- |
| 0 to 1 | Weak |
| 2 to 3 | Medium |
| 4 | Strong |
| 5 | Very Strong |

## How the functions fit together

Every function does one job. The higher-level functions call the lower-level ones instead of repeating their logic.

```text
checkLength()              countNumbers()   countUppercase()   countSpecialCharacters()
      |                          |                 |                     |
hasGoodLength()             hasNumber()     hasUppercase()      hasSpecialCharacter()
      |                          |                 |                     |
      +--------------------------+-----------------+---------------------+
                                 |
                          calculateScore()  <-- also calls hasRepeatedCharacters()
                                 |
                        getPasswordStrength()
                                 |
                          analyzePassword()  <-- also calls hidePassword()
```

| Function | Job |
| --- | --- |
| `checkLength` | Rates the length as `"too short"`, `"good"`, or `"long"` |
| `countNumbers` | Counts digits |
| `countUppercase` | Counts capital letters |
| `countSpecialCharacters` | Counts `! @ # $ % & *` |
| `hasGoodLength` | True if the length rating is `"good"` or `"long"` |
| `hasNumber` | True if there is at least one digit |
| `hasUppercase` | True if there is at least one capital letter |
| `hasSpecialCharacter` | True if there is at least one special character |
| `hidePassword` | Returns one `*` per character so the report never shows the real password |
| `hasRepeatedCharacters` | True if any character shows up three times in a row |
| `calculateScore` | Adds up the points, subtracts for repeats, floors at 0 |
| `getPasswordStrength` | Turns the score into Weak / Medium / Strong / Very Strong |
| `analyzePassword` | Pulls everything together and prints the report |

## Constraints I worked under

The challenge only allowed the basics: variables, strings, string indexing, `.length`, `.toUpperCase()`, `.toLowerCase()`, conditionals, logical operators, loops, functions, and `console.log()`. No arrays, no objects, no `prompt()`. Every count is a plain `for` loop over the string.

## What I took away

- Write the small function first, test it, then build on it. Every later function got easier because the earlier ones were already proven.
- A function that answers a yes/no question (`hasNumber`) should reuse the function that counts (`countNumbers`), not run its own loop.
- When you are looking ahead in a string (`password[i + 2]`), stop the loop early so you never read past the end.
- Returning from inside a loop is fine when you only care whether something happened at least once.
