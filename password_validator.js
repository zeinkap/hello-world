//Bonus: Password Validator allows you to add uppercase letter anywhere in your password.

function isPasswordUpperCase (input) {
  for (var p = 0; p < input.length; i++) {
    if (input[p] === input[p].toUpperCase()) {
        return true;
        }	else {
          return false;
        }
  }
}

function isPasswordLowerCase (input) {
  for (var l = 1; l < input.length; l++) {
    if (input[l] === input[l].toLowerCase()) {
      return true;
    }
  }
}

function isPasswordLongEnough (input) {
  if (input.length >= 8) {
    return true;
  } 
}

function isPasswordNumber (input) {
  var numbers = ['1', '2', '3', '4', '5', '6' , '7', '8', '9', '0'];
  for (var i = 1; i < input.length; i++) {
    for (var n = 0; n < numbers.length; n++) {
      if (input[i] === numbers[n]) {
        return true;
      }
    }
  }
}

function isPasswordSpecial (input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var s = 1; s < input.length; s++) {
    for (var j = 0; j < specialCharacters.length; j++) {
      if (input[s] === specialCharacters[j]) {
        return true;
      }
    }
  }
}

function isPasswordValid (input) {
  if (!isPasswordUpperCase(input)) {
    console.log('Password must start with a uppercase letter.');
  } if (!isPasswordLowerCase(input)) {
    console.log('Password requires a lowercase letter.');
  } if (!isPasswordLongEnough(input)) {
    console.log('Password does not meet required number of characters.');
  } if (!isPasswordNumber(input)) {
    console.log('Password must contain a number.');
  } if (!isPasswordSpecial(input)) {
      console.log('Password must contain at least one special character.');
    } if (isPasswordUpperCase(input) && isPasswordLowerCase(input) && isPasswordLongEnough(input) && isPasswordSpecial(input)) {
      console.log('Password is valid');
    }
  }

isPasswordValid('Ppassword2pass!word');