// will tell you which event was clicked/ what text is in the button htat was clicked
// event bubbling, if you click on a child, the parent element will be notified.

function handleClick(event) {
  if (event.target.matches("button")) {
    console.log("click", event.target.textContent);
  }
}
// this is the bubbling part, convenient when we have a log of items inside the parent element
document.querySelector("main").addEventListener("click", handleClick);

// This will only log buttons clicked
// if (event.target.matches("button")) {
//   console.log("click", event.target.textContent);
// }
