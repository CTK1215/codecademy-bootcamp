# JavaScript Challenge: Password Security Analyzer

## Overview

You are building a program that analyzes a password and determines how secure it is.

You will build the program **one function at a time**.

Each function should solve **one small problem**. Later functions will use the functions you already created.

By the end, one final function will combine everything into a complete password security report.

---

# Part 1 — Check Password Length

Create a function:

```javascript
checkLength(password)
```

The function should return:

- `"too short"` if the password has fewer than 8 characters
- `"good"` if the password has 8–15 characters
- `"long"` if the password has 16 or more characters

### Examples

```javascript
checkLength("hello");
// "too short"

checkLength("javascript123");
// "good"

checkLength("thisIsAVeryLongPassword");
// "long"
```

Test your function before moving on.

---

# Part 2 — Count Numbers

Create a function:

```javascript
countNumbers(password)
```

Loop through the password one character at a time.

Count how many characters are numbers.

### Examples

```javascript
countNumbers("hello123");
// 3

countNumbers("abc");
// 0
```

### Hint

You can determine if a character is between `"0"` and `"9"`:

```javascript
character >= "0" && character <= "9"
```

Return the final count.

Test your function before moving on.

---

# Part 3 — Count Uppercase Letters

Create a function:

```javascript
countUppercase(password)
```

Loop through the password and count how many uppercase letters it contains.

### Examples

```javascript
countUppercase("HelloWorld");
// 2

countUppercase("javascript");
// 0
```

### Hint

Think about how these might help:

```javascript
letter.toUpperCase()
letter.toLowerCase()
```

Be careful:

```text
"1"
"!"
"@"
```

should **not** count as uppercase letters.

Return the final count.

Test your function before moving on.

---

# Part 4 — Count Special Characters

Create a function:

```javascript
countSpecialCharacters(password)
```

For this challenge, these are considered special characters:

```text
! @ # $ % & *
```

Loop through the password and count how many special characters it contains.

### Examples

```javascript
countSpecialCharacters("Hello!!");
// 2

countSpecialCharacters("test123");
// 0
```

Return the final count.

Test your function before moving on.

---

# Part 5 — Does the Password Meet the Length Requirement?

Now start **reusing your functions**.

Create:

```javascript
hasGoodLength(password)
```

This function **must** call:

```javascript
checkLength(password)
```

Do **not** check `password.length` again inside this function.

Return:

- `true` if `checkLength()` returns `"good"` or `"long"`
- `false` otherwise

### Examples

```javascript
hasGoodLength("hello");
// false

hasGoodLength("javascript123");
// true
```

---

# Part 6 — Does the Password Contain a Number?

Create:

```javascript
hasNumber(password)
```

This function **must** use:

```javascript
countNumbers(password)
```

Do **not** write another loop.

Return `true` if the password contains at least one number.

Otherwise return `false`.

### Example

```javascript
hasNumber("hello123");
// true

hasNumber("hello");
// false
```

---

# Part 7 — Does the Password Contain an Uppercase Letter?

Create:

```javascript
hasUppercase(password)
```

This function **must** use:

```javascript
countUppercase(password)
```

Do **not** write another loop.

Return `true` if the password contains at least one uppercase letter.

Otherwise return `false`.

---

# Part 8 — Does the Password Contain a Special Character?

Create:

```javascript
hasSpecialCharacter(password)
```

This function **must** use:

```javascript
countSpecialCharacters(password)
```

Do **not** write another loop.

Return `true` if the password contains at least one special character.

Otherwise return `false`.

---

# Part 9 — Calculate the Security Score

Create:

```javascript
calculateScore(password)
```

Start with:

```javascript
let score = 0;
```

Then award points:

- **+1** if `hasGoodLength(password)` returns `true`
- **+1** if `hasNumber(password)` returns `true`
- **+1** if `hasUppercase(password)` returns `true`
- **+1** if `hasSpecialCharacter(password)` returns `true`
- **+1** if `checkLength(password)` returns `"long"`

The maximum score is **5**.

Return the final score.

## Important Rule

`calculateScore()` should **not** contain any loops.

Reuse the functions you already created.

---

# Part 10 — Determine Password Strength

Create:

```javascript
getPasswordStrength(password)
```

This function **must** call:

```javascript
calculateScore(password)
```

Store the result in a variable.

Return the password strength using the following table:

| Score | Strength |
| ------ | -------- |
| 0–1 | Weak |
| 2–3 | Medium |
| 4 | Strong |
| 5 | Very Strong |

### Examples

```javascript
getPasswordStrength("hello");
// "Weak"

getPasswordStrength("Hello123!");
// "Strong"
```

Do **not** recalculate the score manually.

---

# Part 11 — Build the Final Analyzer

Create:

```javascript
analyzePassword(password)
```

This function should connect your entire program together.

It should print a report containing:

- Password length
- Length rating
- Number count
- Uppercase letter count
- Special character count
- Security score
- Password strength

### Example

```javascript
analyzePassword("JavaScript123!");
```

Possible output:

```text
PASSWORD SECURITY REPORT
------------------------
Password length: 14
Length rating: good
Numbers: 3
Uppercase letters: 2
Special characters: 1
Security score: 4 / 5
Strength: Strong
```

---

# Function Dependency

Your completed program should contain the following functions:

```javascript
checkLength()

countNumbers()
countUppercase()
countSpecialCharacters()

hasGoodLength()
hasNumber()
hasUppercase()
hasSpecialCharacter()

calculateScore()

getPasswordStrength()

analyzePassword()
```

Each function should build on the previous ones.

```text
checkLength()
      ↓
hasGoodLength()
      ↓
      ┐
countNumbers() → hasNumber() ──────────────┐
                                            │
countUppercase() → hasUppercase() ─────────┤
                                            ↓
countSpecialCharacters() → hasSpecialCharacter()
                                            ↓
                                    calculateScore()
                                            ↓
                                getPasswordStrength()
                                            ↓
                                  analyzePassword()
```

---

# Testing

Test your program with **at least five different passwords**.

```javascript
analyzePassword("hello");

analyzePassword("hello123");

analyzePassword("Hello123");

analyzePassword("Hello123!");

analyzePassword("SuperSecure123!");
```

Your tests should include:

- A short password
- A password with no numbers
- A password with multiple numbers
- A password with no uppercase letters
- A password with multiple uppercase letters
- A password with no special characters
- A password with multiple special characters
- A password with 16 or more characters

---

# Rules

You may use:

- Variables
- Strings
- String indexing
- `.length`
- `.toUpperCase()`
- `.toLowerCase()`
- Conditionals
- Logical operators
- Loops
- Functions
- Parameters
- Return values
- `console.log()`

Do **not** use:

- Arrays
- Objects
- `prompt()`

---

# 🌶️ Spicy Mode

## Part 12 — Hide the Password

Create:

```javascript
hidePassword(password)
```

Return a string containing one `*` for every character in the password.

Example:

```javascript
hidePassword("Hello123!");
// *********
```

Use a loop.

Update `analyzePassword()` so the report displays the hidden password instead of the original password.

Example:

```text
Password: *********
```

---

## Part 13 — Detect Repeated Characters

Create:

```javascript
hasRepeatedCharacters(password)
```

Return `true` if the same character appears **three times in a row**.

Examples:

```javascript
hasRepeatedCharacters("Hellooo123");
// true

hasRepeatedCharacters("Hello123");
// false
```

Modify `calculateScore()`:

- Subtract **1 point** if three repeated characters are found.
- The score should never go below **0**.
