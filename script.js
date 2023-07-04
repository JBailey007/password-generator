// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = {
  num: "0123456789",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}

function generatePassword() 
// Length verification
{
  var passwordInfo = "";
  var length = window.prompt("Enter the desired password length (between 8 and 128 characters):");
  while (isNaN(length) || length < 8 || length > 128) {
    length = window.prompt("Invalid input! Please enter a length between 8 and 128 characters:");
  }
// Lowercase Option  
  var chooseLowerCase = confirm("Would you like to include lower case letters?");
  if (chooseLowerCase) {
    window.alert("You have selected lowercase letters to be included")
    passwordInfo = passwordInfo + charset.lowerCase; 
  } else {
    window.alert("Lowercase letters will NOT be included")
    passwordInfo !== passwordInfo + charset.lowerCase; 
  }
  
// Uppercase Option
  var chooseUpperCase = confirm("Would you like to include upper case letters?");
  if (chooseUpperCase) {
    window.alert("You have selected uppercase letters to be included")
    passwordInfo = passwordInfo + charset.upperCase; 
  } else {
    window.alert("Uppercase letters will NOT be included")
    passwordInfo !== passwordInfo + charset.upperCase; 
  }

// Numeric Option
  var chooseNumeric = confirm("Would you like to include numbers?");
  if (chooseNumeric) {
    window.alert("You have selected numbers to be included")
    passwordInfo = passwordInfo + charset.num; 
  } else {
    window.alert("Numbers will NOT be included")
    passwordInfo !== passwordInfo + charset.num; 
  }

// Special Character Option
  var chooseSpecial = confirm("Would you like to include special characters?");
  if (chooseSpecial) {
    window.alert("You have selected special characters to be included")
    passwordInfo = passwordInfo + charset.specialChar; 
  } else {
    window.alert("Special characters will NOT be included")
    passwordInfo !== passwordInfo + charset.specialChar; 
  }

// For Loop for Random Password
var randomPassword = "";

  for ( var i = 0; i < length; i++) {
    randomPassword += passwordInfo[Math.floor(Math.random() * passwordInfo.length)];
  }

  return randomPassword; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);