// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = window.prompt("Please select a length of at least 8 characters and no more than 128 characters.");
var passwordLowercase = window.prompt("Would you like the password to contain lowercase letters?");
var passwordUppercase = window.prompt("Would you like the password to contain uppercase letters?");
var passwordNumeric = window.prompt("Would you like the password to contain numbers?");
var passwordSpecialChar = window.prompt("Would you like the password to contain special characters?");

// list of lowercase letters to pick from
var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseOptions = lowercaseOptions.map(word => word.toUpperCase());
var numericOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialOptions = [" ", "!", "U+0021"]

console.log(specialOptions)
function generatePassword() {
    console.log ("Button has been clicked");
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

    return "Generated Password will go here!";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);