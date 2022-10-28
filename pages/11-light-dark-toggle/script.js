const { Input } = require("postcss");

// TODO: Select the HTML element
const html = document.querySelector("html");
const checkbox = document.querySelector("input");
// TODO: Add 'dark' to its class list whenever the checkbox is checked
// HINT: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
Input.addEventListener("change", function () {
  html.classList.toggle("dark");
});
