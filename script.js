// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() 
// Length verification
{
  var length = window.prompt("Enter the desired password length (between 8 and 128 characters):");
  while (isNaN(length) || length < 8 || length >128) {
    length = window.prompt("Invalid input! Please enter a length between 8 and 128 characters:");
  }
// Lowercase Option  
  var chooseLowerCase = confirm("Would you like to include lower case letters?");
  if (chooseLowerCase) {
    window.alert("You have selected lowercase letters to be included")
  } else {
    window.alert("Lowercase letters will NOT be included")
  }
  
// Uppercase Option
  var chooseUpperCase = confirm("Would you like to include upper case letters?");
  if (chooseUpperCase) {
    window.alert("You have selected uppercase letters to be included")
  } else {
    window.alert("Uppercase letters will NOT be included")
  }
// Numeric Option
  var chooseNumeric = confirm("Would you like to include numbers?");
  if (chooseNumeric) {
    window.alert("You have selected numbers to be included")
  } else {
    window.alert("Numbers will NOT be included")
  }
// Special Character Option
  var chooseSpecial = confirm("Would you like to include special characters?");
  if (chooseSpecial) {
    window.alert("You have selected special characters to be included")
  } else {
    window.alert("Special characters will NOT be included")
  }
// For Loop for Random Password
  for ( var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Series of Prompts for password Criteria
// WHEN prompted for password criteria

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page