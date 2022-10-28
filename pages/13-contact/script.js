// TODO: Handle form submission (prevent default)
const form = document.querySelector("form");
const p = document.querySelector("p");

function createResponseMessage(formInfo) {
  return `
  Thank you ${formInfo.name} for your message!
  We will get back to you at ${formInfo.email}.
  `;
}

function handleSubmit(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const userInputs = Object.fromEntries(data.entries());
  p.textContent = createResponseMessage(userInputs);
}

form.addEventListener("submit", handleSubmit);
// TODO: Capture the form data into an object and then output message in '#response' element
// Example: "Thank you for your submission John Doe. We will be in touch shortly using your email: john@doe.com"
