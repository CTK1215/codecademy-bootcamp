function checkLength(password) {
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
    if (password[i] >= "0" && password[i] <= "9") {
      count++;
    }
  }
  return count;
}

function countUppercase(password) {
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      count++;
    }
  }
  return count;
}

function countSpecialCharacters(password) {
  let count = 0;
  for (let i = 0; i < password.length; i++) {
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

function hasGoodLength(password) {
  let result = checkLength(password);
  if (result === "good" || result === "long") {
    return true;
  } else {
    return false;
  }
}

function hasNumber(password) {
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

function analyzePassword(password) {
    let length = password.length;
    let rating = checkLength(password);
    let count = countNumbers(password);
    let upperCase = countUppercase(password);
    let specialCharacter = countSpecialCharacters(password);
    let security = calculateScore(password);
    let strength = getPasswordStrength(password);

    console.log("Password Security Report");
    console.log("--------------------------");
    console.log("Password length:", length);
    console.log("Length rating:", rating);
    console.log("Numbers:", count);
    console.log("Uppercase Letters:", upperCase);
    console.log("Special characters:", specialCharacter);
    console.log("Security score:",security,"/5");
    console.log("Strength:", strength);
}
/*let password = "hello123";
//for (let i = 0; i < password.length; i++) {
  //console.log("i is", i, "and the character there is", password[i]);
}
console.log(checkLength("hello"));
console.log(checkLength("javascript123"));
console.log(checkLength("thisIsAVeryLongPassword"));
console.log(countNumbers("hello123"));
console.log(countNumbers("abc"));
console.log(countUppercase("HelloWorld"));
console.log(countUppercase("javascript"));*/
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

