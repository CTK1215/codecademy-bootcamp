// Password Security Analyzer
// Each function does one job. The bigger functions call the smaller ones
// instead of repeating their logic.

// ----- Basic checks -----

function checkLength(password) {
  // under 8 is too short, 8 to 15 is good, 16 and up is long
  if (password.length < 8) {
    return "too short";
  } else if (password.length <= 15) {
    return "good";
  } else {
    return "long";
  }
}

function countNumbers(password) {
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    // digits sit between "0" and "9" so I can compare them like this
    if (password[i] >= "0" && password[i] <= "9") {
      count++;
    }
  }
  return count;
}

function countUppercase(password) {
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    // same idea as countNumbers, just A through Z
    if (password[i] >= "A" && password[i] <= "Z") {
      count++;
    }
  }
  return count;
}

function countSpecialCharacters(password) {
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    // only these seven count as special for this challenge
    if (
      password[i] === "!" ||
      password[i] === "@" ||
      password[i] === "#" ||
      password[i] === "$" ||
      password[i] === "%" ||
      password[i] === "&" ||
      password[i] === "*"
    ) {
      count++;
    }
  }
  return count;
}

// ----- Yes or no questions built on the checks above -----

function hasGoodLength(password) {
  let result = checkLength(password);
  if (result === "good" || result === "long") {
    return true;
  } else {
    return false;
  }
}

function hasNumber(password) {
  // reuse the counter instead of writing another loop
  let result = countNumbers(password);

  if (result > 0) {
    return true;
  } else {
    return false;
  }
}

function hasUppercase(password) {
  let result = countUppercase(password);

  if (result > 0) {
    return true;
  } else {
    return false;
  }
}

function hasSpecialCharacter(password) {
  let result = countSpecialCharacters(password);

  if (result > 0) {
    return true;
  } else {
    return false;
  }
}

function hasRepeatedCharacters(password) {
  // stop 2 early so i + 2 never runs past the end of the string
  for (let i = 0; i < password.length - 2; i++) {
    if (
      password[i] === password[i + 1] &&
      password[i + 1] === password[i + 2]
    ) {
      // found three in a row, no need to keep looking
      return true;
    }
  }
  return false;
}

// ----- Scoring -----

function calculateScore(password) {
  let score = 0;

  if (hasGoodLength(password) === true) {
    score++;
  }
  if (hasNumber(password) === true) {
    score++;
  }
  if (hasUppercase(password) === true) {
    score++;
  }
  if (hasSpecialCharacter(password) === true) {
    score++;
  }
  if (checkLength(password) === "long") {
    score++;
  }

  // spicy mode: lose a point for three repeats, but never go below 0
  if (hasRepeatedCharacters(password) === true) {
    score--;
  }
  if (score < 0) {
    score = 0;
  }

  return score;
}

function getPasswordStrength(password) {
  let result = calculateScore(password);

  if (result <= 1) {
    return "Weak";
  } else if (result <= 3) {
    return "Medium";
  } else if (result === 4) {
    return "Strong";
  } else {
    return "Very Strong";
  }
}

// ----- Report -----

function hidePassword(password) {
  // one star per character, no if needed
  let hidden = "";
  for (let i = 0; i < password.length; i++) {
    hidden += "*";
  }
  return hidden;
}

function analyzePassword(password) {
  // this is where everything comes together
  let hidden = hidePassword(password);
  let length = password.length;
  let rating = checkLength(password);
  let count = countNumbers(password);
  let upperCase = countUppercase(password);
  let specialCharacter = countSpecialCharacters(password);
  let security = calculateScore(password);
  let strength = getPasswordStrength(password);

  console.log("Password Security Report");
  console.log("--------------------------");
  console.log("Password:", hidden);
  console.log("Password length:", length);
  console.log("Length rating:", rating);
  console.log("Numbers:", count);
  console.log("Uppercase Letters:", upperCase);
  console.log("Special characters:", specialCharacter);
  console.log("Security score:", security, "/5");
  console.log("Strength:", strength);
}

// ----- Tests -----

console.log(checkLength("hello"));
console.log(checkLength("javascript123"));
console.log(checkLength("thisIsAVeryLongPassword"));
console.log(countNumbers("hello123"));
console.log(countNumbers("abc"));
console.log(countUppercase("HelloWorld"));
console.log(countUppercase("javascript"));
console.log(countSpecialCharacters("Hello!!"));
console.log(countSpecialCharacters("test123"));
console.log(countSpecialCharacters("Hello!@#$%&*"));
console.log(hasGoodLength("javascript123"));
console.log(hasGoodLength("hello"));
console.log(hasNumber("hello123"));
console.log(hasNumber("hello"));
console.log(hasUppercase("hello123"));
console.log(hasUppercase("WHAT!"));
console.log(hasSpecialCharacter("@Chris$"));
console.log(hasSpecialCharacter("I am # 1!"));
console.log(calculateScore("Chris is #1 & On top!"));
console.log(getPasswordStrength("hello"));
console.log(getPasswordStrength("$Hello1234567890!"));
analyzePassword("hello");
analyzePassword("hello123");
analyzePassword("Hello123");
analyzePassword("Hello123!");
analyzePassword("SuperSecure123!");

// spicy mode tests
console.log(calculateScore("aaa"));
console.log(hasRepeatedCharacters("Hellooo123"));
console.log(hasRepeatedCharacters("Hello123"));
