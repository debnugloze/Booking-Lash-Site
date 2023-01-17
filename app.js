function apply() {
  let firstName = prompt("What is your first name?");
  let age = prompt("How old are you?");
  let heading = document.querySelector("h1");
  if (age >= 18) {
    heading.innerHTML = "Hi " + firstName + "! Welcome to SheCodes 👩‍💻";
  } else {
    heading.innerHTML = "Sorry " + firstName + ", you can't apply to SheCodes.";
  }
}

let applyButton = document.querySelector("button");
applyButton.addEventListener("click", apply);
