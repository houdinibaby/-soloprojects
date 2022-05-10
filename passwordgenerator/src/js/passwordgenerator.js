
const characters = "!@#$%^&*()-_=+{}|[]\;:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
let passwordEl3 = document.getElementById("password-el3")
let passwordEl4 = document.getElementById("password-el4")
let changeLengthEl = document.getElementById("change-length")//.valueAsNumber
const passGen = document.getElementById("passgen-el")
let charLength = 15



function passwordgen(charLength) {
  let result = " ";
  
  for (i = 0; i < charLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  
  }
  return result;
  }
  
  passGen.addEventListener("click", function () {
    passwordgen()
     
  passwordEl1.textContent = passwordgen(charLength)
  passwordEl2.textContent = passwordgen(charLength)
  passwordEl3.textContent = passwordgen(charLength)
  passwordEl4.textContent = passwordgen(charLength)
  
  })

  changeLengthEl.addEventListener("input", function () {
    passwordgen()
    charLength = changeLengthEl.value

  })